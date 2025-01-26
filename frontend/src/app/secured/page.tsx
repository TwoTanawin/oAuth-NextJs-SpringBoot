'use client';

import React, { useEffect, useState } from 'react';
import { Container, Box, Typography, Paper, CircularProgress, Alert, Grid } from '@mui/material';

const Page = () => {
  const [userInfo, setUserInfo] = useState<{ userId: string; name: string; email: string } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await fetch('http://localhost:8082/secured', {
          credentials: 'include',
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.text();

        const match = data.match(/User ID: (.+?), Name: (.+?), Email: (.+)/);
        if (match) {
          const [_, userId, name, email] = match;
          setUserInfo({ userId, name, email });
        } else {
          throw new Error('Unexpected response format');
        }
      } catch (err) {
        setError(err.message || 'Failed to fetch user info');
      }
    };

    fetchUserInfo();
  }, []);

  return (
    <Container maxWidth="md">
      <Box sx={{ py: 6, textAlign: 'center' }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Dashboard
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Your personal account overview
        </Typography>
      </Box>

      <Paper elevation={3} sx={{ p: 4 }}>
        {error ? (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        ) : userInfo ? (
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Paper variant="outlined" sx={{ p: 3 }}>
                <Typography variant="subtitle2" color="text.secondary">
                  User ID
                </Typography>
                <Typography variant="h6">{userInfo.userId}</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper variant="outlined" sx={{ p: 3 }}>
                <Typography variant="subtitle2" color="text.secondary">
                  Name
                </Typography>
                <Typography variant="h6">{userInfo.name}</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper variant="outlined" sx={{ p: 3 }}>
                <Typography variant="subtitle2" color="text.secondary">
                  Email
                </Typography>
                <Typography variant="h6">{userInfo.email}</Typography>
              </Paper>
            </Grid>
          </Grid>
        ) : (
          <Box display="flex" alignItems="center" justifyContent="center" py={4}>
            <CircularProgress />
            <Typography variant="body1" sx={{ ml: 2 }}>
              Loading your information...
            </Typography>
          </Box>
        )}
      </Paper>
    </Container>
  );
};

export default Page;
