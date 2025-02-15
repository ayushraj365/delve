const express = require('express');
const router = express.Router();
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient('https://kapnfajoffujhyjrhgnm.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImthcG5mYWpvZmZ1amh5anJoZ25tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk2MDcyNDIsImV4cCI6MjA1NTE4MzI0Mn0.79DmYRfsCEvNsXBiQ9Dd-RwV3np9YvkmW5Ux6BlTXIw');

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const { user, error } = await supabase.auth.signIn({ email, password });

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.json({ user });
});

module.exports = router;
