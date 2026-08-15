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

module.exports = router;