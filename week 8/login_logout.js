const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

const PORT = 3001;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Login page
app.get('/login', (req, res) => {
    res.send(`
        <h1>Login Page</h1>

        <form method="POST" action="/login">
            <label>Username:</label>
            <input type="text" name="username" required>

            <br><br>

            <label>Password:</label>
            <input type="password" name="password" required>

            <br><br>

            <button type="submit">Login</button>
        </form>
    `);
});

// Login
app.post('/login', (req, res) => {

    const { username, password } = req.body;

    // Simple login credentials
    if (username === 'admin' && password === '1234') {

        // Create login cookie
        res.cookie('username', username);

        res.send(`
            <h1>Login Successful</h1>
            <p>Welcome, ${username}!</p>

            <a href="/profile">Go to Profile</a>
            <br><br>
            <a href="/logout">Logout</a>
        `);

    } else {

        res.send(`
            <h1>Login Failed</h1>
            <p>Invalid username or password.</p>

            <a href="/login">Try Again</a>
        `);
    }
});

// Profile - maintains login state
app.get('/profile', (req, res) => {

    const username = req.cookies.username;

    if (username) {

        res.send(`
            <h1>Profile Page</h1>
            <p>Welcome, ${username}!</p>
            <p>You are currently logged in.</p>

            <a href="/logout">Logout</a>
        `);

    } else {

        res.send(`
            <h1>Access Denied</h1>
            <p>Please login first.</p>

            <a href="/login">Login</a>
        `);
    }
});

// Logout
app.get('/logout', (req, res) => {

    // Delete login cookie
    res.clearCookie('username');

    res.send(`
        <h1>Logout Successful</h1>
        <p>You have been logged out.</p>

        <a href="/login">Login Again</a>
    `);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});