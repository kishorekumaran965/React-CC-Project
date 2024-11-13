
import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password, users) => {
    const user = users.find((u) => u.email === email && u.password === password);
    if (user) {
      setUser(user);
      return true;
    } else {
      return false;--
      
    }
  };

  const signup = (newUser, callback) => {
    setUser(newUser); 
    callback();
  };

  return (
    <UserContext.Provider value={{ user, login, signup }}>
      {children}
    </UserContext.Provider>
  );
};
