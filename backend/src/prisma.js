require("dotenv").config();
const { PrismaClient } = require("@prisma/client");
const { PrismaPg } = require("@prisma/adapter-pg");

// console.log("Prisma DB config:", {
//   host: new URL(process.env.DATABASE_URL).hostname,
//   port: new URL(process.env.DATABASE_URL).port,
//   database: new URL(process.env.DATABASE_URL).pathname.slice(1),
//   user: new URL(process.env.DATABASE_URL).username,
// });


const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });

module.exports = prisma;
