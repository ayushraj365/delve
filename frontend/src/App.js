import React, { useState, useEffect } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [mfaStatus, setMfaStatus] = useState(null);
  const [rlsStatus, setRlsStatus] = useState(null);
  const [pitrStatus, setPitrStatus] = useState(null);
  const [logs, setLogs] = useState([]);

  const handleLogin = async () => {
    const response = await fetch('http://localhost:5000/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await response.json();
    if (data.user) {
      setUser(data.user);
      logEvent('User logged in');
    } else {
      alert(data.error);
    }
  };

  const fetchMfaStatus = async () => {
    const response = await fetch('http://localhost:5000/mfa');
    const data = await response.json();
    setMfaStatus(data);
    logEvent('Fetched MFA status');
  };

  const fetchRlsStatus = async () => {
    const response = await fetch('http://localhost:5000/rls');
    const data = await response.json();
    setRlsStatus(data);
    logEvent('Fetched RLS status');
  };

  const fetchPitrStatus = async () => {
    const response = await fetch('http://localhost:5000/pitr');
    const data = await response.json();
    setPitrStatus(data);
    logEvent('Fetched PITR status');
  };

  const logEvent = (message) => {
    const timestamp = new Date().toISOString();
    setLogs((prevLogs) => [...prevLogs, { message, timestamp }]);
  };

  useEffect(() => {
    if (user) {
      fetchMfaStatus();
      fetchRlsStatus();
      fetchPitrStatus();
    }
  }, [user]);

  return (
    <div>
      <h1>Welcome to Delve Frontend</h1>
      {!user ? (
        <div>
          <h2>Login</h2>
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
      ) : (
        <div>
          <h2>Checks</h2>
          <div>
            <h3>MFA Status</h3>
            {mfaStatus ? (
              <pre>{JSON.stringify(mfaStatus, null, 2)}</pre>
            ) : (
              <p>Loading MFA status...</p>
            )}
          </div>
          <div>
            <h3>RLS Status</h3>
            {rlsStatus ? (
              <pre>{JSON.stringify(rlsStatus, null, 2)}</pre>
            ) : (
              <p>Loading RLS status...</p>
            )}
          </div>
          <div>
            <h3>PITR Status</h3>
            {pitrStatus ? (
              <pre>{JSON.stringify(pitrStatus, null, 2)}</pre>
            ) : (
              <p>Loading PITR status...</p>
            )}
          </div>
          <div>
            <h3>Logs</h3>
            <pre>{JSON.stringify(logs, null, 2)}</pre>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
