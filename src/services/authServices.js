import jwt from "jsonwebtoken";

export const TOKEN_KEY = "Authorization";

// export const isAuthenticated = () => {
//   return true;
// };

export const isAuthenticated = () => {
  const decodedToken = jwt.decode(localStorage.getItem(TOKEN_KEY));
  if (decodedToken) {
    if (decodedToken.exp < new Date().getTime()) {
      return true;
    }
    return false;
  }
  return false;
};

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const login = token => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};
