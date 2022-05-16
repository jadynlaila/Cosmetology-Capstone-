import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { baseURL } from '../pages/util/baseURL'
import { parseCookies } from "nookies";
import Navbar from "../components/layout/Navbar";
import StudentProfile from "../components/profile/StudentProfile";
import { Grid, Placeholder } from "semantic-ui-react";
import Cookies from "js-cookie";


const ProfilePage = (
  pageProps
) => {
  // const router = useRouter();
  // const { id } = router.query;
  // console.log(`id from router.query ${id}`);
  // const ownAccount = stylist._id === user._id;
  // console.log(`own account ? ${ownAccount}`)
  console.log(pageProps)
  const {user} = pageProps;

  const [loading, setLoading] = useState(false);
  
  // useEffect(() => {
  //   const getPosts = async () => {
  //     setLoading(true);
  //     try {
  //       const res = await axios.get(
  //         `${baseURL}/api/v1/profile/posts/${username}`,
  //         {
  //           headers: { Authorization: `Bearer ${Cookies.get("token")}` },
  //         }
  //       );
  //       setPosts(res.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //     setLoading(false);
  //   };
  //   getPosts();
  // }, [router.query.username]);

  // if(!profile) return null;
  //! gonna use this not to return null but maybe to tell them to login or something

  return (
    <>
      <Navbar/>
      <div className="profile">
          <StudentProfile user={user} />
          //!if user.password exists then display the teacherprofile instead
          {/* If you want to remove that client profile thing you can just comment that out in the client profile compnent, trying\ to make it as a popup when you click it */}
          {/* <TeacherProfile /> */}
        
          </div>
    </>
  );
};

ProfilePage.getInitialProps = async (ctx) => {
  try {
    const { username: id } = ctx.query;
    console.log("WAAAAAAAAAAAAH", id);
    const { token } = parseCookies(ctx);
    console.log(token);
    const res = await axios.get(`${baseURL}/api/v1/stylist/profile/?id=${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    //!dont know how to make this work for teachers, i guess i could do a little check if req is empty then i just do an axios call to the stylist routes instead
    //!or we can make the axios call do both searching for a stylists and a teachers profile at the same time
    //!we could refactor it so that instead of two controllers searching for either a stylist or a teacher's profile- 
    //!we could have one controller that can handle both
    // const { profile, followersLength, followingLength } = res.data;
    // return { profile, followersLength, followingLength };
   
    console.log("data return:", res.data.stylist);
    const user = res.data.stylist
    console.log(`initial props ${user}`, user);
    return {user}
  } catch (error) {
    return { errorLoading: true };
  }
};


export default ProfilePage;
