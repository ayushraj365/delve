const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => {
  res.json({ message: 'Mock API is working!' });
});

module.exports = router;
