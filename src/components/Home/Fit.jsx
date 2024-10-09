import { useEffect, useState } from "react";
import { client } from '@/sanity/lib/client';
import Image from "next/image";
import Link from "next/link";


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
        <div className="flex lg:justify-center gap-6 px-4 overflow-auto w-full  ">
          {fits.slice(0,4).map((fit, index) => (
            <div key={index} className="relative group overflow-hidden cursor-pointer flex-shrink-0"
            onClick={() => router.push(`/Shop/${fit.name}`)}
            >
              <Image 
              width={500}
              height={500}
              src={fit?.image?.asset?.url} alt={fit.name} className="w-[274px] h-[274px] object-cover group-hover:scale-110 transition-transform duration-300" />
              
            <p className="border-[0.5px] border-black/10 text-center font-gabarito text-[20px] py-[25px] ">{fit.name}</p>
            </div>
          ))}
        </div>
        <div className='w-full h-[27px]  text-[16px] flex justify-center lg:justify-end mt-10'>
                <Link href='/Shop' className='flex gap-2 font-gabarito'>
                Ver todas <Image src='/assets/iconos/flecha.svg' width={17} height={17} alt='iconoflecha' />
                </Link>
              </div>
      </section>
    );
  };
  
  export default Categories;
  