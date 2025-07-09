const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello, World!');
});

router.get('/api', (req, res) => {
  res.json({ message: 'This is a sample API response' });
});

module.exports = router;
