// UserContext.js
import React, { createContext, useContext, useState, ReactNode } from "react";

interface UserContextProps {
  userDetails: any;
  setUser: (userData: any) => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [userDetails, setUserDetails] = useState<any | null>(null);

  const setUser = (userData: any) => {
    setUserDetails(userData);
  };

  return (
    <UserContext.Provider value={{ userDetails, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
