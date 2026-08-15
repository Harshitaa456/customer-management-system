require("dotenv").config();
const { PrismaClient }=require("@prisma/client");
const { Prismapg }=require("@prisma/adapter-pg");
const adapter=new PrismaPg ({
    ConnectionString:process.env.DATABASE_URL
});
const prisma=new PrismaClient({ adapter });
module.exports=prisma;





