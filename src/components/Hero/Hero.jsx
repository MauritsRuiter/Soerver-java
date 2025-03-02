import { Link } from 'react-router-dom';
import { SocialLinks } from './SocialLinks';

export function Hero() {
  return (
    <div className="relative min-h-screen">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-900">
        <div className="absolute right-0 top-0 w-1/2 h-full">
          <div className="absolute inset-0 bg-red-600/20 rounded-bl-[200px]" />
        </div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-32 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-gray-400 font-medium tracking-wider">WELKOM BIJ MIJN PORTFOLIO</h2>
              <h1 className="text-5xl md:text-6xl font-bold text-white space-y-2">
                <span className="block">Hoi, ik ben</span>
                <span className="block text-red-500">Daan van Bakel!</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-300">
                Student bij de ICT Campus
              </h2>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed">
            Hier laat ik je zien waar ik gepassioneerd over ben: ICT, technologie en alles wat ik tijdens mijn opleiding en projecten heb geleerd. In mijn portfolio vind je mijn werk, projecten, en ervaringen in de wereld van ICT. Daarnaast deel ik ook een beetje over mezelf en mijn hobby's, zoals gamen, tech-artikelen lezen en atletiek.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/skills"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-red-500 hover:bg-red-600 text-white font-medium transition-colors"
              >
                Lees meer over mij
              </Link>
              <SocialLinks />
            </div>

            <div className="text-gray-400 text-sm">
              Leerlingnummer: 576462
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent rounded-3xl transform rotate-6" />
            {/* Fallback image */}
            <div className="relative z-10 w-full h-[600px] bg-gray-800 rounded-3xl shadow-2xl flex items-center justify-center">
              <img src="./Profile-picture.png" alt="Profile-picture" className="relative z-10 w-full h-[600px] object-cover rounded-3xl shadow-2xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}