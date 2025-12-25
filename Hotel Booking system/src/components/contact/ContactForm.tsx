import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { MapPin, Phone, Mail, Clock, Send, Check } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters').max(200),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: MapPin,
    title: 'Address',
    content: '123 Luxury Avenue, Manhattan, New York, NY 10001',
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '+1 (234) 567-890',
    link: 'tel:+1234567890',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'info@grandeurhotel.com',
    link: 'mailto:info@grandeurhotel.com',
  },
  {
    icon: Clock,
    title: 'Hours',
    content: '24/7 Concierge Service',
  },
];

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    form.reset();
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Contact Information */}
      <div className="space-y-8">
        <div>
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
            Contact Us
          </h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Have questions or need assistance? Our dedicated team is here to help make your stay 
            unforgettable. Reach out to us anytime.
          </p>
        </div>

        <div className="space-y-6">
          {contactInfo.map((item) => (
            <div key={item.title} className="flex gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                {item.link ? (
                  <a 
                    href={item.link}
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    {item.content}
                  </a>
                ) : (
                  <p className="text-muted-foreground">{item.content}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Map placeholder */}
        <div className="h-64 bg-secondary rounded-lg flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            <MapPin className="w-8 h-8 mx-auto mb-2 text-accent" />
            <p className="text-sm">Interactive Map</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-card rounded-lg shadow-lg p-6 md:p-8">
        {isSubmitted ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground mb-2">
              Message Sent!
            </h3>
            <p className="text-muted-foreground mb-6">
              Thank you for reaching out. We'll get back to you within 24 hours.
            </p>
            <Button variant="gold" onClick={() => setIsSubmitted(false)}>
              Send Another Message
            </Button>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="John Doe" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input {...field} type="email" placeholder="john@example.com" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="How can we help?" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        {...field} 
                        placeholder="Tell us more about your inquiry..."
                        className="min-h-[150px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                variant="gold" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </Form>
        )}
      </div>
    </div>
  );
}
