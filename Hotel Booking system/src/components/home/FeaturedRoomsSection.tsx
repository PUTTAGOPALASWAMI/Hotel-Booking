import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { RoomCard } from '@/components/rooms/RoomCard';
import { rooms } from '@/data/rooms';

export function FeaturedRoomsSection() {
  const featuredRooms = rooms.filter((room) => room.available).slice(0, 3);

  return (
    <section className="section-padding bg-background">
      <div className="container-luxury">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">
              Accommodations
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
              Featured Rooms & Suites
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg">
              Experience luxury in every detail with our handpicked selection of premium accommodations
            </p>
          </div>
          <Button variant="luxury-outline" asChild>
            <Link to="/rooms" className="gap-2">
              View All Rooms
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredRooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
    </section>
  );
}
