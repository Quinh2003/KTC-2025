import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router";
import { UserProvider } from "./UserProvider";
import UserForm from "./UserForm";
import UserList from "./UserList";
import UserDetail from "./UserDetail";

const HomePage: React.FC = () => {
  return (
    <div>
      <UserForm />
      {/* <UserList showLinks={false} /> */}
    </div>
  );
};

const UsersPage: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl text-center font-bold mb-4">All Users</h2>
      <UserList showLinks={true} />
    </div>
  );
};

const Navigation: React.FC = () => {
  return (
    <nav className="bg-gray-200 p-4 mb-6 shadow-lg">
      <ul className="flex items-center justify-center gap-6">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "bg-blue-600 text-white text-lg font-semibold px-4 py-2 rounded transition-colors"
                : "text-black text-lg font-semibold hover:bg-yellow-300 px-4 py-2 rounded transition-colors"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/users"
            className={({ isActive }) =>
              isActive
                ? "bg-green-600 text-white text-lg font-semibold px-4 py-2 rounded transition-colors"
                : "text-black text-lg font-semibold hover:bg-yellow-300 px-4 py-2 rounded transition-colors"
            }
          >
            Users
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/:id" element={<UserDetail />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
