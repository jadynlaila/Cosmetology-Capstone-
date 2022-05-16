// this will be to display the students profile only

import React, { useState } from "react";
import { Grid, Form, Divider, Container, Accordion } from "semantic-ui-react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/layout/Navbar";
import StudentProfile from "../components/profile/StudentProfile";
import TeacherProfile from "../components/profile/TeacherProfile";

const personalProfile = () => {
  const [isTeacher, setIsTeacher] = useState(false);
  return (
    <>
    
      <Navbar/>
      <div className="profile">
          {/* <StudentProfile /> */}
          {/* If you want to remove that client profile thing you can just comment that out in the client profile compnent, trying\ to make it as a popup when you click it */}

          <TeacherProfile />
        
          </div>
    </>
  );
};

export default personalProfile;
