import { Mail, MapPin, Linkedin } from 'lucide-react';

export function ContactInfo() {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700">
      <h2 className="text-2xl font-bold text-white mb-6">Contact Informatie</h2>
      
      <div className="space-y-6">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <Mail className="w-6 h-6 text-red-500" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-300">Email</p>
            <a 
              href="mailto:576462@edu.rocmn.nl" 
              className="text-red-500 hover:text-red-400 transition-colors"
            >
              576462@edu.rocmn.nl
            </a>
          </div>
        </div>

        <div className="flex items-center">
          <div className="flex-shrink-0">
            <MapPin className="w-6 h-6 text-red-500" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-300">Locatie</p>
            <p className="text-white">Noord-holland, Nederland</p>
          </div>
        </div>

        <div className="flex items-center">
          <div className="flex-shrink-0">
            <Linkedin className="w-6 h-6 text-red-500" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-300">LinkedIn</p>
            <a 
              href="https://www.linkedin.com/in/daan-van-bakel-7a3844328/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-400 transition-colors"
            >
              Daan van Bakel
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}