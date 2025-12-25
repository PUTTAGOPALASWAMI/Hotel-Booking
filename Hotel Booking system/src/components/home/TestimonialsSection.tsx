import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Business Executive',
    content: 'An absolutely exceptional experience. The attention to detail and personalized service made our anniversary celebration truly unforgettable.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
  },
  {
    name: 'James Anderson',
    role: 'Travel Blogger',
    content: 'Having stayed at luxury hotels worldwide, Grandeur stands out for its perfect blend of elegance and warmth. The staff anticipates your every need.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
  },
  {
    name: 'Emily Chen',
    role: 'Art Director',
    content: 'The interior design is breathtaking, and the views from the Executive Suite are spectacular. Worth every penny for a truly luxurious escape.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-luxury">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">
            Guest Experiences
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3">
            What Our Guests Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-primary-foreground/5 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/10"
            >
              <Quote className="w-8 h-8 text-accent mb-4" />
              <p className="text-primary-foreground/90 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-primary-foreground/70">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mt-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-accent"
                    fill="currentColor"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
