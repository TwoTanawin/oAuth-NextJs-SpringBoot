'use client';

import { Box, Button, Container, Paper, Typography } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';

export default function Home() {
  const handleLogin = () => {
    window.location.href = 'http://localhost:8082/login/oauth2/code/google';
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Welcome Back
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Sign in to access your account
        </Typography>

        <Paper elevation={3} sx={{ p: 4 }}>
          <Button
            onClick={handleLogin}
            startIcon={<GoogleIcon />}
            variant="outlined"
            sx={{
              width: '100%',
              py: 1.5,
              fontSize: '1rem',
              textTransform: 'none',
            }}
          >
            Continue with Google
          </Button>
          <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
            By continuing, you agree to our{' '}
            <a href="#" style={{ color: '#1976d2', textDecoration: 'none' }}>
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" style={{ color: '#1976d2', textDecoration: 'none' }}>
              Privacy Policy
            </a>.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
}
