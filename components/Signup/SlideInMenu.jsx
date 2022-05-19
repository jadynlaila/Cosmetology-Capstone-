import React, { useState, useEffect, useRef } from "react";
import {
  Header,
  Label,
  Button,
  Divider,
  Form,
  Dropdown,
  Icon,
  Grid,
} from "semantic-ui-react";
import ImgDropDiv from "../layout/ImgDropDiv";
import axios from "axios";
import { baseURL } from "../../pages/util/baseURL";

const SlideInMenu = ({
  outOfFocus,
  setOutOfFocus,
  isTeacher,
  setIsTeacher,
  teachers,
  setStylist,
  stylist,
  handleSubmit,
  handleChange,
  setTeachers
}) => {
  // const [isTeacher, setIsTeacher] = useState(false);
  // const [outOfFocus, setOutOfFocus] = useState(true);
  const [loading, setLoading] = useState(false);
  const [teacherSelected, setTeacherSelected] = useState([]);
  const [formLoading, setFormLoading] = useState(false);
  const [media, setMedia] = useState(null);
  const [mediaPreview, setMediaPreview] = useState(null);
  const inputRef = useRef(null);
  const [resHolder, setResHolder] = useState("");
  const [highlighted, setHighlighted] = useState(false);

  const [teacher, setTeacher] = useState({
    email: "",
    password: "",
    name: "",
    pin: "",
  });
  const [submitDisable, setSubmitDisable] = useState(true);

  const [studentSignedUp, setStudentSignedUp] = useState(false);
  const [teacherSignedUp, setTeacherSignedUp] = useState(false);

  const { teacherEmail, teacherName, pin, password } = teacher;
  const { email, name } = stylist;

  const handleTeacherChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "media" && files.length) {
      setMedia(files[0]);
      setMediaPreview(() => URL.createObjectURL(files[0]));
    } else {
      setTeacher((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleTeacherSubmit = async (e) => {
    e.preventDefault();
    setFormLoading(true);
    let profilePicURL;
    if (media != null) {
      const formData = new FormData();
      formData.append("image", media, {
        headers: {
          "Content=Type": "multipart/form-data",
        },
      });
      const res = await axios.post(`${baseURL}/api/v1/uploads`, formData);
      profilePicURL = res.data.src;
    }
    if (media !== null && !profilePicURL) {
      setFormLoading(false);
      console.log("Error uploading Image");
    }
    try {
      const res = await axios.post(`${baseURL}/api/v1/signup/teacher`, {
        teacher,
        profilePicURL,
      });
      setToken(res.data);
    } catch (error) {
      console.log("Eroro", error);
    }
    setTeacherSignedUp(true);
    setFormLoading(false);
    console.log('teahcerhihihheyhey', teacher)
    setTeachers((prev) => [...prev, teacher]);
    console.log(teachers, teacher);
  };

  return (
    <>
      <div
        className="slide"
        style={{ zIndex: !outOfFocus || isTeacher ? "5" : "-1" }}
      >
        {!isTeacher ? (
          studentSignedUp ? (
            <>
              <div
                id="slideInModal"
                style={{
                  marginTop: "50px",
                  marginRight: outOfFocus ? "3000px" : "0px",
                }}
              >
                <Header>Student Signup</Header>
                <div>Your account has been successfully made! Check your email for your new pin.
                  You can then use this pin to log in and to check clients in and out.
                </div>
                <footer>
                  {/* style this div so its in smaller text */}
                  <div> Don't see the email? Contact jadyncalh@gmail.com </div>
                  <Button
                    content="Back"
                    labelPosition="left"
                    icon="arrow left"
                    onClick={() => setStudentSignedUp(false)}
                    negative
                  />
                </footer>
              </div>
            </>
          ) : (
            <div
              id="slideInModal"
              style={{
                marginTop: "50px",
                marginRight: outOfFocus ? "3000px" : "0px",
              }}
            >
              <Header>Student Signup</Header>
              <div className="form-container">
                <Form loading={formLoading} onSubmit={handleSubmit}>
                  <Form.Field>
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
                  </Form.Field>
                  <Form.Field>
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
                  </Form.Field>
                  <Form.Field>
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
                  </Form.Field>
                </Form>
              </div>
              <Divider />
              <footer>
                <Button
                  content="Back"
                  labelPosition="left"
                  icon="arrow left"
                  onClick={() => setOutOfFocus(true)}
                  negative
                />
                <Button
                  icon="signup"
                  content="Signup"
                  type="submit"
                  color="green"
                  labelPosition="right"
                  onClick={handleSubmit}
                />
              </footer>
            </div>
          )
        ) : teacherSignedUp ? (
          <>
            <div
              id="slideInModal"
              style={{
                marginTop: "50px",
                marginRight: outOfFocus ? "" : "0px",
              }}
            >
              <Header>Student Signup</Header>
              <div style={{margin: "15px"}}>Your account has been successfully made! Use the password you created as a pin to login!
              </div>
              <footer>
                {/* style this div so its in smaller text */}
                <div style={{margin: "25px"}}> Having trouble logging in? Contact jadyncalh@gmail.com </div>
                <Button
                  content="Back"
                  labelPosition="left"
                  icon="arrow left"
                  onClick={() => setTeacherSignedUp(false)}
                  negative
                />
              </footer>
            </div></>
        ) : (
          <div
            id="teacherSlideInModal"
            style={{
              marginTop: "50px",
              marginRight: !isTeacher ? "3000px" : "0px",
            }}
          >
            <Header>Teacher</Header>
            <div className="form-container">
              <Form loading={formLoading} onSubmit={handleSubmit}>
                <Form.Field>
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
                </Form.Field>
                <Grid>
                  <Grid.Column width="8">
                    <Grid.Row>
                      <Form.Field>
                        <Form.Input
                          required
                          label="Name"
                          placeholder="Name"
                          name="teacherName"
                          value={teacherName}
                          onChange={handleTeacherChange}
                          icon="user"
                          iconPosition="left"
                        />
                      </Form.Field>
                    </Grid.Row>

                    <Grid.Row>
                      <Form.Field>
                        <Form.Input
                          required
                          label="Email"
                          placeholder="Email"
                          name="teacherEmail"
                          value={teacherEmail}
                          onChange={handleTeacherChange}
                          icon="envelope"
                          iconPosition="left"
                          type="email"
                        />
                      </Form.Field>
                    </Grid.Row>
                  </Grid.Column>
                  <Grid.Column width="8">
                    <Grid.Row>
                      <Form.Field>
                        <Form.Input
                          required
                          label="Password"
                          placeholder="Password"
                          name="password"
                          value={password}
                          onChange={handleTeacherChange}
                          icon="envelope"
                          iconPosition="left"
                          type="email"
                        />
                      </Form.Field>
                    </Grid.Row>
                    <Grid.Row>
                      <Form.Field>
                        <Form.Input
                          required
                          label="Teacher Code"
                          placeholder="code"
                          name="pin"
                          value={pin}
                          onChange={handleTeacherChange}
                          icon="envelope"
                          iconPosition="left"
                          type="email"
                        />
                      </Form.Field>
                    </Grid.Row>
                  </Grid.Column>
                </Grid>
              </Form>
            </div>
            <Divider />
            <footer>
              <Button
                content="Back"
                labelPosition="left"
                icon="arrow left"
                onClick={() => setIsTeacher(false)}
                negative
              />
              <Button
                icon="signup"
                content="Signup"
                type="submit"
                color="green"
                onClick={handleTeacherSubmit}
              />
            </footer>
          </div>
        )}
      </div>
    </>
  );
};

export default SlideInMenu;
