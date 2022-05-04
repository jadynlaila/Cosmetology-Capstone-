// import sass from "sass"
// import '../styles/normalize.css'
import '../styles/main.css'
import "semantic-ui-css/semantic.min.css"
import { destroyCookie, parseCookies } from 'nookies'
import { redirectUser } from './util/authUser'
import axios from 'axios'


function MyApp({ Component, pageProps }) {
  // return <Component user={pageProps.user} {...pageProps} />
  return <Component />
}


export default MyApp
