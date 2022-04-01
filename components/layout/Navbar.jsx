import React, { useState } from "react";
import Image from "next/image";
// import LoginOrSignup from "./loginOrSignup";
// import { Button } from "semantic-ui-react";
import isTeacher from "../../pages/profile"

const Navbar = (isTeacher) => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div id="nav">
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

          <Image
            className="logo"
            src={"/apple.png"}
            alt="logo"
            height="64"
            width="53.95"
          />
        </div>
        : " "}
      <div className="nav-link">
        <h3>{loggedIn ? "Logout" : "Login"}</h3>
      </div>
    </div>
  );
};

export default Navbar;
