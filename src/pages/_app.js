import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SocialMedia from "@/components/SocialMedia";
import Worldwide from "@/components/Envio";
import { Anton } from '@next/font/google';
import { AppProvider } from "@/context/AppContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import "@/styles/globals.css";

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
});


export default function App({ Component, pageProps }) {
  return(
    <AppProvider>
    <div className="anton.className">
    <Worldwide/>
    <SocialMedia/>
    <Navbar />
     <Component {...pageProps} />
     <ToastContainer />
     <Footer />
    </div>
    </AppProvider>
  )
}
