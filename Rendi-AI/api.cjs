const express = require('express');
const auth = require('basic-auth');
const app = express();
app.use(express.json());

// Basic Authentication
const authenticate = (req, res, next) => {
    const user = auth(req);
    if (user && user.name === 'admin' && user.pass === 'password') {
        next();
    } else {
        res.set('WWW-Authenticate', 'Basic realm="example"');
        res.status(401).send('Authentication required.');
    }
};

// GET route
app.get('/api', authenticate, (req, res) => {
    res.json(req.query);
});

// POST route
app.post('/api', authenticate, (req, res) => {
    res.json(req.body);
});

app.listen(3000, () => console.log('Server running on port 3000'));
