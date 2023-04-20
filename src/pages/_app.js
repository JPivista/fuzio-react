import '@/styles/globals.css'
import Footer from '../../shared/Footer'
import Navbar from '../../shared/Navbar'
import "../styles/globals.css";
import { Nav_New } from '../../shared/Nav_New';


export default function App({ Component, pageProps }) {
  return <>
    {/* <Navbar /> */}
    <Nav_New />
    <Component {...pageProps} />
    <Footer />
  </>
}
