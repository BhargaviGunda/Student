const express = require('express');
const { getFaculty, addFaculty } = require('../controllers/facultyController');

const router = express.Router();

router.get('/', getFaculty);
router.post('/', addFaculty);

module.exports = router;