import { Link } from 'react-router-dom';
import { ArrowRight, Star, Award, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-hotel.jpg';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Grandeur Hotel exterior at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-luxury text-center text-primary-foreground pt-20">
        <div className="max-w-3xl mx-auto space-y-6 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30">
            <Star className="w-4 h-4 text-accent" fill="currentColor" />
            <span className="text-sm font-medium text-accent">5-Star Luxury Experience</span>
          </div>

          {/* Title */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
            Where Elegance Meets
            <span className="block text-accent">Extraordinary</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl mx-auto leading-relaxed">
            Discover unparalleled luxury and world-class hospitality at Grandeur Hotel. 
            Your unforgettable journey begins here.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/booking" className="gap-2">
                Book Your Stay
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/rooms">Explore Rooms</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 pt-12 animate-fade-in-delay-2">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-accent mb-1">
                <Star className="w-5 h-5" fill="currentColor" />
                <span className="text-3xl font-heading font-bold">4.9</span>
              </div>
              <span className="text-sm text-primary-foreground/70">Guest Rating</span>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-accent mb-1">
                <Award className="w-5 h-5" />
                <span className="text-3xl font-heading font-bold">50+</span>
              </div>
              <span className="text-sm text-primary-foreground/70">Awards Won</span>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-accent mb-1">
                <Clock className="w-5 h-5" />
                <span className="text-3xl font-heading font-bold">24/7</span>
              </div>
              <span className="text-sm text-primary-foreground/70">Concierge Service</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-accent rounded-full" />
        </div>
      </div>
    </section>
  );
}
