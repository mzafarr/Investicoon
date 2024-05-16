const API_LINK = 'https://temporary-weld.vercel.app/api/';
const useAuth = () => {
  const login = async (email, password) => {
    try {
      const response = await fetch(`${API_LINK}/auth/signin/`, {
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
      console.log('data', data);
      if (response.ok) {
        // Login successful
        return {success: true, data: data};
      } else {
        // Login failed
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

  const signup = async (name, email, password) => {
    try {
      console.log(name, email, password, `${API_LINK}/auth/signup/`);
      const response = await fetch(`${API_LINK}/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      });
      console.log('Response status:', response.status);
      const responseData = await response.text();
      console.log('Response data:', responseData);

      const data = JSON.parse(responseData);
      console.log('Parsed data:', data);
      if (response.ok) {
        // Signup successful
        return {success: true, data: data};
      } else {
        // Signup failed
        return {success: false, error: data.message || data.errors[0].msg};
      }
    } catch (error) {
      console.error('Signup error:', error);
      return {
        success: false,
        error: 'An error occurred. Please try again later.',
      };
    }
  };
  return {login, signup};
};

export default useAuth;
