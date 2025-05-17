export const AuthService = {
  login: (token?: string): void => {
    localStorage.setItem('isLoggedIn', 'true');
    if (token) localStorage.setItem('authToken', token);
  },
  
  isLoggedIn: (): boolean => {
    return localStorage.getItem('isLoggedIn') === 'true';
  },
  
  logout: (): void => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('authToken');
  }
};

export default AuthService;