import { NavLink } from "react-router"; 
import {
 Plus,
  User,
  LayoutDashboard,
  Map,
  Building,
  Stethoscope,
  History,
  Settings,
} from "lucide-react";
import React from "react";

type MenuItem = {
  name: string;
  path: string;
  icon: React.ReactNode;
};

const menuItems: MenuItem[] = [
  { name: "Patients", path: "/", icon: <User size={18} /> },
  { name: "Overview", path: "/overview", icon: <LayoutDashboard size={18} /> },
  { name: "Map", path: "/map", icon: <Map size={18} /> },
  { name: "Departments", path: "/departments", icon: <Building size={18} /> },
  { name: "Doctors", path: "/doctors", icon: <Stethoscope size={18} /> },
  { name: "History", path: "/history", icon: <History size={18} /> },
  { name: "Settings", path: "/settings", icon: <Settings size={18} /> },
];

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-white border-r px-4 py-6 flex flex-col h-screen">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Plus size={18} />
          </button>
          <h1 className="text-2xl font-bold">H-care</h1>
        </div>
        <div className="border-b border-gray-200 mb-4" />
      </div>

      <div className="flex-1">
        <nav className="flex flex-col gap-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border ${
                  isActive
                    ? "bg-blue-50 text-blue-600 border-blue-300 font-semibold"
                    : "text-gray-700 hover:bg-gray-100 border-transparent"
                }`
              }
              end
            >
              {item.icon}
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
