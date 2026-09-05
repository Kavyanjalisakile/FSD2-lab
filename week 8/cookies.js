const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

const PORT = 3002;

// Cookie middleware
app.use(cookieParser());

// Create cookie
app.get('/create-cookie', (req, res) => {

    res.cookie('student', 'Kavyanjali');

    res.send(`
        <h1>Cookie Created</h1>
        <p>Cookie "student" has been created.</p>

        <a href="/read-cookie">Read Cookie</a>
    `);
});

// Read cookie
app.get('/read-cookie', (req, res) => {

    const student = req.cookies.student;

    if (student) {

        res.send(`
            <h1>Cookie Read Successfully</h1>
            <p>Student Name: ${student}</p>
        `);

    } else {

        res.send(`
            <h1>No Cookie Found</h1>
            <p>The student cookie does not exist.</p>
        `);
    }
});

// Delete cookie
app.get('/delete-cookie', (req, res) => {

    res.clearCookie('student');

    res.send(`
        <h1>Cookie Deleted</h1>
        <p>The student cookie has been deleted.</p>
    `);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});