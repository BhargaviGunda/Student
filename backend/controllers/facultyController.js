// controllers/facultyController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getFaculty = async (req, res) => {
  try {
    const facultyMembers = await prisma.faculty.findMany();
    res.json(facultyMembers);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching faculty' });
  }
};

const addFaculty = async (req, res) => {
  const { facultyId, name, email, department } = req.body;
  try {
    const newFaculty = await prisma.faculty.create({
      data: { facultyId, name, email, department },
    });
    res.status(201).json(newFaculty);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getFaculty, addFaculty };