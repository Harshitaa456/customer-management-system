const { clerkMiddleware, getAuth } = require("@clerk/express");
const prisma = require("../prisma");

// Clerk middleware must run before authentication checks.
const clerkAuth = clerkMiddleware();

async function authenticate(req, res, next) {
  try {
    const { isAuthenticated, userId } = getAuth(req);

    if (!isAuthenticated || !userId) {
      return res.status(401).json({
        message: "Authentication required",
      });
    }

    // Find the application's local user linked to this Clerk account.
    const user = await prisma.user.findUnique({
      where: { clerkId: userId },
    });

    if (!user) {
      return res.status(404).json({
        message: "User account not found",
      });
    }

    req.user = user;
    req.auth = { userId };

    next();
  } catch (error) {
    console.error("Authentication error:", error);

    return res.status(401).json({
      message: "Authentication failed",
    });
  }
}

module.exports = {
  clerkAuth,
  authenticate,
};

// Revision notes:
// - Replaced old verifyToken() logic with Clerk's Express SDK.
// - Links Clerk userId to the local Prisma User via clerkId.
// - Attaches the local user to req.user for customer routes.