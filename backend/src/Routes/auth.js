const express = require("express");
const bcrypt = require("bcryptjs");
const prisma = require("../prisma");
const { validateSignupInput, validateLoginInput } = require("../utils/validateAuth");
const { signToken, authenticate } = require("../middleware/auth");

const router = express.Router();

function handleAuthError(error, res, fallbackMessage) {
  if (error.code === "P2002") {
    return res.status(409).json({
      message: "An account with this email already exists",
    });
  }

  console.error(error);

  return res.status(500).json({
    message: fallbackMessage,
  });
}

router.post("/signup", async (req, res) => {
  try {
    const { errors, sanitized } = validateSignupInput(req.body);

    if (errors.length > 0) {
      return res.status(400).json({
        message: errors[0],
        errors,
      });
    }

    const hashedPassword = await bcrypt.hash(sanitized.password, 10);

    const user = await prisma.user.create({
      data: {
        name: sanitized.name,
        email: sanitized.email,
        password: hashedPassword,
      },
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
      },
    });

    const token = signToken(user);

    res.status(201).json({
      message: "Account created successfully",
      user,
      token,
    });
  } catch (error) {
    handleAuthError(error, res, "Could not create account");
  }
});

router.post("/login", async (req, res) => {
  try {
    const { errors, sanitized } = validateLoginInput(req.body);

    if (errors.length > 0) {
      return res.status(400).json({
        message: errors[0],
        errors,
      });
    }

    const user = await prisma.user.findUnique({
      where: { email: sanitized.email },
    });

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const isPasswordValid = await bcrypt.compare(sanitized.password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const token = signToken(user);

    res.json({
      message: "Login successful",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: user.createdAt,
      },
      token,
    });
  } catch (error) {
    handleAuthError(error, res, "Could not log in");
  }
});

router.get("/me", authenticate, async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
      },
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.json(user);
  } catch (error) {
    handleAuthError(error, res, "Could not fetch user profile");
  }
});

module.exports = router;
