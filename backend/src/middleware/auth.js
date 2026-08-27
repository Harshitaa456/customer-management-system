const { clerkMiddleware, clerkClient, getAuth } = require("@clerk/express");
const prisma = require("../prisma");
async function authenticate(req, res, next) {
  try {
    console.log("1. Starting authentication");

    const { isAuthenticated, userId } = getAuth(req);
    console.log("2. Clerk auth:", { isAuthenticated, userId });

    if (!isAuthenticated || !userId) {
      return res.status(401).json({
        message: "Authentication required",
      });
    }

    console.log("3. Getting Clerk user");

    const clerkUser = await clerkClient.users.getUser(userId);

    console.log("4. Clerk user retrieved");

    const email = clerkUser.primaryEmailAddress?.emailAddress;

    if (!email) {
      return res.status(400).json({
        message: "A primary email address is required",
      });
    }

    console.log("5. Upserting Prisma user");

    const name = clerkUser.fullName || clerkUser.username || email;

    const user = await prisma.user.upsert({
      where: { clerkId: userId },
      create: { clerkId: userId, name, email },
      update: { name, email },
    });

    console.log("6. Authentication successful");

    req.user = user;
    req.auth = { userId };

    next();
  } catch (error) {
    console.error("AUTH ERROR:", error);
    console.error("AUTH ERROR MESSAGE:", error.message);
    console.error("AUTH ERROR STACK:", error.stack);

    if (error.code === "P1001") {
      return res.status(503).json({
        message: "Database unavailable",
      });
    }

    return res.status(500).json({
      message: "Could not complete authentication",
    });
  }
}
module.exports = { authenticate };