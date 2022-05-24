// this will be to display the students profile only

import React, { useState } from "react";
import { Grid, Form, Divider, Container, Accordion } from "semantic-ui-react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/layout/Navbar";
import StudentProfile from "../components/profile/StudentProfile";
import TeacherProfile from "../components/profile/TeacherProfile";
import Placeholdercomp from "../components/Login/Placeholdercomp";

const PersonalProfile = () => {
  const [isTeacher, setIsTeacher] = useState(false);
  return (
    <>
      <Navbar />
      <div className="profile">
        {/* <StudentProfile /> */}

        <TeacherProfile />
      </div>
      <Placeholdercomp />
    </>
  );
};

export default PersonalProfile;