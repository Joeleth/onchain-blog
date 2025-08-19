import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const Navbar = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  //   const desktopSearchRef = useRef(null);
  //   const mobileSearchRef = useRef(null);

  return (
    <nav className="fixed top-0 w-full bg-black text-white z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="font-bold text-xl ">onchaindata</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Desktop Search */}
            <div className="relative group">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <svg
                  className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
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
                // ref={desktopSearchRef}
                type="text"
                placeholder="Search..."
                className="w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:border-white focus:w-72 transition-all"
              />
            </div>

            {/* Sign Up Button */}
            {/* <button className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
              Sign Up
            </button> */}

            {/* Sign In Button */}
            <Link to={"/profile"}>
              {currentUser ? (
                <img
                  src={currentUser.avatar}
                  alt="profile"
                  className="rounded-full h-7 w-7 object-cover"
                />
              ) : (
                <button to={'/sign-in'} className="border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition-colors">
                  Sign In
                </button>
              )}
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Mobile Search Icon */}
            <button
              className="p-2 relative group"
              //   onClick={() => setIsMenuOpen(true)}
            >
              <svg
                className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            {/* Mobile Menu Button */}
            <button className="p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="py-4 space-y-4">
            {/* Mobile Search Bar */}
            <div className="relative mb-4">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
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
                // ref={mobileSearchRef}
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:border-white"
              />
            </div>

            {/* Mobile Buttons */}
            <div className="space-y-2">
              {/* <Link className="w-full bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors text-left">
                Sign Up
              </Link> */}

              {currentUser ? (
                <img
                  src={currentUser.avatar}
                  alt="profile"
                  className="rounded-full h-7 w-7 object-cover"
                />
              ) : (
                <Link
                  to={"/sign-in"}
                  className="w-full border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition-colors text-left"
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
