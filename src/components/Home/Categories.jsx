const Categories = () => {
    const categories = [
      { title: "Skinny Jeans", imageUrl: "/path-to-image1.jpg" },
      { title: "Wide Leg Jeans", imageUrl: "/path-to-image2.jpg" },
      { title: "Cropped Jeans", imageUrl: "/path-to-image3.jpg" },
      { title: "Cargo Jeans", imageUrl: "/path-to-image4.jpg" },
    ];
  
    return (
      <section className="py-12">
        <h2 className="text-[60px] font-anton uppercase text-center  mb-8">Categorías</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
          {categories.map((category, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg">
              <img src={category.imageUrl} alt={category.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-60 transition-all flex items-center justify-center text-white">
                <span className="text-lg">{category.title}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Categories;
  