// Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import PopupForm from "./PopupForm";
import profile from "../../asssets/user.png"; // Corrected import

const Navbar = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div>
      <header className="navbar h-[60px] justify-center my-[auto] mx-[auto ]">
        <Link to="/">Home</Link>
        <div className="navbar-right border-orange-500">
          <span
            className="post-request-text px-3  py-1 mb-[auto]"
            onClick={openPopup}
          >
            Post Request
          </span>
          <Link
            to="/profile"
            className="profile-link"
            // Apply orange border on hover
            style={{ ':hover': { border: '2px solid orange' } }}
          >
            <img
              src={profile}
              alt="Profile"
              className="h-[35px] w-[auto] rounded-full transition duration-300 ease-in-out transform hover:scale-110 hover:border-orange-500 "
            />
          </Link>
        </div>
      </header>

      {isPopupOpen && <PopupForm closePopup={closePopup} />}
    </div>
  );
};

export default Navbar;
