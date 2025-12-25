import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  // Validate form
  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email || !formData.email.includes('@')) newErrors.email = 'Valid email required';
    if (!formData.subject) newErrors.subject = 'Subject is required';
    if (!formData.message || formData.message.length < 10) newErrors.message = 'Message must be at least 10 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 max-w-4xl mx-auto p-4 w-full">
        <h1 className="text-2xl font-bold mb-4">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div>
            <h2 className="font-bold mb-4">Get in Touch</h2>
            <p className="mb-4">Have questions? We'd love to hear from you!</p>
            
            <div className="space-y-4">
              <div>
                <p className="font-medium">📍 Address</p>
                <p className="text-muted-foreground">123 Main Street, City, State 12345</p>
              </div>
              <div>
                <p className="font-medium">📞 Phone</p>
                <p className="text-muted-foreground">(123) 456-7890</p>
              </div>
              <div>
                <p className="font-medium">✉️ Email</p>
                <p className="text-muted-foreground">info@hotel.com</p>
              </div>
              <div>
                <p className="font-medium">🕐 Hours</p>
                <p className="text-muted-foreground">24/7 Front Desk</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            {isSubmitted ? (
              <div className="border rounded p-4 text-center">
                <h2 className="text-xl font-bold text-green-600 mb-2">✓ Message Sent!</h2>
                <p>Thank you for contacting us. We'll get back to you soon.</p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="bg-primary text-primary-foreground px-4 py-2 rounded mt-4"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="border rounded p-4 space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium mb-1">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border rounded p-2 w-full"
                    placeholder="Your name"
                  />
                  {errors.name && <p className="text-destructive text-sm">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium mb-1">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border rounded p-2 w-full"
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-destructive text-sm">{errors.email}</p>}
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium mb-1">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="border rounded p-2 w-full"
                    placeholder="How can we help?"
                  />
                  {errors.subject && <p className="text-destructive text-sm">{errors.subject}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium mb-1">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="border rounded p-2 w-full"
                    rows={5}
                    placeholder="Your message..."
                  />
                  {errors.message && <p className="text-destructive text-sm">{errors.message}</p>}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="bg-primary text-primary-foreground px-6 py-2 rounded w-full"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
