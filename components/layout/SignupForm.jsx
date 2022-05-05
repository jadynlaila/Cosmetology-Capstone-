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
  Radio,
} from "semantic-ui-react";
import { baseURL } from "../../pages/util/baseURL";
import SlideInMenu from "../Signup/SlideInMenu";
import TeacherDropdown from "../Signup/TeacherDropdown";
import ImgDropDiv from "./ImgDropDiv";
import { setToken } from "../../pages/util/authUser";
// import {setOutOfFocus} from "../Signup/SlideInMenu"

const Signup = () => {
  const [isTeacher, setIsTeacher] = useState(false);
  const [outOfFocus, setOutOfFocus] = useState(true);
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [teacherSelected, setTeacherSelected] = useState([]);
  const [formLoading, setFormLoading] = useState(false);
  const [submitDisable, setSubmitDisable] = useState(true);
  const [media, setMedia] = useState(null);
  const [mediaPreview, setMediaPreview] = useState(null);
  const inputRef = useRef(null);
  const [resHolder, setResHolder] = useState("");
  const [highlighted, setHighlighted] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState([])

  const [stylist, setStylist] = useState({
    email: "",
    name: "",
    teacher: '',
  });

  const { email, name, teacher } = stylist;

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
  
  const radios = useRef(new Array(teachers.length).fill(''))





  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "media" && files.length) {
      setMedia(files[0]);
      setMediaPreview(() => URL.createObjectURL(files[0]));
    } else {
      setStylist((prev) => ({ ...prev, [name]: value }));
      console.log(stylist);
    }
  };

  const selectTeacher = () => {
    let value = '';
    let name = '';
    console.log(radios.current);
    radios.current.map((each) => {
      if (each.checked) {
        console.log(each.id, each.name);
        value = each.id;
        name = each.name;
      }
    })
    setStylist((prev) => ({ ...prev, [name]: value }));
    console.log(stylist);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(stylist);
    setFormLoading(true);
    let profilePicURL = '';
    if (media != null) {
      const formData = new FormData();
      formData.append("image", media, {
        headers: {
          "Content=Type": "multipart/form-data",
        },
      });
      const res = await axios.post(`${baseURL}/api/v1/uploads`, formData);
      profilePicURL = res.data.src;
      profilePicURL = profilePicURL.toString();
      console.log(`hi profilepic ${profilePicURL}`)
    }
    if (media !== null && !profilePicURL) {
      setFormLoading(false);
      console.log("Error uploading Image");
    }

    console.log(`pfp ${profilePicURL}`)
    try {
      const res = await axios.post(`${baseURL}/api/v1/signup/stylist`, {
        stylist,
        profilePicURL,
      });
      setToken(res.data);
    } catch (error) {
      console.log("Eroro", error);
    }

    setFormLoading(false);
  };




  return (
    <>
      <Header>&nbsp;</Header>
      <div className="form-container">
        <Form loading={formLoading} onSubmit={handleSubmit}>
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

            <label>
              <h2>Choose your Teacher</h2>
            </label>
            <Divider hidden />
            {teachers.map((each, i) => {
              return (
                <>
                  <input
                    className="radioButton"
                    control="input"
                    type="radio"
                    name="teacher"
                    value={each.name}
                    key={each._id}
                    onChange={selectTeacher}
                    ref={((value) => {
                      radios.current[i] = value
                    })}
                    id={each._id}
                  />
                  <label for={each._id}>{each.name}</label>
                </>
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
              icon="envelope"
              iconPosition="left"
              type="email"
            />
          </Segment>
          <Button icon="signup" content="Signup" type="submit" color="green" />
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
