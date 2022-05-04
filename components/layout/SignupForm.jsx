import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
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
  Dropdown,
  Segment,
  Radio
} from "semantic-ui-react";
import { baseURL } from "../../pages/util/baseURL";
import SlideInMenu from "../Signup/SlideInMenu";
import TeacherDropdown from "../Signup/TeacherDropdown";
import ImgDropDiv from "./ImgDropDiv";
import {setToken} from '../../pages/util/authUser'
// import {setOutOfFocus} from "../Signup/SlideInMenu"

const Signup = () => {
  const [isTeacher, setIsTeacher] = useState(false);
  const [outOfFocus, setOutOfFocus] = useState(true);
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [teacherSelected, setTeacherSelected] = useState([]);
  const [formLoading, setFormLoading] = useState(false)
  const [submitDisable, setSubmitDisable] = useState(true)
  const [media, setMedia] = useState(null)
  const [mediaPreview, setMediaPreview] = useState(null)
  const inputRef = useRef(null)
  const [resHolder, setResHolder] = useState('')
  const [highlighted, setHighlighted] = useState(false)

  const [stylist, setStylist] = useState({
    email: "",
    name: "",
    teacher: ""
  })

  const { email, name } = stylist;

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

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "media" && files.length) {
      setMedia(files[0])
      setMediaPreview(() => URL.createObjectURL(files[0]))
    } else {
      setStylist((prev) => ({ ...prev, [name]: value }))
    }

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormLoading(true)
    let profilePicURL;
    if (media != null) {
      const formData = new FormData();
      formData.append("image", media, {
        headers: {
          "Content=Type": "multipart/form-data"
        }
      })
      const res = await axios.post(`${baseURL}/api/v1/uploads`, formData);
      profilePicURL = res.data.src;
    }
    if (media !== null && !profilePicURL) {
      setFormLoading(false)
      console.log("Error uploading Image");
    }
    try {
      const res = await axios.post(`${baseURL}/api/v1/signup/stylist`, {
        stylist, profilePicURL
      })
      setToken(res.data)
    } catch (error) {
      console.log("Eroro", error);
    }

    setFormLoading(false)
  };

  return (
    <>
      <Header>&nbsp;</Header>
      {/* FORM FIELD */}
      <div className="form-container">
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
          loading={formLoading}
          onSubmit={handleSubmit}
        >
          <Segment>
          <ImgDropDiv
            handleChange={handleChange}
            inputRef={inputRef}
            highLighted={highlighted}
            setHighlighted={setHighlighted}
            mediaPreview={mediaPreview}
            setMedia={setMedia}
            setMediaPreview={setMediaPreview}
            media={media}
          />

            <label><h2>Choose your Teacher</h2></label>
            <Divider hidden />
            {teachers.map((teacher) => {
              return (
                  <Form.Field
                  className="radioButton"
                  control='input'
                  label={teacher.name}
                  type='radio'
                  name="htmlRadios"
                  key={teacher._id}
                  />
              );
            })}
            <Divider hidden />
            <Form.Input
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
            />
          </Segment>
          <Button
         icon="signup"
         content="Signup"
         type="submit"
         color="green"
        />
        </Form>
      </div>
      <Divider fitted />
      <footer>
        <Button
          content="I am a Teacher"
          labelPosition="left"
          icon="lightbulb"
          onClick={() => setIsTeacher(true)}
        />
       
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
