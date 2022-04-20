import React, { useState } from "react";
import {
  Input,
  UI,
  Fluid,
  Icon,
  Container,
  Header,
  Form,
  Label,
  Divider,
  Button,
} from "semantic-ui-react";
import SlideInMenu from "../Signup/SlideInMenu"
import TeacherDropdown from "../Signup/TeacherDropdown";
// import {setOutOfFocus} from "../Signup/SlideInMenu"

const Signup = () => {
  const [isTeacher, setIsTeacher] = useState(false)
  const [outOfFocus, setOutOfFocus] = useState(true)
  

  return <>

        <Header>&nbsp;</Header>
        {/* FORM FIELD */}
        <div className="form-container">
            <>
              <Label>
                <h3>
                  Who is your Teacher?
                </h3>
              </Label>
              <div style={{margin: "10px"}}>
              <TeacherDropdown />
              </div>
            </>
        </div>
        <Divider fitted/>
        <footer>
        <Button 
        content='I am a Teacher' 
        labelPosition="left" 
        icon="lightbulb"
        onClick={() => setIsTeacher(true)}
        />
          <Button
            content="Next"
            labelPosition="right"
            icon="arrow right"
            onClick={() => setOutOfFocus(false)}
            positive
          />
        </footer>

        <SlideInMenu 
        outOfFocus={outOfFocus}
        setOutOfFocus={setOutOfFocus}
        isTeacher={isTeacher}
        setIsTeacher={setIsTeacher}
        />
      
  </>;
};

export default Signup;
