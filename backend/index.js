const express = require('express');
const app = express();

app.use(express.json());

const authRoutes = require('./routes/auth');
const mfaRoutes = require('./routes/mfa');
const rlsRoutes = require('./routes/rls');
const pitrRoutes = require('./routes/pitr');
const mockRoutes = require('./routes/mock');

app.use('/auth', authRoutes);
app.use('/mfa', mfaRoutes);
app.use('/rls', rlsRoutes);
app.use('/pitr', pitrRoutes);
app.use('/mock', mockRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});
