const { clerkMiddleware, clerkClient, getAuth } = require("@clerk/express");
const prisma = require("../prisma");

async function authenticate(req, res, next) {
  try {
    const { isAuthenticated, userId } = getAuth(req);

    if (!isAuthenticated || !userId) {
      return res.status(401).json({
        message: "Authentication required",
      });
    }

    // Clerk is the source of truth for identity. Keep the local record in sync
    // so application data can safely use a Prisma relation to the user.
    const clerkUser = await clerkClient.users.getUser(userId);
    const email = clerkUser.primaryEmailAddress?.emailAddress;

    if (!email) {
      return res.status(400).json({
        message: "A primary email address is required for this application",
      });
    }

    const name = clerkUser.fullName || clerkUser.username || email;
    const user = await prisma.user.upsert({
      where: { clerkId: userId },
      create: { clerkId: userId, name, email },
      update: { name, email },
    });

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
  clerkMiddleware,
  authenticate,
};