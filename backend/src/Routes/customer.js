const express = require("express");
const prisma = require("../prisma");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const customers = await prisma.customer.findMany();

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
    const { name, email, phone, company, status } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        message: "Name and email are required",
      });
    }

    const customer = await prisma.customer.create({
      data: {
        name,
        email,
        phone: phone || null,
        company: company || null,
        status: status || "Active",
      },
    });

    res.status(201).json(customer);
  } catch (error) {
    console.error(error);

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

    const { name, email, phone, company, status } = req.body;

    const customer = await prisma.customer.update({
      where: { id },
      data: {
        name: name ?? existing.name,
        email: email ?? existing.email,
        phone: phone !== undefined ? phone || null : existing.phone,
        company: company !== undefined ? company || null : existing.company,
        status: status ?? existing.status,
      },
    });

    res.json(customer);
  } catch (error) {
    console.error(error);

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
