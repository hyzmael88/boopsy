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
      <h2 className="text-4xl text-center font-bold mb-8">Síguenos en Instagram</h2>
      
      <div className="elfsight-app-45949c41-40d7-4fb9-aa78-7da74d0ba19d" data-elfsight-app-lazy></div>
    </section>
  );
};

export default Instagram;