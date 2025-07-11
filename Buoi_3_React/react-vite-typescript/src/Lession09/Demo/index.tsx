import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, NavLink, useLocation,} from "react-router";
import { List, UserCheck, PlusCircle, LogOut } from "lucide-react";
import LoginPage from "./pages/LoginPage";
import CreateTaskPage from "./pages/CreateTaskPage";
import UpdateTaskPage from "./pages/UpdateTaskPage";
import AccessDeniedPage from "./pages/AccessDeniedPage";
import OurTasksPage from "./pages/OurTaskPage";
import MyTasksPage from "./pages/MyTaskPage";
import AuthContext from "./context";
import type { User } from "./types";

export default function TasksManagementGuidelines() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("access_token");
    window.location.href = "/login";
  };

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <AppLayout user={user} handleLogout={handleLogout} />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

function AppLayout({
  user,
  handleLogout,
}: {
  user: User | null;
  handleLogout: () => void;
}) {
  const location = useLocation();
  const isLoginPage =
    location.pathname === "/login" || location.pathname === "/";

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 bg-gradient-to-r from-blue-100 via-white to-blue-100">
      {!isLoginPage && user && (
        <header className="bg-white shadow-md">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-semibold text-blue-700 flex items-center gap-2">
                Tasks Management Guidelines
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                Welcome, <span className="font-medium">{user.email}</span>
              </p>
            </div>
         
            <nav className="flex items-center gap-3">
              <NavLink
                to="/tasks"
                className={({ isActive }) =>
                  `flex items-center gap-1 text-sm font-medium px-4 py-2 rounded-lg transition border ${
                    isActive
                      ? "bg-blue-600 text-white border-blue-600 shadow"
                      : "text-blue-600 border-blue-600 bg-white hover:bg-blue-50"
                  }`
                }
              >
                <List size={16} />
                Tasks
              </NavLink>

              <NavLink
                to="/assignee-me"
                className={({ isActive }) =>
                  `flex items-center gap-1 text-sm font-medium px-4 py-2 rounded-lg transition border ${
                    isActive
                      ? "bg-blue-600 text-white border-blue-600 shadow"
                      : "text-blue-600 border-blue-600 bg-white hover:bg-blue-50"
                  }`
                }
              >
                <UserCheck size={16} />
                My Tasks
              </NavLink>

              <NavLink
                to="/create-task"
                className={({ isActive }) =>
                  `flex items-center gap-1 text-sm font-medium px-4 py-2 rounded-lg transition border ${
                    isActive
                      ? "bg-blue-600 text-white border-blue-600 shadow"
                      : "text-blue-600 border-blue-600 bg-white hover:bg-blue-50"
                  }`
                }
              >
                <PlusCircle size={16} />
                Create Task
              </NavLink>

              {/* Logout button */}
              <button
                onClick={handleLogout}
                className="flex items-center gap-1 text-sm font-medium px-4 py-2 rounded-lg border border-red-500 bg-red-500 text-white hover:bg-red-600 transition shadow"
              >
                <LogOut size={16} />
                Logout
              </button>
            </nav>
          </div>
        </header>
      )}

      {/* Main content area */}
      <main>
        <Routes>
          {/* Login Page */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />

          {/* Protected Pages */}
          {user && <Route path="/tasks" element={<OurTasksPage />} />}
          {user && <Route path="/assignee-me" element={<MyTasksPage />} />}
          {user && <Route path="/create-task" element={<CreateTaskPage />} />}
          {user && (
            <Route path="/update-task/:id" element={<UpdateTaskPage />} />
          )}

          {/* Catch-all */}
          <Route path="*" element={<AccessDeniedPage />} />
        </Routes>
      </main>
    </div>
  );
}
