const express = require("express");
const prisma = require("../prisma");
const { resolveOrganizationAndBranch } = require("../services/organizationService");

const router = express.Router();

const customerInclude = {
  organization: {
    select: {
      id: true,
      name: true,
    },
  },
  branch: {
    select: {
      id: true,
      name: true,
    },
  },
};

router.get("/", async (req, res) => {
  try {
    const customers = await prisma.customer.findMany({
      include: customerInclude,
      orderBy: { createdAt: "desc" },
    });

    res.json(customers);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Could not fetch customers",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, email, phone, company, status, organizationName, branchName } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        message: "Name and email are required",
      });
    }

    const hasOrganization = Boolean(organizationName?.trim());
    const hasBranch = Boolean(branchName?.trim());

    if (hasOrganization !== hasBranch) {
      return res.status(400).json({
        message: "Organization and branch are both required when linking a customer",
      });
    }

    let organizationId = null;
    let branchId = null;

    if (hasOrganization && hasBranch) {
      const { organization, branch } = await resolveOrganizationAndBranch(
        prisma,
        organizationName,
        branchName
      );

      organizationId = organization.id;
      branchId = branch.id;
    }

    const customer = await prisma.customer.create({
      data: {
        name,
        email,
        phone: phone || null,
        company: company || null,
        status: status || "Active",
        organizationId,
        branchId,
      },
      include: customerInclude,
    });

    res.status(201).json(customer);
  } catch (error) {
    console.error(error);

    if (error.code === "P2002") {
      return res.status(409).json({
        message: "A customer with this email already exists",
      });
    }

    res.status(500).json({
      message: "Could not create customer",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
      return res.status(400).json({
        message: "Invalid customer id",
      });
    }

    const customer = await prisma.customer.findUnique({
      where: { id },
      include: customerInclude,
    });

    if (!customer) {
      return res.status(404).json({
        message: "Customer not found",
      });
    }

    res.json(customer);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Could not fetch customer",
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
      return res.status(400).json({
        message: "Invalid customer id",
      });
    }

    const existing = await prisma.customer.findUnique({
      where: { id },
    });

    if (!existing) {
      return res.status(404).json({
        message: "Customer not found",
      });
    }

    const { name, email, phone, company, status, organizationName, branchName } = req.body;

    const organizationProvided = organizationName !== undefined;
    const branchProvided = branchName !== undefined;

    if (organizationProvided !== branchProvided) {
      return res.status(400).json({
        message: "Organization and branch must be updated together",
      });
    }

    let organizationId = existing.organizationId;
    let branchId = existing.branchId;

    if (organizationProvided && branchProvided) {
      const trimmedOrganization = organizationName?.trim();
      const trimmedBranch = branchName?.trim();

      if (trimmedOrganization && trimmedBranch) {
        const { organization, branch } = await resolveOrganizationAndBranch(
          prisma,
          trimmedOrganization,
          trimmedBranch
        );

        organizationId = organization.id;
        branchId = branch.id;
      } else {
        organizationId = null;
        branchId = null;
      }
    }

    const customer = await prisma.customer.update({
      where: { id },
      data: {
        name: name ?? existing.name,
        email: email ?? existing.email,
        phone: phone !== undefined ? phone || null : existing.phone,
        company: company !== undefined ? company || null : existing.company,
        status: status ?? existing.status,
        organizationId,
        branchId,
      },
      include: customerInclude,
    });

    res.json(customer);
  } catch (error) {
    console.error(error);

    if (error.code === "P2002") {
      return res.status(409).json({
        message: "A customer with this email already exists",
      });
    }

    res.status(500).json({
      message: "Could not update customer",
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
      return res.status(400).json({
        message: "Invalid customer id",
      });
    }

    const existing = await prisma.customer.findUnique({
      where: { id },
    });

    if (!existing) {
      return res.status(404).json({
        message: "Customer not found",
      });
    }

    await prisma.customer.delete({
      where: { id },
    });

    res.json({
      message: "Customer deleted",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Could not delete customer",
    });
  }
});

module.exports = router;
