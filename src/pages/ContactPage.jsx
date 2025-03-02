import { ContactForm } from '../components/Contact/ContactForm';
import { ContactInfo } from '../components/Contact/ContactInfo';

export function ContactPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-white">Contact</h1>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}