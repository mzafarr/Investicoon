import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-toast-message';

const API_LINK = 'https://temporary-weld.vercel.app/api';
const useAuth = () => {
  const navigation = useNavigation();
  const login = async (email, password) => {
    try {
      const response = await fetch(`${API_LINK}/signin/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      const data = await response.json();
      console.log('wait', data);
      if (response.ok) {
        return {data: data};
      } else {
        return {success: false, error: data.message};
      }
    } catch (error) {
      console.error('Login error:', error);
      return {
        success: false,
        error: 'An error occurred. Please try again later.',
      };
    }
  };

  const signup = async (name, email, password, code) => {
    try {
      const response = await fetch(`${API_LINK}/signup/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
          otp: code,
        }),
      });
      const responseData = await response.text();
      let data;
      try {
        data = JSON.parse(responseData);
      } catch (parseError) {
        console.error('JSON parse error:', parseError);
        return {
          success: false,
          error: 'Invalid response format received from server.',
        };
      }
      if (data.message === 'User created successfully.') {
        console.log('Signup successful:', data);
        return {success: true, data: data};
      } else {
        return {
          success: false,
          error: data.message || data.errors?.[0]?.msg || 'An error occurred',
        };
      }
    } catch (error) {
      console.error('Signup error:', error);
      return {
        success: false,
        error: 'An error occurred. Please try again later.',
      };
    }
  };

  const sendOtp = async email => {
    try {
      const response = await fetch(`${API_LINK}/otp/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        return {success: true, data: data};
      } else {
        return {success: false, error: data.message};
      }
    } catch (error) {
      console.error('OTP error:', error);
    }
  };

  const logout = async () => {
    await AsyncStorage.clear();
    Toast.show({
      type: 'success',
      text1: 'Logout successful',
    });
    navigation.navigate('LoginScreen');
  };

  const deleteAccount = async () => {
    try {
      const response = await fetch(`${API_LINK}/delete/`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        return {success: true, data: data};
      } else {
        return {success: false, error: data.message};
      }
    } catch (error) {}
  };
  const updateUser = async () => {
    try {
      const response = await fetch(`${API_LINK}/update/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        return {success: true, data: data};
      } else {
        return {success: false, error: data.message};
      }
    } catch (error) {
      console.error('Update error:', error);
    }
  };
  const changePassword = async (accessToken, oldPassword, newPassword) => {
    try {
      const response = await fetch(`${API_LINK}/update/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          accessToken: accessToken,
          oldPassword: oldPassword,
          newPassword: newPassword,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        return {success: true, data: data};
      } else {
        return {success: false, error: data.message};
      }
    } catch (error) {
      console.error('Update error:', error);
    }
  };
  return {login, signup, sendOtp, logout};
};

export default useAuth;
