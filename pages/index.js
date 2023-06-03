import { Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useUser } from '@auth0/nextjs-auth0/client';
import { getContrastRatio } from '@mui/system';

const GradientBackground = styled('div')({
  background: 'linear-gradient(#e0e0e0, #333333)',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

const Header = styled(Typography)({
  color: '#ffffff',
  marginBottom: '16px',
  fontFamily: 'Inter',
  fontSize: '24px',
});

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
  console.log(user);

  return (
    <GradientBackground>
      <Header variant="h1">Your Financial Future Awaits You</Header>
      <ComplementaryButton variant="contained" color="primary">
        Login
      </ComplementaryButton>
    </GradientBackground>
  );
}
