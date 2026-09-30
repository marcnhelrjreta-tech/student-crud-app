const express = require("express");
const router = express.Router();

const {
    createStudent,
    getStudents,
    getStudent,
    updateStudent,
    deleteStudent
} = require("../controllers/studentController");

// Create a student
router.post("/", createStudent);

// Get all students
router.get("/", getStudents);

// Get one student
router.get("/:id", getStudent);

// Update a student
router.put("/:id", updateStudent);

// Delete a student
router.delete("/:id", deleteStudent);

module.exports = router;
