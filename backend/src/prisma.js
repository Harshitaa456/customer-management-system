require("dotenv").config();
const { prismaClient }=require("@prisma/client");
const { prismapg }=require("@prisma/adapter-pg");
const adapter=new prismaPg ({
    ConnectionString:process.env.DATABASE_URL
});
const prisma=new PrismaClient({ adapter });
module.exports=prisma;
const prisma = require("../prisma");




