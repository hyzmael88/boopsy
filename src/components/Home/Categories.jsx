import { useEffect, useState } from "react";
import { client } from '@/sanity/lib/client';
import Image from "next/image";


const Categories = () => {
   
    const [categories, setCategories] = useState([])

    useEffect(() => {
      const fetchCategories = async () => {
      const data = await client.fetch(`*[_type == "fit"]{
        name,
        image{
          asset->{
            url
          }
        }

      }`);
      setCategories(data);
    }
    fetchCategories();
  }
  , []);

  console.log(categories)
  console.log(categories[0]?.image?.asset?.url)
  
    return (
      <section className="py-12">
        <h2 className="text-[20px] lg:text-[60px] font-anton uppercase text-center  mb-8">Categorías</h2>
        <div className="flex gap-6 px-4 ">
          {categories.map((category, index) => (
            <div key={index} className="relative group overflow-hidden cursor-pointer ">
              <Image 
              width={500}
              height={500}
              src={category?.image?.asset?.url} alt={category.name} className="w-[274px] h-[274px] object-cover group-hover:scale-110 transition-transform duration-300" />
              
            <p className="text-center font-gabarito text-[20px] my-[25px] ">{category.name}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Categories;
  