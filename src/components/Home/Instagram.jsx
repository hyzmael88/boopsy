const Instagram = () => {
  const images = ["/path-to-insta1.jpg", "/path-to-insta2.jpg", "/path-to-insta3.jpg"];
  return (
    <section className="py-12">
      <h2 className="text-4xl text-center font-bold mb-8">Síguenos en Instagram</h2>
      <div className="flex overflow-x-scroll snap-x snap-mandatory px-4 space-x-4">
        {images.map((image, index) => (
          <div key={index} className="relative snap-start w-64 h-64 md:w-80 md:h-80">
            <img src={image} alt={`Instagram ${index + 1}`} className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Instagram;
