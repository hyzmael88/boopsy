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
      <div className="flex overflow-x-scroll snap-x snap-mandatory px-4 space-x-4">
        {images.map((image, index) => (
          <div key={index} className="relative snap-start w-64 h-64 md:w-80 md:h-80">
            <img src={image} alt={`Instagram ${index + 1}`} className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300" />
          </div>
        ))}
      </div>
      <div className="elfsight-app-45949c41-40d7-4fb9-aa78-7da74d0ba19d" data-elfsight-app-lazy></div>
    </section>
  );
};

export default Instagram;