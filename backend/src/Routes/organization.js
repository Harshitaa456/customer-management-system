const express = require("express");
const prisma = require("../prisma");

const router = express.Router();

const organizationInclude = {
  branches: {
    orderBy: { name: "asc" },
    include: {
      customers: {
        orderBy: { name: "asc" },
        select: {
          id: true,
          name: true,
          email: true,
          phone: true,
          status: true,
        },
      },
    },
  },
};

router.get("/", async (req, res) => {
  try {
    const organizations = await prisma.organization.findMany({
      orderBy: { name: "asc" },
      include: {
        branches: {
          orderBy: { name: "asc" },
          include: {
            _count: {
              select: { customers: true },
            },
          },
        },
        _count: {
          select: { customers: true },
        },
      },
    });

    res.json(organizations);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Could not fetch organizations",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
      return res.status(400).json({
        message: "Invalid organization id",
      });
    }

    const organization = await prisma.organization.findUnique({
      where: { id },
      include: organizationInclude,
    });

    if (!organization) {
      return res.status(404).json({
        message: "Organization not found",
      });
    }

    res.json(organization);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Could not fetch organization",
    });
  }
});

module.exports = router;
