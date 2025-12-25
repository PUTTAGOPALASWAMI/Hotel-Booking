import { Link } from 'react-router-dom';
import { Users, Maximize, Wifi, Wind, Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Room } from '@/data/rooms';
import { cn } from '@/lib/utils';

interface RoomCardProps {
  room: Room;
}

const facilityIcons: Record<string, React.ReactNode> = {
  'Free WiFi': <Wifi size={14} />,
  'Air Conditioning': <Wind size={14} />,
  'Mini Bar': <Coffee size={14} />,
};

export function RoomCard({ room }: RoomCardProps) {
  return (
    <article className="card-luxury overflow-hidden group">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
        
        {/* Availability Badge */}
        <Badge
          className={cn(
            'absolute top-4 right-4 font-body text-xs',
            room.available
              ? 'bg-green-600 text-white'
              : 'bg-destructive text-destructive-foreground'
          )}
        >
          {room.available ? 'Available' : 'Sold Out'}
        </Badge>

        {/* Price Tag */}
        <div className="absolute bottom-4 left-4 text-primary-foreground">
          <span className="text-3xl font-heading font-bold">${room.price}</span>
          <span className="text-sm opacity-80">/night</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Room Type */}
        <span className="text-accent text-xs font-semibold uppercase tracking-wider">
          {room.type}
        </span>

        {/* Title */}
        <h3 className="font-heading text-xl font-semibold text-foreground">
          {room.name}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
          {room.description}
        </p>

        {/* Room Details */}
        <div className="flex items-center gap-4 text-muted-foreground text-sm">
          <div className="flex items-center gap-1.5">
            <Users size={16} />
            <span>{room.capacity} Guests</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Maximize size={16} />
            <span>{room.size} m²</span>
          </div>
        </div>

        {/* Facilities */}
        <div className="flex flex-wrap gap-2">
          {room.facilities.slice(0, 3).map((facility) => (
            <span
              key={facility}
              className="inline-flex items-center gap-1 px-2 py-1 bg-secondary rounded-md text-xs text-secondary-foreground"
            >
              {facilityIcons[facility] || null}
              {facility}
            </span>
          ))}
          {room.facilities.length > 3 && (
            <span className="px-2 py-1 bg-secondary rounded-md text-xs text-muted-foreground">
              +{room.facilities.length - 3} more
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-2">
          <Button
            variant="gold"
            className="flex-1"
            disabled={!room.available}
            asChild
          >
            <Link to={`/booking?room=${room.id}`}>
              {room.available ? 'Book Now' : 'Unavailable'}
            </Link>
          </Button>
          <Button variant="luxury-outline" asChild>
            <Link to={`/rooms#${room.id}`}>Details</Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
