import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import GradientBackground from '../components/GradientBackground';
import Header from '../components/Header';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function Home() {
  const { user } = useUser();

  return (
    <GradientBackground>
      <Header variant="h1">Welcome {user ? user.name : ''}</Header>
    </GradientBackground>
  );
}

export const getServerSideProps = withPageAuthRequired();
