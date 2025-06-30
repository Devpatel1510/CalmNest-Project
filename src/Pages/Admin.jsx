import React from "react";
import { useNavigate } from "react-router-dom";
const Admin = () => {
  const navigate = useNavigate();

  const setTheme = (theme) => {
    localStorage.setItem("homeTheme", theme); // Save selected theme
    navigate(`/${theme}`); // Navigate to that page
  };
  return (
    <div className="bg-white font-sans">


      {/* Main Content */}
      <main className="px-6 py-8">
        <h1 className="text-center text-3xl font-extrabold mb-8">Theme</h1>
        <div className="flex flex-wrap justify-center items-center gap-20 mb-12">
          <div className="w-40 h-40 rounded-3xl bg-gray-300 flex items-center justify-center text-white text-base select-none">
            Emails
          </div>
          <button
            onClick={() => setTheme("home")}
            className="bg-purple-700 text-white rounded-full px-8 py-3 text-sm hover:bg-purple-800 transition-colors duration-300"
          >
            Home 1
          </button>
          <button
            onClick={() => setTheme("home1")}
            className="bg-purple-700 text-white rounded-full px-8 py-3 text-sm hover:bg-purple-800 transition-colors duration-300"
          >
            Home 2
          </button>
          <button
            onClick={() => localStorage.setItem('aboutTheme', 'about1')}
            className="bg-purple-700 text-white rounded-full px-8 py-3 text-sm hover:bg-purple-800 transition-colors duration-300"
          >
            Switch to About 2
          </button>

        </div>
        <div className="w-full rounded-3xl bg-purple-700 h-40 flex items-center justify-center text-white text-base select-none">
          Users
        </div>
      </main>
    </div>
  );
};

export default Admin;
