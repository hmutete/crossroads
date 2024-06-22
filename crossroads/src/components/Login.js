import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Container, Typography } from '@material-ui/core';

const Login = ({ setIsAuthenticated, setIsAdmin}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simple authentication logic (to be replaced with actual authentication)
    if (username === 'user' && password === 'pass') {
      setIsAuthenticated(true);
      setIsAdmin(true);
      navigate('/dashboard');
    } else {
      alert('Incorrect username or password');
    }
  };

  return (
   <Container maxWidth="xs">
      <Typography variant="h4">Login</Typography>
      <TextField
        label="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleLogin} fullWidth>
        Login
      </Button>
    </Container>
  );
};

export default Login;
