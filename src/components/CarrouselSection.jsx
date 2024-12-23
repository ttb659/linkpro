import { useState } from "react";

function CarouselSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Les données des slides
  const slides = [
    {
      title: "Découvrir maintenant",
      text: "Vous êtes à la recherche d'un stage enrichissant ou d'un emploi qui correspond à vos aspirations ? Nous sommes là pour vous accompagner !",
    },
    {
      title: "Recruter les meilleurs talents",
      text: "  Êtes-vous à la recherche de nouveaux talents ? Trouvez les profils qui correspondent à vos attentes grace a notre plateforme !",
    },
  ];

  // Fonction pour changer de slide
  const changeSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="md:flex w-[45%] bg-custom-gradient text-white flex-col justify-center items-center p-12 hidden">
      {/* Image */}
      <img
        src="./../public/job_research_login.png"
        alt="Job illustration"
        className="mb-6 w-[450px] h-auto"
      />

      {/* Texte dynamique */}
      <h1 className="text-3xl font-bold mb-4">{slides[currentSlide].title}</h1>
      <p className="text-center text-base px-8 font-medium">
        {slides[currentSlide].text}
      </p>

      {/* Boutons de navigation */}
      <div className="mt-6 flex items-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => changeSlide(index)}
            className={`w-2 h-2 rounded-full ${
              currentSlide === index ? "bg-white" : "bg-gray-500"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default CarouselSection;
