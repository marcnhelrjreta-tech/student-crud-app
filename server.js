const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");

const studentRoutes = require("./routes/studentRoutes");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Serve the public folder
app.use(express.static(path.join(__dirname, "public")));

// Student routes
app.use("/api/students", studentRoutes);

// Port
const PORT = process.env.PORT || 3000;

// Start server FIRST
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});

// Connect to MongoDB
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.error("MongoDB connection error:", error);
    });

