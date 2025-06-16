const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getStudents() {
  try {
    const students = await prisma.student.findMany();
    console.log(students);
  } catch (error) {
    console.error('Error fetching students:', error);
  } finally {
    await prisma.$disconnect();
  }
}

getStudents();