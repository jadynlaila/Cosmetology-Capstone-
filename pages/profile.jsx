// this will be to display the students profile only

import React, { useState } from "react";
import { Grid, Form, Divider, Container, Accordion } from "semantic-ui-react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/layout/Navbar";
import StudentProfile from "../components/profile/StudentProfile";
import TeacherProfile from "../components/profile/TeacherProfile";
import ClientProfile from "../components/profile/ClientProfile";

const personalProfile = () => {
  const [isTeacher, setIsTeacher] = useState(false);
  return (
    <>
      <Navbar />
      <div className="profile">
        {/* <StudentProfile /> */}
        {/* <TeacherProfile /> */}
        <ClientProfile />
      </div>
    </>
  );
};

export default personalProfile;
