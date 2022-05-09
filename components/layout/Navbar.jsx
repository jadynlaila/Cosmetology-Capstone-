import React, { useState } from "react";
// import Image from "next/image";
// import LoginOrSignup from "./loginOrSignup";
// import { Button } from "semantic-ui-react";
import isTeacher from "../../pages/profile";
import { Button, Image } from "semantic-ui-react";
import Link from "next/link";

const Navbar = (isTeacher) => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div id="nav">
      <div className="image-container">
      <Link href={"/"}>
        <Image
        
          className="logo"
          src={"/logo3-1.png"}
          alt="logo"
          height="56.25"
          width="112.5"
        />
        </Link>
        <Link href={"/"}>
            <h1>Hairstyling</h1>
        </Link>
      </div>

      {isTeacher ? (
        <div className="identifier">
        
          <div className="logo-container">
            {/* <div className="profile-logo"> */}
          <Image
            circular
            src={"/bigChung.webp"}
            alt="logo"
            size="tiny"
            
          />
          </div>
          <Link href={'/profile'}>
            <h2>Student</h2>
            </Link>
          
          {/* </div> */}
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
        {/* <Link href="/signup">
          <Button className="signup">New User?</Button>
        </Link> */}
        <Link href="/login">
          <h3>{loggedIn ? "Logout" : "Login"}</h3>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
