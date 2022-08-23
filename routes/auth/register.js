const express = require('express');
// mod.cjs
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const router = express.Router();

router.post('/api/users/register/', async (req, res) => {
    const { first_name, last_name, email, password } = req.body;

    const body = JSON.stringify({
        first_name,
        last_name,
        email,
        password
    });

    try {
        const registerResponse = await fetch(`${process.env.API_URL}/api/users/register/`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: body
        });

        const data = await registerResponse.json();
        return res.status(registerResponse.status).json(data);

    } catch (error) {
        return res.status(500).json({error: 'Something went wrong when registering user account!'});
    }
});

module.exports = router;