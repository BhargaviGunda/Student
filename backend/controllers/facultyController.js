const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();

const getFaculty = async (req, res) => {
  try {
    const facultyMembers = await prisma.faculty.findMany();
    res.json(facultyMembers);
  } catch (error) {
    console.error('Error fetching faculty:', error);
    res.status(500).json({ error: 'Error fetching faculty' });
  }
};

const addFaculty = async (req, res) => {
  const {
    facultyId,
    name,
    email,
    password,
    department,
    dateOfJoining,
    specialization,
  } = req.body;

  try {
    if (!facultyId || !name || !email || !password || !department || !dateOfJoining || !specialization) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const existing = await prisma.faculty.findFirst({
      where: {
        OR: [{ facultyId }, { email }],
      },
    });

    if (existing) {
      return res.status(400).json({ error: 'Faculty with same ID or email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newFaculty = await prisma.faculty.create({
      data: {
        facultyId,
        name,
        email,
        password: hashedPassword,
        department,
        dateOfJoining: new Date(dateOfJoining),
        specialization,
      },
    });

    res.status(201).json({ message: 'Faculty registered successfully', faculty: newFaculty });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Server error during registration' });
  }
};

module.exports = { getFaculty, addFaculty };
