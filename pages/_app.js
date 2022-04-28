// import sass from "sass"
// import '../styles/normalize.css'
import '../styles/main.css'
import "semantic-ui-css/semantic.min.css"
import { destroyCookie, parseCookies } from 'nookies'
import { redirectUser } from './util/authUser'
import axios from 'axios'


function MyApp({ Component, pageProps }) {
  return <Component user={pageProps.user} {...pageProps} />

  
}

MyApp.getInitialProps = async({ctx, Component}) => {
  const {token} = parseCookies(ctx)

  let pageProps = {};

  if(Component.getInitialProps){
    pageProps = await Component.pageProps(ctx)
  }

  const protectedRoutes = ['/[user]'];
  const isProtectedRoute = protectedRoutes.includes(ctx.pathname)

  if(!token){
    isProtectedRoute && redirectUser(ctx, '/signup/login')
  } else {
    try {
      const res = await axios.get()
    } catch (error) {
      destroyCookie(ctx, "token")
      redirectUser(ctx, "/signup/login")
    }
  }
  return {pageProps}
}

export default MyApp
