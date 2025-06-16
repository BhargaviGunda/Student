const express = require('express');
const bcrypt = require('bcryptjs');  // Add bcrypt for password hashing
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');

const prisma = new PrismaClient();
const app = express();

// Middleware
app.use(express.json());  // Use express built-in JSON parser
app.use(cors());

// Register Student
app.post('/register/student', async (req, res) => {
  const { studentId, name, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);  // Hash password
    const student = await prisma.student.create({
      data: { studentId, name, email, password: hashedPassword },
    });
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Register Faculty
app.post('/register/faculty', async (req, res) => {
  const { facultyId, name, email, password, department } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);  // Hash password
    const faculty = await prisma.faculty.create({
      data: { facultyId, name, email, password: hashedPassword, department },
    });
    res.status(201).json(faculty);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Login (Student & Faculty)
app.post('/login', async (req, res) => {
  const { userType, id, password } = req.body;
  try {
    let user;
    if (userType === 'student') {
      user = await prisma.student.findUnique({ where: { studentId: id } });
    } else if (userType === 'faculty') {
      user = await prisma.faculty.findUnique({ where: { facultyId: id } });
    }

    if (user && await bcrypt.compare(password, user.password)) {  // Compare hashed password
      res.status(200).json({ message: 'Login successful', user });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));