import axios from "axios";
import React, { useState, useEffect } from "react";
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
import { baseURL } from "../../pages/util/baseURL";
import SlideInMenu from "../Signup/SlideInMenu"
import TeacherDropdown from "../Signup/TeacherDropdown";
// import {setOutOfFocus} from "../Signup/SlideInMenu"

const Signup = () => {
  const [isTeacher, setIsTeacher] = useState(false)
  const [outOfFocus, setOutOfFocus] = useState(true)
  const [teachers, setTeachers] = useState([])
  const [loading, setLoading] = useState(false)
  const [teacherSelected, setTeacherSelected] = useState([])



   

  useEffect(() => {
    const handleResTeach = async(e) => {
      setLoading(true)
      try {
        const res = await axios.get(`${baseURL}/api/v1/teacher`)
  
        if(res.data.length === 0){
          setTeachers([])
          setLoading(false)
        } else {
          setTeachers(res.data)
          console.log("Test Teach", res.data);
        }
      } catch (error) {
        console.log("Error res signup",error);
      }
      setLoading(false)
    }
    handleResTeach()
  }, [])
  
  const handleClick = async (e) => {
    const {value} = e.target;
    setTeacherSelected(value)
    
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await axios.get(`${baseURL}/signup/stylist`)
      
    } catch (error) {
      console.log("Error handleSub", error);
    }

    
  }
  

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
              {teachers.map((teacher) => {
                return (
                  <div key={teacher._id} onClick={(e) => handleClick()}>
                    <h2>{teacher.name}</h2>
                  </div>
                )
              })}
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
