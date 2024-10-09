import Banner from "@/components/Home/Banner";
import Banner2 from "@/components/Home/Banner2";
import Hero from "@/components/Home/Hero";
import Instagram from "@/components/Home/Instagram";
import Premium from "@/components/Home/Premium";
import Subscribe from "@/components/Home/Subscribe";
import Fit from "@/components/Home/Fit";


export default function Home() {
  return (
    <div className="bg-white max-w-[1440px] min-w-sm mx-auto">
      
      <Hero />
      <Fit />
      <Banner />
      <Premium/>
      <Instagram />
      <Subscribe />
      <Banner2/>
    </div>
  );
}
