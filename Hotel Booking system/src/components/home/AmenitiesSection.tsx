import { Wifi, Utensils, Dumbbell, Sparkles, Car, Coffee } from 'lucide-react';

const amenities = [
  {
    icon: Wifi,
    title: 'High-Speed WiFi',
    description: 'Complimentary ultra-fast internet throughout the property',
  },
  {
    icon: Utensils,
    title: 'Fine Dining',
    description: 'Award-winning restaurants with world-renowned chefs',
  },
  {
    icon: Dumbbell,
    title: 'Fitness Center',
    description: 'State-of-the-art gym with personal trainers available',
  },
  {
    icon: Sparkles,
    title: 'Spa & Wellness',
    description: 'Rejuvenating treatments and thermal experiences',
  },
  {
    icon: Car,
    title: 'Valet Parking',
    description: 'Complimentary valet service for all guests',
  },
  {
    icon: Coffee,
    title: '24/7 Room Service',
    description: 'Gourmet dining delivered to your room anytime',
  },
];

export function AmenitiesSection() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-luxury">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">
            World-Class Amenities
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
            Everything You Need for a Perfect Stay
          </h2>
          <p className="text-muted-foreground mt-4">
            Indulge in our exceptional range of services designed to exceed your expectations
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((amenity, index) => (
            <div
              key={amenity.title}
              className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-primary transition-colors">
                <amenity.icon className="w-6 h-6 text-accent group-hover:text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                {amenity.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
