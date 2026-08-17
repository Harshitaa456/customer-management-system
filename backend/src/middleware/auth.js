const { createClerkClient } = require('@clerk/backend');

// Initialize Clerk client with secret key
const clerkClient = createClerkClient({
  secretKey: process.env.CLERK_SECRET_KEY,
});

// Clerk authentication middleware for Express
async function authenticate(req, res, next) {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        message: 'Authentication required',
      });
    }

    const token = authHeader.split(' ')[1];
    
    // Verify the token with Clerk
    const verifiedToken = await clerkClient.verifyToken(token);
    
    if (!verifiedToken) {
      return res.status(401).json({
        message: 'Invalid or expired token',
      });
    }

    req.auth = verifiedToken;
    next();
  } catch (error) {
    return res.status(401).json({
      message: 'Authentication failed',
      error: error.message,
    });
  }
}

// Extract user info from Clerk request
function getUserInfo(req, res, next) {
  if (req.auth) {
    req.user = {
      clerkUserId: req.auth.sub,
      email: req.auth.email,
    };
  }
  next();
}

module.exports = {
  authenticate,
  getUserInfo,
};
