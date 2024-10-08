import { Fragment, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";


import Image from "next/image";

import {
  FaSuitcase,
  FaReceipt,
  FaDollarSign,
  FaBars,
  FaRegCalendarAlt,
  FaGlassCheers,
  FaStar
} from "react-icons/fa";
import Ventas from "./Ventas";
import { AppContext } from "@/context/AppContext";
import Productos from "./Productos";

const Dashboard = () => {
  const [active, setActive] = useState(false);
  const { getVentas } = useContext(AppContext);



  const [user, setUser] = useState({
    email: "",
    name: "",
  });
  const router = useRouter();
  const { component } = router.query;

  const getProfile = async () => {
    const response = await axios.get("/api/auth/profile");
    setUser(response.data);
  };
  useEffect(() => {
    getProfile();
  }, []);

  const logout = async () => {
    try {
      const response = await axios.post("/api/auth/logout");
      router.push("/Login");
    } catch (error) {
      console.error(error);
      router.push("/Login");
    }
  };

  const [activeComponent, setActiveComponent] = useState("Ventas");

  const renderActiveComponent = () => {
    switch (activeComponent) {
     
        case "Ventas":
          return <Ventas/>
        case "Productos":
          return <Productos/>
      default:
        return <Ventas />;
    }
  };



  const handleSidebarClick = (component) => {
    setActiveComponent(component);
    localStorage.setItem("activeComponent", component);
    router.push(`/Dashboard/${component}`);
  };

  useEffect(() => {
    getVentas();
  }, []);

  useEffect(() => {
    const storedActiveComponent = localStorage.getItem("activeComponent");
    if (storedActiveComponent) {
      setActiveComponent(storedActiveComponent);
    } else {
      setActiveComponent("Ventas");
    }
  }, []);

  return (
    
    <Fragment>
      <div className="xl:hidden flex flex-row justify-between   w-full h-[100px] items-center px-8     ">
      <div>
      <Image
        src='/assets/logonav.png' width={100} height={100} alt='logo' />
      </div> 
      <div>

      {
        !active ?
        
        <Image
        width={30} height={30}
        src="/assets/icons/menuMob.svg"
        alt="menu movil"
        className={!active ? "flex text-5xl   cursor-pointer text-[#d3cbc0] z-20" : "hidden"}
        onClick={()=>setActive(true)}
        />
        :
        <Image src="/assets/icons/navbar/close.svg" width={30} height={30}
        alt="close menu movil"
        onClick={() => setActive(false)}
        className={active ? "flex text-5xl  cursor-pointer text-[#d3cbc0] z-20" : "hidden"}
        />
      }
      </div>
      </div>
      <div
        className={
          active
          ? "w-full h-full flex flex-col   bg-white "
          : "hidden"
        }
        >
        
        
        <div>
          <ul className="flex flex-col text-center gap-3 text-xl font-Geometrica">
           
            
            <li
              className="text-[15px] font-medium hover:text-[#E39C9D] hover:scale-125 transition-all duration-300"
              onClick={() => {
                setActive(false);
                handleSidebarClick("Ventas");
              }}
            >
              <span>
                <FaReceipt className="text-2xl text-white" />
              </span>{" "}
              Ventas
            </li>
            <li>
           <a
            href="https://auroelia.com/studio/structure/producto"
            target="_blank"
            rel="noopener noreferrer"
             className="text-[15px] font-medium hover:text-[#E39C9D] hover:scale-125 transition-all duration-300"
             onClick={() => {
               setActive(false)
               
             }}
            > 
              <span
              >
                <FaReceipt className="text-2xl text-white" />
              </span>{" "}
              Productos
            </a>
            </li>
          
           
            <li
              className="text-[15px] font-medium hover:text-[#E39C9D] hover:scale-125 transition-all duration-300"
              onClick={() => {
                setActive(false);
                logout()
              }}
            >
              <span>
                <FaReceipt className="text-2xl text-white" />
              </span>{" "}
               Cerrar Sesión
            </li>
          </ul>
        </div>
      </div>
    <div className="w-full h-full  flex flex-row ">
      <div className="hidden w-1/4 min-h-[1200px] h-screen xl:flex flex-col bg-black text-white">
        <div className="w-full h-full flex flex-row justify-center ">
          <div className="w-[90%] flex flex-col items-center  justify-between gap-[85px]">
            
            <div className="h-full flex flex-col items-center justify-center gap-[0px]">
              <Image
              width={216}
              height={46}
              src="/assets/dashboard/logoDashboard.svg"
              alt="logo dashboard"
              className="w-[216px] h-[46px] object-contain"
              />

              
              <div className="flex flex-col items-center
              ">

                <p className="flex flex-row gap-4 mt-9 items-center cursor-pointer ">
                  
                  <span
                    className="text-[26px]  font-inter tracking-[2px] "
                    onClick={() => handleSidebarClick("Ventas")}
                  >
                    Ventas
                  </span>
                </p>
                <p className="flex flex-row gap-4 mt-9 items-center cursor-pointer ">
                  
                  
      <a href="https://auroelia.com/studio/structure/producto"
            target="_blank"
            rel="noopener noreferrer" className="text-[26px]  font-inter tracking-[2px]"
      >
        Productos
      </a>
                </p>
                
                
              </div>
            </div>
            <div>
              <p
                className="flex flex-row gap-4 mb-8 items-center cursor-pointer hover:text-[#d3cbc0]"
                onClick={() => logout()}
              >
                
                <span className="text-xl  font-inter tracking-[2px]">
                  Cerrar Sesión
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      

      
      <div className={" h-full w-full xl:w-3/4  flex flex-col justify-center mt-8 mb-8 lg:mt-0 lg:mb-0 "}>
        {renderActiveComponent()}
      </div>
    </div>
    </Fragment>
  );
};

export default Dashboard;
