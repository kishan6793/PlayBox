import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../../redux/api/users";
import { logout } from "../../redux/features/auth/authSlice";
import "../../CSS/Header.css";
import logo from "../../assets/logo.png";

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth); // Access the authenticated user information from the Redux store
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to manage the dropdown menu visibility
  const dispatch = useDispatch(); // Dispatch function from Redux
  const navigate = useNavigate(); // Hook for programmatic navigation
  const [logoutApiCall] = useLogoutMutation(); // Redux toolkit query mutation for logout API
  const dropdownRef = useRef(null); // Reference for the dropdown menu

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen); // Toggle the dropdown menu state

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap(); // Call the logout API and unwrap the result
      dispatch(logout()); // Dispatch the logout action to clear the Redux store
      navigate("/login"); // Redirect to the login page
    } catch (error) {
      console.error(error); // Log any errors during the logout process
    }
  };

  const handleSignIn = () => navigate("/login"); // Navigate to the login page for sign-in

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close the dropdown if a click occurs outside of it
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    // Add event listener to detect clicks outside when the dropdown is open
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup the event listener on unmount or when the dropdown closes
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]); // Dependency array ensures the effect re-runs when `dropdownOpen` changes

  return (
    <header className="header">
      {/* Logo linking to the home page */}
      <Link to="/" className="logo">
        <img src={logo} alt="" />
      </Link>

      {/* Navigation links */}
      <nav className="nav">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/movies" className="nav-link">
          Browse Movies
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>

        {userInfo ? ( // Conditional rendering based on user authentication
          <div className="relative" ref={dropdownRef}>
            {/* Username button with dropdown toggle */}
            <button onClick={toggleDropdown} className="text-white">
              {userInfo.username}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`ml-1 h-4 w-4 ${dropdownOpen ? "rotate-180" : ""}`} // Rotate the icon based on dropdown state
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={dropdownOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} // Icon path toggles based on dropdown state
                />
              </svg>
            </button>

            {dropdownOpen && ( // Render the dropdown menu only when open
              <ul className="absolute right-0 mt-2 w-[10rem] bg-white text-gray-600 rounded shadow-lg z-50">
                {userInfo.isAdmin && ( // Show the dashboard link only if the user is an admin
                  <li>
                    <Link
                      to="/admin/movies/dashboard"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Dashboard
                    </Link>
                  </li>
                )}
                <li>
                  <Link
                    to="/profile"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <button
                    onClick={logoutHandler}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            )}
          </div>
        ) : (
          // Sign-in button for unauthenticated users
          <button onClick={handleSignIn} className="sign-button">
            Sign In / Sign Up
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
