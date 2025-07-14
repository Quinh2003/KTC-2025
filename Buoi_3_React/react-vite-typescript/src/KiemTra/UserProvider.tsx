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

// Bộ dữ liệu mặc định
const initialUsers: UserType[] = [
  { id: 1, name: "Quỳnh", email: "quynh@gmail.com", age: null },
  { id: 2, name: "Phan Quỳnh", email: "phanquynh@gmail.com", age: 25 },
];

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Khởi tạo state với dữ liệu mặc định
  const [users, setUsers] = useState<UserType[]>(initialUsers);

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