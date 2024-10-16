import Banner from "@/components/Home/Banner";
import Banner2 from "@/components/Home/Banner2";
import Hero from "@/components/Home/Hero";
import Instagram from "@/components/Home/Instagram";
import Premium from "@/components/Home/Premium";
import Subscribe from "@/components/Home/Subscribe";
import Fit from "@/components/Home/Fit";
import Head from "next/head";


export default function Home() {
  return (
<>
    <Head>
        <meta name="theme-color" content="#00000"/>
        <title>Selvedge</title>
        <meta name="description" content="En Selvedge, reunimos las marcas de ropa más innovadoras y urbanas en un solo lugar. Somos el destino para los amantes de la moda contemporánea que buscan prendas exclusivas y actuales. Cada colección refleja las últimas tendencias del estilo urbano, creando un espacio donde la moda y la individualidad se encuentran y redefinen lo moderno y lo auténtico." />
        <meta name="keywords" content="Moda, Urbano, Estilo, Tendencias, Ropa, Vanguardia, Diseño, Exclusivo, Moderno, Contemporáneo, Chic, Actual, Casual, Juvenil, Individualidad, fashion, pantalones, accesorios, Camisetas, Pantalones, Chaquetas, Sudaderas, Jeans, Vestidos, Faldas, Blusas, Abrigos, Accesorios, Tops, Jerseys, Leggings, Shorts, Camisas, cargo, joggers, skinny, shorts" />
        <meta property="og:title" content="Selvedge" />
        <meta property="og:description" content="En Selvedge, reunimos las marcas de ropa más innovadoras y urbanas en un solo lugar. Somos el destino para los amantes de la moda contemporánea que buscan prendas exclusivas y actuales. Cada colección refleja las últimas tendencias del estilo urbano, creando un espacio donde la moda y la individualidad se encuentran y redefinen lo moderno y lo auténtico." />
        <meta property="og:image" content="/ogimage.jpg" />
        <meta property="og:url" content="https://www.selvedgeshop.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/ogimage.jpg" />
        <link rel="icon" href="favicon.ico" />
     
    </Head>
    <div className="bg-white max-w-[1440px] min-w-sm mx-auto">
      
      <Hero />
      <Fit />
      <Banner />
      <Premium/>
      <Instagram />
      <Subscribe />
      <Banner2/>
    </div>
    </>
  );
}
