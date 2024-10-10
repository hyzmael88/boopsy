import { AppContext } from '@/context/AppContext'
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Head from "next/head";
import Link from 'next/link';

function Login() {
  const { loginUser } = useContext(AppContext);

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });


  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/auth/login", credentials);
      if (response.status === 200) {
        router.push("/Dashboard");
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 401) {
          setError("El correo electrónico no existe");
        } else if (error.response.status === 402) {
          setError("Contraseña incorrecta");
        } else {
          setError("Error al iniciar sesión. Por favor, intenta nuevamente más tarde.");
        }
      } else {
        setError("Error al conectarse al servidor. Por favor, verifica tu conexión.");
      }
    }
  };

    const fecha = new Date().getFullYear();

  return (
    <div className="w-full h-full lg:h-[1000px] flex flex-row justify-center ">
       <Head>
 <title>Selvedge</title>
 </Head>

      
      
      <div className="w-full h-full flex flex-col justify-start mt-20 items-center  ">
      <div className=" w-[90%] lg:w-[50%] h-[50vh] lg:h-[50%] bg-white  rounded-xl mt-10 xl:mb-[20px] 2xl:mb-[100px] z-10 ">
        <div className="h-full w-full flex flex-col  items-center text-center">
          
          <Image
          width={271}
          height={43}
          src='/assets/Logo.svg' alt='logo' className='w-[271px] h-[43px] object-contain' />
          
          <form
            className="w-[80%] flex flex-col md:items-center text-left mt-8"
            onSubmit={handleSubmit}
          >
            <label
              htmlFor="email"
              className=" font-anton text-[16px] lg:text-sm mb-1 text-center"
            >
              E-MAIL
            </label>
            <input
              type="email"
              className="border-2 border-black bg-white/70 md:w-3/4 rounded-[13px] pl-4  "
              name="email"
              id="email"
              onChange={handleChange}
            />
            <label
              htmlFor="password"
              className="font-anton text-[16px] lg:text-sm mb-1 text-center mt-2"
            >
              PASSWORD
            </label>
            <input
              type="password"
              className="border-2 border-black bg-white/70 md:w-3/4 rounded-[13px] pl-4"
              id="password"
              name="password"
              onChange={handleChange}
            />
            <div className="flex flex-col justify-center items-center md:w-3/4">
            {error ? (
                  <div className="col-span-2 w-full flex flex-row justify-center mt-4 text-red-500 font-Geometrica uppercase">
                    <p>{error}</p>
                  </div>
                ) : null}
              <button className="bg-black text-white  mt-4 mb-4 w-full  h-[27px]  text-[16px] uppercase font-anton rounded-[15px]">
                Ingresar
              </button>
              <div className='w-full h-[27px]  text-[16px] flex justify-end'>
                <Link href='/' className='flex gap-2 font-gabarito'>
                Volver a Inicio <Image src='/assets/iconos/flecha.svg' width={17} height={17} alt='iconoflecha' />
                </Link>
              </div>
              <div className='w-full h-[1px] bg-black mt-4'/>
              <div className='flex flex-col w-full text-center text-[#B4B4B4] font-gabarito mt-4'>
                <p className='text-[12px]'>Selvedge - México {fecha}</p>
                <p className='text-[8px]'>Sitio desarrollado por <a href="https://www.jaizmora.com"  target="_blank" className='underline cursor-pointer'
                
                >
                Jaizmora Digital Media</a> </p>
              </div>
              
            </div>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
