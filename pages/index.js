import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useUser } from '@auth0/nextjs-auth0/client';
import { getContrastRatio } from '@mui/system';
import GradientBackground from '../components/GradientBackground';
import Header from '../components/Header';

const calculateComplementaryColor = (color) => {
  const contrast = getContrastRatio(color, '#ffffff');
  return contrast >= 7 ? '#ffffff' : '#000000';
};

const ComplementaryButton = styled(Button)(({ theme }) => ({
  color: calculateComplementaryColor('#333333'),
  backgroundColor: '#333333',
  '&:hover': {
    backgroundColor: calculateComplementaryColor('#333333'),
    color: '#333333',
  },
}));

export default function Home() {
  const { user, error, isLoading } = useUser();
  const router = useRouter();


  const handleLogin = () => {
    if (!user) {
      router.push('/api/auth/login');
    }
  };

  useEffect(() => {
    if (user) {
      router.push('/home');
    }
  }, [user, router]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <GradientBackground>
      <Header variant="h1">Your Financial Future Awaits You</Header>
      <ComplementaryButton variant="contained" color="primary" onClick={handleLogin}>
        {user ? user.name : 'Login'}
      </ComplementaryButton>
    </GradientBackground>
  );
}
