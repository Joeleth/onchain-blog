import { Link, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { use, useEffect, useState } from "react";

const Navbar = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  // const [searchTerm, setSearchTerm] = useState("");
  // const [display, setDisplay] = useState(article);
  const navigate = useNavigate();

 



  return (
    <nav className="fixed top-0 w-full bg-black text-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 sm:gap-4 lg:gap-6 py-3 sm:py-4">
        {/* Logo */}
        <Link
          to="/"
          className="font-bold text-base sm:text-lg lg:text-xl tracking-tight"
        >
          onchaindata
        </Link>

        {/* Search Bar */}
        <form  className="relative">
          <span className="absolute left-2 top-1/2 transform -translate-y-1/2">
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 group-hover:text-white transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search..."
            className="w-32 sm:w-36 lg:w-40 pl-7 pr-3 py-1.5 sm:py-2 rounded-lg border border-gray-700 bg-gray-900 text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white/20 transition-all text-xs sm:text-sm"
            aria-label="Search"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>

        {/* Sign In / User Avatar */}
        <Link to="/sign-in">
          {currentUser ? (
            <img
              src={currentUser.avatar}
              alt="User profile"
              className="rounded-full h-6 w-6 sm:h-7 sm:w-7 object-cover border border-gray-700"
              onError={(e) => (e.target.src = "/fallback-avatar.png")}
            />
          ) : (
            <button
              className="px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg border border-white text-xs sm:text-sm font-medium hover:bg-white hover:text-black transition-colors duration-200"
              aria-label="Sign in"
            >
              Sign In
            </button>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
