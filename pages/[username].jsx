import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { baseURL } from '../pages/util/baseURL'
import { parseCookies } from "nookies";
import { Grid, Placeholder } from "semantic-ui-react";
import Cookies from "js-cookie";


const ProfilePage = ({
  stylist
}) => {
  // const router = useRouter();
  // const { id } = router.query;
  // console.log(`id from router.query ${id}`);
  // const ownAccount = stylist._id === user._id;
  // console.log(`own account ? ${ownAccount}`)
  console.log(`stylist through params ${stylist}`)

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
    <></>
  );
};

ProfilePage.getInitialProps = async (ctx) => {
  try {
    const { id } = ctx.query;
    console.log(ctx.query);
    const { token } = parseCookies(ctx);
    const res = await axios.get(`${baseURL}/api/v1/stylist/profile/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    //!dont know how to make this work for teachers, i guess i could do a little check if req is empty then i just do an axios call to the stylist routes instead
    //!or we can make the axios call do both searching for a stylists and a teachers profile at the same time
    //!we could refactor it so that instead of two controllers searching for either a stylist or a teacher's profile- 
    //!we could have one controller that can handle both
    console.log(`res.data in the getinitialprops`);
    // const { profile, followersLength, followingLength } = res.data;
    // return { profile, followersLength, followingLength };
    const {stylist} = res.data;
    console.log(`initial props ${stylist}`);
    return {stylist}
  } catch (error) {
    return { errorLoading: true };
  }
};


export default ProfilePage;