import Banner from "@/components/Home/Banner";
import Banner2 from "@/components/Home/Banner2";
import Categories from "@/components/Home/Categories";
import Hero from "@/components/Home/Hero";
import Instagram from "@/components/Home/Instagram";
import Premium from "@/components/Home/Premium";
import Subscribe from "@/components/Home/Subscribe";


export default function Home() {
  return (
    <div className="bg-white max-w-[1440px] min-w-sm mx-auto">
      
      <Hero />
      <Categories />
      <Banner />
      <Premium/>
      <Instagram />
      <Subscribe />
      <Banner2/>
    </div>
  );
}
