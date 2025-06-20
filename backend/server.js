const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());

// ✅ Student Registration
app.post('/register/student', async (req, res) => {
  const { studentId, name, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const student = await prisma.student.create({
      data: { studentId, name, email, password: hashedPassword },
    });
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

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

  if (!facultyId || !name || !email || !password || !department || !dateOfJoining || !specialization) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const existing = await prisma.faculty.findFirst({
      where: {
        OR: [{ facultyId }, { email }],
      },
    });

    if (existing) {
      return res.status(400).json({ error: 'Faculty with same ID or email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const faculty = await prisma.faculty.create({
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

    res.status(201).json(faculty);
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Server error during registration' });
  }
});

// ✅ Login
app.post('/login', async (req, res) => {
  const { userType, id, password } = req.body;

  try {
    let user;

    if (userType === 'student') {
      user = await prisma.student.findUnique({ where: { studentId: id } });
    } else if (userType === 'faculty') {
      user = await prisma.faculty.findUnique({ where: { facultyId: id } });
    }

    if (!user) return res.status(401).json({ error: 'User not found' });

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) return res.status(401).json({ error: 'Invalid credentials' });

    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Server error during login' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
