
import axios from 'axios';
import Cookies from 'js-cookie';

export interface User {
  id: number;
  name: string;
  email: string;
  photo: string;
  registeredDate: string;
  expiryDate: string;
  gender: string;
  birthDate: string;
  phone: string;
  isActive: boolean;
  role: string[];
  createdAt: string;
  updatedAt: string;
}

export async function checkLoginStatus(): Promise<{ isLoggedIn: boolean; user: User | null }> {
  const token = Cookies.get('token');
  
  if (token) {
    try {
      const response = await axios.get('http://localhost:3001/users/me', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      if (response.status === 200) {
        return { isLoggedIn: true, user: response.data };
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      Cookies.remove('token');
    }
  }
  
  return { isLoggedIn: false, user: null };
}