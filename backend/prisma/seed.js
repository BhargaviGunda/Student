// const { PrismaClient } = require('@prisma/client');
// const prisma = new PrismaClient();

// async function main() {
//   // Seed students
//   const students = [
//     { studentId: 'S001', name: 'Alice', email: 'alice@example.com', password: 'pass123' },
//     { studentId: 'S002', name: 'Bob', email: 'bob@example.com', password: 'pass456' },
//   ];

//   for (const student of students) {
//     try {
//       await prisma.student.upsert({
//         where: { studentId: student.studentId },
//         update: {}, // leave blank if no changes needed
//         create: student,
//       });
//       console.log(`✅ Seeded student: ${student.studentId}`);
//     } catch (error) {
//       console.error(`❌ Failed to seed student ${student.studentId}:`, error);
//     }
//   }

//   // Seed faculty
//   const facultyMembers = [
//     {
//       facultyId: 'F001',
//       name: 'Dr. John Doe',
//       email: 'john@example.com',
//       password: 'securepass1',
//       department: 'CSE',
//       dateOfJoining: new Date('2010-08-15'),
//       specialization: 'AI and Machine Learning',
//       branch: 'CS',
//     },
//     {
//       facultyId: 'F002',
//       name: 'Dr. Jane Smith',
//       email: 'jane@example.com',
//       password: 'securepass2',
//       department: 'IT',
//       dateOfJoining: new Date('2015-03-12'),
//       specialization: 'Power Systems',
//       branch: 'EE',
//     }
//   ];

//   for (const faculty of facultyMembers) {
//     try {
//       await prisma.faculty.upsert({
//         where: { facultyId: faculty.facultyId },
//         update: {},
//         create: faculty,
//       });
//       console.log(`✅ Seeded faculty: ${faculty.facultyId}`);
//     } catch (error) {
//       console.error(`❌ Failed to seed faculty ${faculty.facultyId}:`, error);
//     }
//   }
// }

// main()
//   .catch((e) => {
//     console.error('❌ Error in seed script:', e);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();

async function main() {
  // ✅ Hash student passwords
  const students = [
    {
      studentId: 'S001',
      name: 'Alice',
      email: 'alice@example.com',
      password: await bcrypt.hash('pass123', 10),
    },
    {
      studentId: 'S002',
      name: 'Bob',
      email: 'bob@example.com',
      password: await bcrypt.hash('pass456', 10),
    },
  ];

  for (const student of students) {
    try {
      await prisma.student.upsert({
        where: { studentId: student.studentId },
        update: {},
        create: student,
      });
      console.log(`✅ Seeded student: ${student.studentId}`);
    } catch (error) {
      console.error(`❌ Failed to seed student ${student.studentId}:`, error);
    }
  }

  // ✅ Hash faculty passwords
  const facultyMembers = [
    {
      facultyId: 'F001',
      name: 'Dr. John Doe',
      email: 'john@example.com',
      password: await bcrypt.hash('securepass1', 10),
      department: 'CSE',
      dateOfJoining: new Date('2010-08-15'),
      specialization: 'AI and Machine Learning',
      branch: 'CS',
    },
    {
      facultyId: 'F002',
      name: 'Dr. Jane Smith',
      email: 'jane@example.com',
      password: await bcrypt.hash('securepass2', 10),
      department: 'IT',
      dateOfJoining: new Date('2015-03-12'),
      specialization: 'Power Systems',
      branch: 'EE',
    },
  ];

  for (const faculty of facultyMembers) {
    try {
      await prisma.faculty.upsert({
        where: { facultyId: faculty.facultyId },
        update: {},
        create: faculty,
      });
      console.log(`✅ Seeded faculty: ${faculty.facultyId}`);
    } catch (error) {
      console.error(`❌ Failed to seed faculty ${faculty.facultyId}:`, error);
    }
  }
}

main()
  .catch((e) => {
    console.error('❌ Error in seed script:', e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
