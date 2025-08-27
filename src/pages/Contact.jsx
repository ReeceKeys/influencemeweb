// src/pages/Contact.jsx
import ContactForm from '../components/ContactForm.jsx';

export default function Contact() {
  return (
    <div className="p-4 sm:p-6 md:p-8 text-center">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <ContactForm />
    </div>
  );
}
