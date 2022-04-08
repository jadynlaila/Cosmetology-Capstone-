import React, { useState } from "react";
import Image from "next/image";
// import LoginOrSignup from "./loginOrSignup";
// import { Button } from "semantic-ui-react";
import isTeacher from "../../pages/profile";
import { Button } from "semantic-ui-react";
import Link from "next/link";

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
        <div>
            <h1>Hairstyling</h1>
        </div>
      </div>

      {isTeacher ? (
        <div className="identifier">
          <h1>Student</h1>

          <Image
            className="logo profile-logo"
            src={"/bigChung.webp"}
            alt="logo"
            height="64"
            width="64"
            style="padding: 10px;"
          />
        </div>
      ) : (
        <div className="identifier">
          <h1>Teacher</h1>

          <Image
            className="logo"
            src={"/apple.png"}
            alt="logo"
            height="64"
            width="53.95"
          />
        </div>
      )}
      <div className="nav-link">
        <Link href="/signup">
          <Button className="signup">New User?</Button>
        </Link>
        <Link href="/login">
          <h3>{loggedIn ? "Logout" : "Login"}</h3>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
