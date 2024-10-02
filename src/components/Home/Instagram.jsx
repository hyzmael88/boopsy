import { useEffect } from 'react';

const Instagram = () => {
  const images = ["/path-to-insta1.jpg", "/path-to-insta2.jpg", "/path-to-insta3.jpg"];

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-12 overflow-hidden">
      <h2 className="text-[20px] text-center font-anton uppercase ">Síguenos en Instagram</h2>
      <p className='text-center text-[10px]'>Nuestros últimos posts</p>
      
      <div className="elfsight-app-45949c41-40d7-4fb9-aa78-7da74d0ba19d mt-8" data-elfsight-app-lazy></div>
    </section>
  );
};

export default Instagram;