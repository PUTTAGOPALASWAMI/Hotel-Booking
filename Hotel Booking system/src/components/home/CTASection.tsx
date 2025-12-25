import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CTASection() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-luxury">
        <div className="bg-card rounded-2xl shadow-lg p-8 md:p-12 lg:p-16 text-center relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">
              Limited Time Offer
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Book Direct & Save 15%
            </h2>
            <p className="text-muted-foreground text-lg">
              Enjoy exclusive benefits when you book directly with us, including complimentary breakfast, 
              late checkout, and room upgrades subject to availability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button variant="gold" size="xl" asChild>
                <Link to="/booking" className="gap-2">
                  Reserve Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="luxury-outline" size="lg" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
