import React, { useState } from "react";
import Image from "next/image";
// import LoginOrSignup from "./loginOrSignup";
import { Button } from "semantic-ui-react";
import isTeacher from "../../pages/profile"

const Navbar = (isTeacher) => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <nav>
      <div className="image-container">
        <Image
          className="logo"
          src={"/newLogo.png"}
          alt="logo"
          height="56.25"
          width="112.5"
        />
        <h1>Hairstyling</h1>
      </div>
      {isTeacher ? 
      <div className="identifier">
        <h3>
          Teacher
        </h3>
      </div>
      : " "}
      <div className="nav-link">
        <h3>{loggedIn ? "Logout" : "Login"}</h3>
      </div>
    </nav>
  );
};

export default Navbar;
