import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SocialMedia from "@/components/SocialMedia";
import Worldwide from "@/components/Envio";
import { Anton } from '@next/font/google';
import { AppProvider } from "@/context/AppContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import "@/styles/globals.css";
import Image from "next/image";

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
     <a href="https://wa.me/+525540252669?text=Hola!%20me%20podrías%20dar%20mas%20información?" 
        className='animate-pulse transition-all duration-700 hover:animate-none hover:scale-110 '
          style={{position: 'fixed', bottom: '25px', right: '25px', padding: '10px', backgroundColor: '#25D366', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '80px', height: '80px', textDecoration: 'none'}}
          >
          <Image
          src="/assets/whatsapp.svg" alt="WhatsApp" width={100} height={100}
          
          style={{width: '48px', height: '48px'}}/>
        </a>
    </div>
    </AppProvider>
  )
}
