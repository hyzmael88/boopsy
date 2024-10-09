import { useEffect, useState } from "react";
import { client } from '@/sanity/lib/client';
import Image from "next/image";


const Categories = () => {
   
    const [fits, setFits] = useState([])

    useEffect(() => {
      const fetchFits = async () => {
      const data = await client.fetch(`*[_type == "fit"]{
        name,
        image{
          asset->{
            url
          }
        }

      }`);
      setFits(data);
    }
    fetchFits();
  }
  , []);

  console.log(fits)
  console.log(fits[0]?.image?.asset?.url)
  
    return (
      <section className="py-12">
        <h2 className="text-[20px] lg:text-[60px] font-anton uppercase text-center  mb-8">Fit</h2>
        <div className="flex gap-6 px-4 ">
          {fits.map((fit, index) => (
            <div key={index} className="relative group overflow-hidden cursor-pointer ">
              <Image 
              width={500}
              height={500}
              src={fit?.image?.asset?.url} alt={fit.name} className="w-[274px] h-[274px] object-cover group-hover:scale-110 transition-transform duration-300" />
              
            <p className="text-center font-gabarito text-[20px] my-[25px] ">{fit.name}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Categories;
  