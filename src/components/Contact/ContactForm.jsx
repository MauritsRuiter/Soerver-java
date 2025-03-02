import { useState } from 'react';
import { useForm } from './useForm';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { TextArea } from '../ui/TextArea';
import emailjs from '@emailjs/browser';
import { contactContent } from '../../content/contact';

export function ContactForm() {
  const { values, handleChange, handleSubmit, errors, isSubmitting } = useForm({
    initialValues: { name: '', email: '', message: '' },
    onSubmit: async (values) => {
      try {
        await emailjs.send(
          contactContent.emailjs.serviceId,
          contactContent.emailjs.templateId,
          {
            from_name: values.name,
            from_email: values.email,
            message: values.message,
            to_email: contactContent.email
          },
          contactContent.emailjs.publicKey
        );
        setSubmitStatus('success');
      } catch (error) {
        console.error('Email sending failed:', error);
        setSubmitStatus('error');
      }
    },
    validate: (values) => {
      const errors = {};
      if (!values.name) errors.name = 'Naam is verplicht';
      if (!values.email) errors.email = 'Email is verplicht';
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Ongeldig email adres';
      }
      if (!values.message) errors.message = 'Bericht is verplicht';
      return errors;
    },
  });

  const [submitStatus, setSubmitStatus] = useState('idle');

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700">
      <h2 className="text-2xl font-bold text-white mb-6">Stuur een Bericht</h2>

      {submitStatus === 'success' ? (
        <div className="text-green-400 p-4 bg-green-900/20 rounded-lg">
          Bedankt voor uw bericht! Ik neem zo spoedig mogelijk contact met u op.
        </div>
      ) : submitStatus === 'error' ? (
        <div className="text-red-400 p-4 bg-red-900/20 rounded-lg">
          Er is iets misgegaan bij het versturen van uw bericht. Probeer het later opnieuw.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input
              label="Naam"
              name="name"
              value={values.name}
              onChange={handleChange}
              error={errors.name}
              disabled={isSubmitting}
            />
          </div>

          <div>
            <Input
              label="Email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              error={errors.email}
              disabled={isSubmitting}
            />
          </div>

          <div>
            <TextArea
              label="Bericht"
              name="message"
              value={values.message}
              onChange={handleChange}
              error={errors.message}
              disabled={isSubmitting}
              rows={4}
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            isLoading={isSubmitting}
          >
            Verstuur Bericht
          </Button>
        </form>
      )}
    </div>
  );
}