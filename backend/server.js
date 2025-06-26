const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Faculty Registration
app.post('/register/faculty', async (req, res) => {
  const {
    facultyId,
    name,
    email,
    password,
    department,
    dateOfJoining,
    specialization,
  } = req.body;

  // Validate required fields
  if (!facultyId || !name || !email || !password || !department || !dateOfJoining || !specialization) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Check if faculty already exists
    const existing = await prisma.faculty.findFirst({
      where: {
        OR: [{ facultyId }, { email }],
      },
    });

    if (existing) {
      return res.status(400).json({ error: 'Faculty with same ID or email already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new faculty
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

    res.status(201).json(newFaculty);
  } catch (error) {
    console.error('Faculty registration error:', error);
    res.status(500).json({ error: 'Server error during faculty registration' });
  }
});

// ✅ Student Registration (optional)
app.post('/register/student', async (req, res) => {
  const { studentId, name, email, password } = req.body;

  if (!studentId || !name || !email || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const existing = await prisma.student.findFirst({
      where: {
        OR: [{ studentId }, { email }],
      },
    });

    if (existing) {
      return res.status(400).json({ error: 'Student with same ID or email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newStudent = await prisma.student.create({
      data: {
        studentId,
        name,
        email,
        password: hashedPassword,
      },
    });

    res.status(201).json(newStudent);
  } catch (error) {
    console.error('Student registration error:', error);
    res.status(500).json({ error: 'Server error during student registration' });
  }
});


// Get individual faculty by ID
app.get('/faculty/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const faculty = await prisma.faculty.findUnique({ where: { facultyId: id } });
    if (!faculty) {
      return res.status(404).json({ error: 'Faculty not found' });
    }
    res.json(faculty);
  } catch (error) {
    console.error('Error fetching faculty:', error);
    res.status(500).json({ error: 'Failed to fetch faculty' });
  }
});


// Get individual student by ID
app.get('/student/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const student = await prisma.student.findUnique({ where: { studentId: id } });
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.json(student);
  } catch (error) {
    console.error('Error fetching student:', error);
    res.status(500).json({ error: 'Failed to fetch student' });
  }
});

// ✅ Login for both student and faculty
app.post('/login', async (req, res) => {
  const { userType, id, password } = req.body;

  try {
    let user;

    if (userType === 'student') {
      user = await prisma.student.findUnique({ where: { studentId: id } });
    } else if (userType === 'faculty') {
      user = await prisma.faculty.findUnique({ where: { facultyId: id } });
    } else {
      return res.status(400).json({ error: 'Invalid user type' });
    }

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Server error during login' });
  }
});

// ✅ Get all faculty
app.get('/faculty', async (req, res) => {
  try {
    const facultyList = await prisma.faculty.findMany();
    res.status(200).json(facultyList);
  } catch (error) {
    console.error('Error fetching faculty:', error);
    res.status(500).json({ error: 'Failed to fetch faculty list' });
  }
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
