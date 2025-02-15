import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://kapnfajoffujhyjrhgnm.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImthcG5mYWpvZmZ1amh5anJoZ25tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk2MDcyNDIsImV4cCI6MjA1NTE4MzI0Mn0.79DmYRfsCEvNsXBiQ9Dd-RwV3np9YvkmW5Ux6BlTXIw');

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const { user, error } = await supabase.auth.signIn({ email, password });
    if (error) {
      alert(error.message);
    } else {
      alert('Login successful');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
