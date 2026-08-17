const express = require("express");
const prisma = require("../prisma");
const { authenticate } = require("../middleware/auth");
const { validateCustomerInput } = require("../utils/validateCustomer");

const router = express.Router();

router.use(authenticate);

function handlePrismaError(error, res, fallbackMessage) {
  if (error.code === "P2002") {
    return res.status(409).json({
      message: "A customer with this email already exists",
    });
  }

  console.error(error);

  return res.status(500).json({
    message: fallbackMessage,
  });
}

router.get("/", async (req, res) => {
  try {
    const customers = await prisma.customer.findMany({
      where: { userId: req.user.id },
      orderBy: { createdAt: "desc" },
    });

    res.json(customers);
  } catch (error) {
    handlePrismaError(error, res, "Could not fetch customers");
  }
});

router.get("/stats", async (req, res) => {
  try {
    const userFilter = { userId: req.user.id };

    const [total, active, pending, inactive, recent] = await Promise.all([
      prisma.customer.count({ where: userFilter }),
      prisma.customer.count({ where: { ...userFilter, status: "Active" } }),
      prisma.customer.count({ where: { ...userFilter, status: "Pending" } }),
      prisma.customer.count({ where: { ...userFilter, status: "Inactive" } }),
      prisma.customer.findMany({
        where: userFilter,
        orderBy: { createdAt: "desc" },
        take: 5,
      }),
    ]);

    res.json({
      total,
      active,
      pending,
      inactive,
      recent,
    });
  } catch (error) {
    handlePrismaError(error, res, "Could not fetch customer stats");
  }
});

router.post("/", async (req, res) => {
  try {
    const { errors, sanitized } = validateCustomerInput(req.body);

    if (errors.length > 0) {
      return res.status(400).json({
        message: errors[0],
        errors,
      });
    }

    const customer = await prisma.customer.create({
      data: {
        name: sanitized.name,
        email: sanitized.email,
        phone: sanitized.phone ?? null,
        company: sanitized.company ?? null,
        status: sanitized.status,
        userId: req.user.id,
      },
    });

    res.status(201).json(customer);
  } catch (error) {
    handlePrismaError(error, res, "Could not create customer");
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

    const customer = await prisma.customer.findFirst({
      where: { id, userId: req.user.id },
    });

    if (!customer) {
      return res.status(404).json({
        message: "Customer not found",
      });
    }

    res.json(customer);
  } catch (error) {
    handlePrismaError(error, res, "Could not fetch customer");
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

    const existing = await prisma.customer.findFirst({
      where: { id, userId: req.user.id },
    });

    if (!existing) {
      return res.status(404).json({
        message: "Customer not found",
      });
    }

    const { errors, sanitized } = validateCustomerInput(req.body, { isUpdate: true });

    if (errors.length > 0) {
      return res.status(400).json({
        message: errors[0],
        errors,
      });
    }

    const customer = await prisma.customer.update({
      where: { id },
      data: {
        name: sanitized.name ?? existing.name,
        email: sanitized.email ?? existing.email,
        phone: sanitized.phone !== undefined ? sanitized.phone : existing.phone,
        company: sanitized.company !== undefined ? sanitized.company : existing.company,
        status: sanitized.status ?? existing.status,
      },
    });

    res.json(customer);
  } catch (error) {
    handlePrismaError(error, res, "Could not update customer");
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

    const existing = await prisma.customer.findFirst({
      where: { id, userId: req.user.id },
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
    handlePrismaError(error, res, "Could not delete customer");
  }
});

module.exports = router;
