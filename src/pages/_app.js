import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SocialMedia from "@/components/SocialMedia";
import Worldwide from "@/components/Envio";
import { Anton } from '@next/font/google';

import "@/styles/globals.css";

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
});


export default function App({ Component, pageProps }) {
  return(
    <div className="anton.className">
    <Worldwide/>
    <SocialMedia/>
    <Navbar />
     <Component {...pageProps} />
     <Footer />
    </div>
  )
}
