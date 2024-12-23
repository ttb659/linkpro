import React, { useState } from "react";

const HomePage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="bg-gradient-to-b from-white to-purple-50 min-h-screen">
            {/* Navbar */}
            <header className="flex justify-between items-center p-4 shadow-md">
                <div className="flex items-center">
                    {/* Logo */}
                    <img src="log.png" alt="LinkPro Logo" className="w-10 h-10" />
                    <h1 className="text-2xl font-bold text-purple-600 ml-2">LinkPro</h1>
                </div>
                {/* Menu for Desktop */}
                <nav className="hidden md:flex gap-4">
                    <a href="#career-fair" className="text-gray-600 hover:text-purple-600">Career Fair</a>
                    <a href="#skill-tests" className="text-gray-600 hover:text-purple-600">Skill Tests</a>
                    <a href="#resume-builder" className="text-gray-600 hover:text-purple-600">Resume Builder</a>
                    <a href="#services" className="text-gray-600 hover:text-purple-600">Services</a>
                </nav>
                {/* Buttons for Desktop */}
                <div className="hidden md:flex gap-4">
                    <button className="bg-purple-600 text-white px-4 py-2 rounded-md">Resume Builder</button>
                    <button className="bg-purple-600 text-white px-4 py-2 rounded-md">Apply for Jobs</button>
                </div>
                {/* Hamburger Icon */}
                <button
                    className="md:hidden text-purple-600 focus:outline-none"
                    onClick={toggleMenu}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
            </header>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <nav className="md:hidden bg-white shadow-lg p-4">
                    <a href="#career-fair" className="block text-gray-600 hover:text-purple-600 py-2">
                        Career Fair
                    </a>
                    <a href="#skill-tests" className="block text-gray-600 hover:text-purple-600 py-2">
                        Skill Tests
                    </a>
                    <a href="#resume-builder" className="block text-gray-600 hover:text-purple-600 py-2">
                        Resume Builder
                    </a>
                    <a href="#services" className="block text-gray-600 hover:text-purple-600 py-2">
                        Services
                    </a>
                    <div className="flex flex-col gap-4 mt-4">
                        <button className="bg-purple-600 text-white px-4 py-2 rounded-md">
                            Resume Builder
                        </button>
                        <button className="bg-purple-600 text-white px-4 py-2 rounded-md">
                            Apply for Jobs
                        </button>
                    </div>
                </nav>
            )}

            {/* Hero Section */}
            <section
                className="flex flex-col md:flex-row items-center px-8 py-12"
                style={{
                    background: 'linear-gradient(101.41deg, rgba(197, 153, 229, 0.36) -33.13%, rgba(197, 153, 229, 0) 48.49%, rgba(226, 204, 242, 0.48) 125.81%)'
                }}
            >
                <div className="md text-center md:text-left">
                    <h2 className="text-5xl font-bold text-gray-800 leading-tight mb-4">
                        Trouvez votre <span className="text-purple-700">nouvel emploi</span> aujourd'hui
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Explorez des milliers d'emplois dans les domaines de l'informatique, <br />de l'ingénierie et de la technologie.
                    </p>
                    <div className="flex justify-center md:justify-start gap-4">
                        <button className="bg-purple-700 text-white px-6 py-3 rounded-md">Connexion</button>
                        <button className="bg-purple-700 text-white px-6 py-3 rounded-md">S'inscrire</button>
                    </div>
                    <br />
                </div>
                <div >
                    {/* Hero Image */}
                    <img src="hero.png" alt="Hero" />
                </div>
            </section>



            {/* Steps Section */}
            <section className="text-center py-12 bg-gradient-to-b from-purple-50 to-white">
                <h3 className="text-3xl font-bold text-gray-800 mb-8">Comment Ça Marche ?</h3>
                <div className="grid md:grid-cols-3 gap-8 px-8">
                    {/* Step 1 */}
                    <div className="flex flex-col items-center">
                        <img src="etape1.png" alt="Step 1" className="w-20 h-20 mb-4" />
                        <h4 className="text-xl font-bold text-purple-700">ÉTAPE 1: Créer un profil / un CV  puis connecter vous</h4>
                        <p className="text-gray-600">Avant de pouvoir consulter/proposer des offres d’emploi vous devez vous créer un compte préalablement</p>
                    </div>
                    {/* Step 2 */}
                    <div className="flex flex-col items-center">
                        <img src="etape2.png" alt="Step 2" className="w-20 h-20 mb-4" />
                        <h4 className="text-xl font-bold text-purple-700">ÉTAPE 2: Validation du profil
                        </h4>
                        <p className="text-gray-600">Après validation de votre profil vous recevez un mail de confirmation</p>
                    </div>
                    {/* Step 3 */}
                    <div className="flex flex-col items-center">
                        <img src="etape3.png" alt="Step 3" className="w-20 h-20 mb-4" />
                        <h4 className="text-xl font-bold text-purple-700">ÉTAPE 3: Consulter / publier des offres d’emploi
                        </h4>
                        <p className="text-gray-600">A ce niveau vous pouvez consulter des offres d’emploi si vous êtes postulants ou en proposer si vous êtes un recruteur.</p>
                    </div>
                </div>
            </section>

            {/* Partners Section */}
            <section className="bg-white py-12">
                <h3 className="text-center text-2xl font-bold text-gray-800 mb-6">
                    Nos Partenaires
                </h3>
                <div className="grid ">
                    <img src="partenaire.png" alt="Partner 2" className="mx-auto" />
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-customBlue text-white py-6 text-center">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div>
                        <h4 className="font-bold mb-2">LinkPro</h4>
                        <p>Faite nous confiance et vous aurez ce qu'il vous faut.</p>
                    </div>
                    <div>
                        <h4 className="font-bold mb-2">Contact</h4>
                        <p>Email: contact@linkpro.com</p>
                        <p>Téléphone: +212 600 000 000</p>
                    </div>
                    <div>
                        <h4 className="font-bold mb-2">Liens Utiles</h4>
                        <ul className="items-center">
                            <li><a href="#career-fair" className="hover:underline">Career Fair</a></li>
                            <li><a href="#skill-tests" className="hover:underline">Skill Tests</a></li>
                        </ul>
                    </div>
                    <div className="flex justify-center items-center ">
                        <div>
                            <h4 className="font-bold mb-2">Suivez-nous</h4>
                            <div className="flex align-middle gap-4 px-5">
                                <a href="#"><img src="/path/to/facebook-icon.png" alt="Facebook" className="w-6 h-6" /></a>
                                <a href="#"><img src="/path/to/twitter-icon.png" alt="Twitter" className="w-6 h-6" /></a>
                            </div>
                        </div>
                    </div>

                </div>
            </footer>
        </div>
    );
};

export default HomePage;
