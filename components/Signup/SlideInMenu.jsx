import React, { useState, useEffect, useRef } from 'react'
import { Header, Label, Button, Divider, Form, Dropdown, Icon } from 'semantic-ui-react'
import ImgDropDiv from "../layout/ImgDropDiv";



const SlideInMenu = ({ outOfFocus, setOutOfFocus, isTeacher, setIsTeacher, teachers, setStylist, stylist, handleSubmit, handleChange }) => {
  // const [isTeacher, setIsTeacher] = useState(false);
  // const [outOfFocus, setOutOfFocus] = useState(true);
  const [loading, setLoading] = useState(false);
  const [teacherSelected, setTeacherSelected] = useState([]);
  const [formLoading, setFormLoading] = useState(false)
  const [media, setMedia] = useState(null)
  const [mediaPreview, setMediaPreview] = useState(null)
  const inputRef = useRef(null)
  const [resHolder, setResHolder] = useState('')
  const [highlighted, setHighlighted] = useState(false)


  const [teacher, setTeacher] = useState({
    email: "",
    password: "",
    name: "",
    teacher: ""
  })
  const [submitDisable, setSubmitDisable] = useState(true)


  const { teacherEmail, teacherName } = teacher;
  const { email, name } = stylist;



  // const handleChange = (e) => {
  //   const { name, value, files } = e.target;

  //   if (name === "media" && files.length) {
  //     setMedia(files[0])
  //     setMediaPreview(() => URL.createObjectURL(files[0]))
  //   } else {
  //     setStylist((prev) => ({ ...prev, [name]: value }))
  //   }

  // }


  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setFormLoading(true)
  //   let profilePicURL;
  //   if (media != null) {
  //     const formData = new FormData();
  //     formData.append("image", media, {
  //       headers: {
  //         "Content=Type": "multipart/form-data"
  //       }
  //     })
  //     const res = await axios.post(`${baseURL}/api/v1/uploads`, formData);
  //     profilePicURL = res.data.src;
  //   }
  //   if (media !== null && !profilePicURL) {
  //     setFormLoading(false)
  //     console.log("Error uploading Image");
  //   }
  //   try {
  //     const res = await axios.post(`${baseURL}/api/v1/signup/teacher`, {
  //       teacher, profilePicURL
  //     })
  //     setToken(res.data)
  //   } catch (error) {
  //     console.log("Eroro", error);
  //   }

  //   setFormLoading(false)
  // };



  return (
    <>
      <div className="slide" style={{ zIndex: !outOfFocus || isTeacher ? "5" : "-1" }}>
        {!isTeacher ?
          <div id="slideInModal" style={{ marginTop: '50px', marginRight: outOfFocus ? "3000px" : "0px" }}>
            <Header>Student Signup</Header>
            <div className="form-container">
              <Form
                loading={formLoading}
                onSubmit={handleSubmit}
              >
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
                    icon='envelope'
                    iconPosition='left'
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
                labelPosition='right'
                onClick={handleSubmit}
              />
            </footer>
          </div>

          :
          <div id="slideInModal" style={{ marginTop: "50px", marginRight: !isTeacher ? "3000px" : "0px" }}>
            <Header>Teacher</Header>
            <div className="form-container">
              <Form
                loading={formLoading}
                onSubmit={handleSubmit}
              >
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
                    icon='envelope'
                    iconPosition='left'
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
                onClick={() => setIsTeacher(false)}
                negative

              />
              <Button
                icon="signup"
                content="Signup"
                type="submit"
                color="green"
              />
            </footer>
          </div>
        }
      </div>
    </>
  )
}


export default SlideInMenu