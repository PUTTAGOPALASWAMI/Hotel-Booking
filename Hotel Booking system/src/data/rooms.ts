export interface Room {
  id: string;
  name: string;
  type: 'standard' | 'deluxe' | 'suite' | 'penthouse';
  price: number;
  description: string;
  image: string;
  capacity: number;
  size: number;
  facilities: string[];
  available: boolean;
}

export const rooms: Room[] = [
  {
    id: "room-001",
    name: "Classic Room",
    type: "standard",
    price: 4500,
    description: "A comfortable room with modern amenities, perfect for solo travelers or couples seeking a cozy retreat.",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
    capacity: 2,
    size: 28,
    facilities: ["King Bed", "Free WiFi", "Air Conditioning", "Mini Bar", "Room Service"],
    available: true
  },
  {
    id: "room-002",
    name: "Superior Room",
    type: "standard",
    price: 6000,
    description: "Spacious accommodation with city views and premium bedding for enhanced comfort.",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
    capacity: 2,
    size: 35,
    facilities: ["King Bed", "Free WiFi", "Air Conditioning", "Mini Bar", "Room Service", "City View"],
    available: true
  },
  {
    id: "room-003",
    name: "Deluxe Room",
    type: "deluxe",
    price: 8500,
    description: "Elegantly appointed room featuring a private balcony and luxurious marble bathroom.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
    capacity: 2,
    size: 42,
    facilities: ["King Bed", "Free WiFi", "Air Conditioning", "Mini Bar", "Room Service", "Balcony", "Marble Bathroom"],
    available: true
  },
  {
    id: "room-004",
    name: "Grand Deluxe Room",
    type: "deluxe",
    price: 12000,
    description: "Premium deluxe accommodation with separate living area and panoramic views.",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80",
    capacity: 3,
    size: 52,
    facilities: ["King Bed", "Free WiFi", "Air Conditioning", "Mini Bar", "Room Service", "Balcony", "Living Area", "Panoramic View"],
    available: false
  },
  {
    id: "room-005",
    name: "Junior Suite",
    type: "suite",
    price: 18000,
    description: "Sophisticated suite with separate bedroom and living room, ideal for extended stays.",
    image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800&q=80",
    capacity: 2,
    size: 65,
    facilities: ["King Bed", "Free WiFi", "Air Conditioning", "Mini Bar", "Room Service", "Living Room", "Work Desk", "Bathtub"],
    available: true
  },
  {
    id: "room-006",
    name: "Executive Suite",
    type: "suite",
    price: 25000,
    description: "Lavish suite featuring a dining area, premium amenities, and butler service.",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80",
    capacity: 4,
    size: 85,
    facilities: ["King Bed", "Free WiFi", "Air Conditioning", "Mini Bar", "Butler Service", "Dining Area", "Jacuzzi", "Premium View"],
    available: true
  },
  {
    id: "room-007",
    name: "Presidential Suite",
    type: "penthouse",
    price: 50000,
    description: "The epitome of luxury with multiple bedrooms, private terrace, and exclusive concierge.",
    image: "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?w=800&q=80",
    capacity: 6,
    size: 150,
    facilities: ["Multiple Bedrooms", "Free WiFi", "Air Conditioning", "Full Kitchen", "Private Terrace", "Concierge", "Jacuzzi", "Home Theater"],
    available: true
  },
  {
    id: "room-008",
    name: "Royal Penthouse",
    type: "penthouse",
    price: 100000,
    description: "Our most exclusive accommodation spanning the entire top floor with 360-degree city views.",
    image: "https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?w=800&q=80",
    capacity: 8,
    size: 300,
    facilities: ["Multiple Bedrooms", "Free WiFi", "Air Conditioning", "Full Kitchen", "Private Pool", "Helipad Access", "Personal Chef", "Spa Room"],
    available: false
  }
];

export const roomTypes = [
  { value: 'all', label: 'All Rooms' },
  { value: 'standard', label: 'Standard' },
  { value: 'deluxe', label: 'Deluxe' },
  { value: 'suite', label: 'Suite' },
  { value: 'penthouse', label: 'Penthouse' },
];

export const priceRanges = [
  { value: 'all', label: 'All Prices' },
  { value: '0-200', label: 'Under $200' },
  { value: '200-400', label: '$200 - $400' },
  { value: '400-800', label: '$400 - $800' },
  { value: '800+', label: '$800+' },
];
