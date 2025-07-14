import React, { createContext, useState, type ReactNode } from "react";

export interface UserType {
  id: number;
  name: string;
  email: string;
  age?: number | null;
}

interface UserContextProps {
  users: UserType[];
  addUser: (user: Omit<UserType, "id">) => void;
}

export const UserContext = createContext<UserContextProps | undefined>(undefined);



export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState<UserType[]>([]);

  const addUser = (user: Omit<UserType, "id">) => {
    const newUser: UserType = { id: Date.now(), ...user };
    setUsers((prev) => [...prev, newUser]);
  };

  return (
    <UserContext.Provider value={{ users, addUser }}>
      {children}
    </UserContext.Provider>
  );
};