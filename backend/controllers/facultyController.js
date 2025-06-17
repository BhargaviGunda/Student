const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();

// GET /faculty - return all registered faculty
const getFaculty = async (req, res) => {
  try {
    const facultyMembers = await prisma.faculty.findMany();
    res.json(facultyMembers);
  } catch (error) {
    console.error('Error fetching faculty:', error);
    res.status(500).json({ error: 'Error fetching faculty' });
  }
};

// POST /register - faculty registration
const addFaculty = async (req, res) => {
  const {
    user_id,      // corresponds to facultyId
    name,
    email,
    password,
    department,
    dateOfJoining,
    specialization,
    branch
  } = req.body;

  try {
    // Validate fields
    if (!user_id || !name || !email || !password || !department || !dateOfJoining || !specialization || !branch) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Check for existing facultyId or email
    const existing = await prisma.faculty.findFirst({
      where: {
        OR: [{ facultyId: user_id }, { email }],
      },
    });

    if (existing) {
      return res.status(400).json({ error: 'Faculty with same ID or email already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert into database
    const newFaculty = await prisma.faculty.create({
      data: {
        facultyId: user_id,
        name,
        email,
        password: hashedPassword,
        department,
        dateOfJoining: new Date(dateOfJoining),
        specialization,
        branch,
      }
    });

    res.status(201).json({ message: 'Faculty registered successfully', faculty: newFaculty });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Server error during registration' });
  }
};

module.exports = { getFaculty, addFaculty };
