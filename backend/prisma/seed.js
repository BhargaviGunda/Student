const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const students = [
    { studentId: 'S001', name: 'Alice', email: 'alice@example.com', password: 'pass123' },
    { studentId: 'S002', name: 'Bob', email: 'bob@example.com', password: 'pass456' },
  ];

  for (const student of students) {
    try {
      await prisma.student.upsert({
        where: { studentId: student.studentId },
        update: {}, // If the record exists, update it (optional)
        create: student, // If it doesn't exist, create it
      });
    } catch (error) {
      console.error(`Failed to seed student ${student.studentId}:, error`);
    }
  }
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });