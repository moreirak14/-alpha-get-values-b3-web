const express = require('express');
const fetch = (...args) =>
	import('node-fetch').then(({ default: fetch }) => fetch(...args));

const router = express.Router();

router.get('/api/users/verify', async (req, res) => {
    const { access } = req.cookies;
    
    const body = JSON.stringify({
		token: access,
	});

	try {
		const apiResponse = await fetch(`${process.env.API_URL}/api/token/verify/`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
            },
            body: body,
		});

		const data = await apiResponse.json();

		return res.status(apiResponse.status).json(data);
	} catch (err) {
		return res.status(500).json({
			error: 'Something went wrong when trying to retrieve user',
		});
	}
});

module.exports = router;