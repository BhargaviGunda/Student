// controllers/studentController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllStudents = async (req, res) => {
  try {
    const students = await prisma.student.findMany();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching students' });
  }
};

const getStudentById = async (req, res) => {
  const { id } = req.params;
  try {
    const student = await prisma.student.findUnique({ where: { studentId: id } });
    if (student) {
      res.json(student);
    } else {
      res.status(404).json({ error: 'Student not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching student' });
  }
};

module.exports = { getAllStudents, getStudentById };