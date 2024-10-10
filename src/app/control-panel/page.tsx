'use client';
import { useState, useEffect } from 'react';
import MainComponent from '@/components/dashboard';
import { checkLoginStatus, User } from '@/utils/auth';
import { redirect } from 'next/navigation'; 
import LoadingSpinner from '@/components/LoadingSpinner'; 

function useUserAuthentication() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true); 
  
  useEffect(() => {
    const fetchLoginStatus = async () => {
      const { isLoggedIn, user } = await checkLoginStatus();
      setIsLoggedIn(isLoggedIn);
      setUser(user);
      setLoading(false); 
    };
    
    fetchLoginStatus();
  }, []);

  return { isLoggedIn, user, loading };
}

const HomePage = () => {
  const { isLoggedIn, loading } = useUserAuthentication();

  useEffect(() => {
    if (!loading && !isLoggedIn) {
      redirect('/'); 
    }
  }, [isLoggedIn, loading]);

  if (loading) {
    return <LoadingSpinner />; 
  }

  if (!isLoggedIn) {
    return null; 
  }

  return (
    <MainComponent /> 
  );
};

export default HomePage;
