import Footer from "@/components/Footer";
import Banner from "@/components/Home/Banner";
import Categories from "@/components/Home/Categories";
import Header from "@/components/Home/Header";
import Hero from "@/components/Home/Hero";
import Instagram from "@/components/Home/Instagram";
import Premium from "@/components/Home/Premium";
import Subscribe from "@/components/Home/Subscribe";


export default function Home() {
  return (
    <div className="bg-white">
      
      <Hero />
      <Categories />
      <Banner />
      <Premium/>
      <Instagram />
      <Subscribe />
    </div>
  );
}
