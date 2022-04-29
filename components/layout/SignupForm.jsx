import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
// import {useLocation} from "react-router-dom"
import {
  Message,
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
  Dropdown,
  Segment,
  Radio
} from "semantic-ui-react";
// import { setToken } from '../../pages/util/tokenHolder'
import { baseURL } from "../../pages/util/baseURL";
import SlideInMenu from "../Signup/SlideInMenu";
import TeacherDropdown from "../Signup/TeacherDropdown";
import { useRouter } from 'next/router'
// import router from "../../server/routes/signupRoutes";
// import ImgDropDiv from "./ImgDropDiv";
// import {setOutOfFocus} from "../Signup/SlideInMenu"

const Signup = () => {


  // * TeacherDivOpen: opens the div that displays message for teacher to select their name from the dropdown
  // ! This should be used as the conditional to retrieve for teachers to login
  const [teacherDivOpen, setTeacherDivOpen] = useState(false)
  // 
  
  // * This is used exclusively on the signinPage, its just used as the conditional to open slideInMenu.jsx
  const [isTeacher, setIsTeacher] = useState(false);
  // * this is the same as isTeacher but its just the default, a more appropriate name would be isStudent
  const [outOfFocus, setOutOfFocus] = useState(true);
  // 

  const [teachers, setTeachers] = useState([]);
  const [teacherSelected, setTeacherSelected] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [formLoading, setFormLoading] = useState(false)
  const [submitDisable, setSubmitDisable] = useState(true)
  // const [media, setMedia] = useState(null)
  // const [mediaPreview, setMediaPreview] = useState(null)
  // const inputRef = useRef(null)
  const [resHolder, setResHolder] = useState('')
  const [highlighted, setHighlighted] = useState(false)
  // const location = useLocation()

  // const [stylist, setStylist] = useState({
  //   email: "",
  //   name: "",
  //   teacher: ""
  // })

  // const {email, name} = stylist;

  useEffect(() => {
    const handleResTeach = async (e) => {
      setLoading(true);
      try {
        const res = await axios.get(`${baseURL}/api/v1/teacher`);

        if (res.data.length === 0) {
          setTeachers([]);
          setLoading(false);
        } else {
          setTeachers(res.data);
          console.log("Test Teach", res.data);
        }
      } catch (error) {
        console.log("Error res signup", error);
      }
      setLoading(false);
    };
    handleResTeach();
  }, []);

  const handleClick = async (e) => {
    const { value } = e.target;
    setTeacherSelected(value);
  };

  // const handleChange = (e) => {
  //   const {name, value, files} = e.target;

  //   if(name === "media" && files.length){
  //     setMedia(files[0])
  //     setMediaPreview(() => URL.createObjectURL(files[0]))
  //   } else {
  //     setStylist((prev) => ({...prev, [name]: value}))
  //   }

  // }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setFormLoading(true)
  //   let profilePicURL;
  //   if(media != null){
  //     const formData = new FormData();
  //     formData.append("image", media, {
  //       headers: {
  //         "Content=Type": "multipart/form-data"
  //       }
  //     })
  //     const res = await axios.post(`${baseURL}/api/v1/uploads`, formData);
  //     profilePicURL = res.data.src;
  //   }
  //   if(media !== null && !profilePicURL){
  //     setFormLoading(false)
  //     console.log("Error uploading Image");
  //   }
  //   try {
  //     const res = await axios.post(`${baseURL}/api/v1/signup/stylist`, {
  //       stylist, profilePicURL
  //     })
  //     setToken(res.data)
  //   } catch (error) {
  //     console.log("Eroro", error);
  //   }

  //   setFormLoading(false)
  // };

  const router = useRouter()
  // const pathname = router.pathname
  return (
    <>
      <Header>&nbsp;</Header>
      {/* FORM FIELD */}
      <div className="form-container">
        {teacherDivOpen ?
          <Message positive>
            Select your name from the Dropdown
          </Message> :
          ""
        }
        {/* <>
          <Label>
            <h3>Who is your Teacher?</h3>
          </Label>
          <Dropdown style={{marginBottom: "15px"}} placeholder="Select Teacher" fluid selection>
            <Dropdown.Menu>
              {teachers.map((teacher) => {
                return (
                  // <div key={teacher._id} onClick={(e) => handleClick()}>
                  //   <h2>{teacher.name}</h2>
                  // </div>
                  // this will get the teacher by their id and display the text and the image property
                  <Dropdown.Item onClick={(e) => handleClick()} key={teacher._id} {...teacher}>
                    {teacher.name}
                  </Dropdown.Item>
                );
              })}
              </Dropdown.Menu>
            
          </Dropdown>
        </> */}
        <Form
        // loading={formLoading}
        // onSubmit={handleSubmit}
        >
          <Segment>
          {/* <ImgDropDiv
            handleChange={handleChange}
            inputRef={inputRef}
            highLighted={highlighted}
            setHighlighted={setHighlighted}
            mediaPreview={mediaPreview}
            setMedia={setMedia}
            setMediaPreview={setMediaPreview}
            media={media}
          /> */}

          <label>{teacherDivOpen ? "" : "Select Your Teacher"}</label>
          {/* <Divider hidden /> */}


          <Dropdown
            placeholder='Select Teacher'
            require
            fluid
            selection
            options={teachers.map((teacher) => {
              return {
                key: teacher._id,
                text: teacher.name,
                value: teacher._id
              }
            })}
          // control='input'
          // label={teacher.name}
          // type='radio'
          // name="htmlRadios"
          // key={teacher._id}
          />

          {/* ); */}
          <Divider hidden />
          {/* <Form.Input
            required
            label="Name"
            placeholder="Name"
            name="name"
            value={name}
            onChange={handleChange}
            icon="user"
            iconPosition="left" 
            />
            <Form.Input
            required
            label="Email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleChange}
            icon='envelope'
            iconPosition='left'
            type="email" 
            /> */}
          </Segment>
          {/* <Button
          icon="signup"
          content="Signup"
          type="submit"
          color="green"
        /> */}
        </Form>
      </div>
      <Divider fitted />
      <footer>
        {/*//* Uses pathname to decide which version of signupform to show */}
        {router.pathname === "/login" ?


          <Button
            content="I am a Teacher"
            labelPosition="left"
            icon={teacherDivOpen? "check" : "lightbulb"}
            color={teacherDivOpen? "grey" : "green"}
            onClick={() => {setTeacherDivOpen(!teacherDivOpen)}}
            
            
          />
          :

          <Button
            content="I am a Teacher"
            labelPosition="left"
            icon="lightbulb"
            onClick={() => setIsTeacher(true)}
          />
        }
        {/* {router.route('/login') ? "" : */}
        {router.pathname === "/login" ?
          " "


          :

          < Button
            content="Next"
            labelPosition="right"
            icon="arrow right"
            onClick={() => setOutOfFocus(false)}
            positive
          />
        }
        
      </footer>

      <SlideInMenu
        outOfFocus={outOfFocus}
        setOutOfFocus={setOutOfFocus}
        isTeacher={isTeacher}
        setIsTeacher={setIsTeacher}
      />
    </>
  );
};


export default Signup;
