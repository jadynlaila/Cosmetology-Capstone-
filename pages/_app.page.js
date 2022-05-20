// import sass from "sass"
// import '../styles/normalize.css'
import '../styles/main.css'
import "semantic-ui-css/semantic.min.css"
import { destroyCookie, parseCookies } from 'nookies'
import { redirectUser } from './util/authUser'
import axios from 'axios'
import { baseURL } from './util/baseURL'



function MyApp({ Component, pageProps }) {
  // return <Component user={pageProps.user} {...pageProps} />
  return <Component {...pageProps} />
}


MyApp.getInitialProps = async ({ ctx, Component }) => {
  const { token } = parseCookies(ctx);
  let pageProps = {};

  const protectedRoutes = ["/[username]"];

  const isProtectedRoute = protectedRoutes.includes(ctx.pathname);

  if (!token) {
    isProtectedRoute && redirectUser(ctx, "/login");
    //! double check that this actually redirects them to login
  } else {
    if (Component.getInitialProps) {
      console.log(Component)
      pageProps = await Component.getInitialProps(ctx);
    }
    try {
      const res = await axios.get(`${baseURL}/api/v1/auth`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const userId  = res.data._id;
      console.log(`appjs user ${res.data._id}`)
      //when theres no {} around stylist in getprofilestylist, res.data.name works 5/16
      //!is this actually being passed from res.data

      //before : if (user) !isProtectedRoute && redirectUser(ctx, "/");
      //after:
      // if (userId) !isProtectedRoute && redirectUser(ctx, `/${userId}`);
      //!this is gonna need to redirect them to the profile page instead
      // pageProps.userId = userId;
    } catch (error) {
      console.log(error);
      destroyCookie(ctx, "token");
      redirectUser(ctx, "/login");
    }
  }
  return { pageProps };
};


export default MyApp
