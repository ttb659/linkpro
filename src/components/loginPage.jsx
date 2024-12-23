import CarouselSection from "./CarrouselSection";

const LoginPage = ({ onLogin }) => {

  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    // Ici, on pourrait vérifier l'email et le mot de passe avant de connecter
    onLogin(); // Appelle la fonction pour afficher le tableau de bord
  };

  
  return (
    <div className="flex h-screen flex-col md:flex-row border">
      
      <CarouselSection/>

      {/* Right Section */}
      <div className="flex flex-col justify-center items-center w-full md:w-[55%] bg-white relative p-6 ">
        {/* Logo Section */}
        <div className="flex absolute md:top-4 md:right-4 top-2 right-6">
          <img
            src="./../public/logo-link.png"
            alt="logo-linkPro"
            className="mr-1 w-8"
          />
          <span className="font-medium text-xl text-gray-600">LinkPro</span>
        </div>

        {/* Image for Mobile */}
        <div className="md:hidden flex justify-center items-center mb-4 mt-14">
          <img
            src="./../public/job_research_login.png"
            alt="Job illustration"
            className="w-[250px] h-auto"
          />
        </div>

        <div className="w-full p-6 md:w-2/3">
          {/* Title and Description */}
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-2">
            Bon retour sur LinkPro
          </h2>
          <p className="text-center text-gray-600 mb-6 font-medium  text-sm">
            Entrez vos identifiants pour accéder à votre compte
          </p>

          {/* Login Form */}
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-left font-medium text-sm ">
                Adresse Mail
              </label>
              <input
                type="email"
                id="email"
                placeholder="email"
                className="w-full px-2 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-left font-medium text-sm">
                Mot de passe
              </label>
              <input
                type="password"
                id="password"
                placeholder="mot de passe"
                className="w-full px-2 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <a
                href="#"
                className="text-blue-500 text-sm float-right mt-1 hover:underline"
              >
                Mot de passe oublié ?
              </a>
            </div>

            <div className="flex items-center mb-6">
              <input type="checkbox" id="remember-me" className="mr-2" />
              <label htmlFor="remember-me" className="text-gray-700 text-sm">
                Se souvenir de moi
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Se connecter
            </button>
          </form>

          {/* Social Login Buttons */}
          <div className="flex flex-col md:flex-row md:space-y-0 md:space-x-2 mt-8 space-y-4 text-sm">
            <button className="w-full md:w-auto flex-1 bg-gray-100 py-2 rounded-lg hover:bg-gray-200 transition duration-300 flex items-center justify-center">
              <img
                src="./../public/google-logo.png"
                alt="Google"
                className="mr-1 w-5"
              />
              Connectez-vous avec Google
            </button>
            <button className="w-full md:w-auto flex-1 bg-gray-100 py-2 rounded-lg hover:bg-gray-200 transition duration-300 flex items-center justify-center">
              <img
                src="./../public/apple-logo.png"
                alt="Apple"
                className="mr-2 w-5"
              />
              Connectez-vous avec Apple
            </button>
          </div>

          {/* Sign-Up Link */}
          <p className="text-center text-gray-600 mt-6 text-medium">
            Vous n&apos;avez pas de compte ?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Inscrivez-vous
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
