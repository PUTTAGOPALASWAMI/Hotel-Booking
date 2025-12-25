import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { rooms } from '@/data/rooms';

const Rooms = () => {
  const [typeFilter, setTypeFilter] = useState('all');
  const [priceFilter, setPriceFilter] = useState('all');

  // Filter rooms based on selected filters
  const filteredRooms = rooms.filter((room) => {
    // Type filter
    if (typeFilter !== 'all' && room.type !== typeFilter) {
      return false;
    }
    // Price filter
    if (priceFilter === '0-8000' && room.price >= 8000) return false;
    if (priceFilter === '8000-20000' && (room.price < 8000 || room.price >= 20000)) return false;
    if (priceFilter === '20000+' && room.price < 20000) return false;
    return true;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 max-w-6xl mx-auto p-4 w-full">
        <h1 className="text-2xl font-bold mb-4">All Rooms</h1>

        {/* Filters */}
        <div className="flex gap-4 mb-4 flex-wrap">
          <div>
            <label className="block text-sm font-medium mb-1">Room Type:</label>
            <select 
              value={typeFilter} 
              onChange={(e) => setTypeFilter(e.target.value)}
              className="border rounded p-2"
            >
              <option value="all">All Types</option>
              <option value="standard">Standard</option>
              <option value="deluxe">Deluxe</option>
              <option value="suite">Suite</option>
              <option value="penthouse">Penthouse</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Price Range:</label>
            <select 
              value={priceFilter} 
              onChange={(e) => setPriceFilter(e.target.value)}
              className="border rounded p-2"
            >
              <option value="all">All Prices</option>
              <option value="0-8000">Under ₹8,000</option>
              <option value="8000-20000">₹8,000 - ₹20,000</option>
              <option value="20000+">₹20,000+</option>
            </select>
          </div>
        </div>

        <p className="text-muted-foreground mb-4">
          Showing {filteredRooms.length} of {rooms.length} rooms
        </p>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredRooms.map((room) => (
            <div key={room.id} className="border rounded p-4">
              <img 
                src={room.image} 
                alt={room.name}
                className="w-full h-40 object-cover rounded mb-2"
              />
              <h3 className="font-bold">{room.name}</h3>
              <p className="text-sm text-muted-foreground capitalize">{room.type}</p>
              <p className="font-bold text-primary">₹{room.price}/night</p>
              <p className="text-sm my-2">{room.description}</p>
              
              <div className="text-sm text-muted-foreground mb-2">
                <p>👥 {room.capacity} guests | 📐 {room.size} m²</p>
              </div>

              {/* Facilities */}
              <div className="flex flex-wrap gap-1 mb-2">
                {room.facilities.slice(0, 3).map((f) => (
                  <span key={f} className="bg-secondary text-xs px-2 py-1 rounded">
                    {f}
                  </span>
                ))}
              </div>

              {/* Availability and Book Button */}
              <div className="flex justify-between items-center">
                <span className={room.available ? 'text-green-600' : 'text-destructive'}>
                  {room.available ? '✓ Available' : '✗ Sold Out'}
                </span>
                {room.available ? (
                  <Link 
                    to={`/booking?room=${room.id}`}
                    className="bg-primary text-primary-foreground px-4 py-1 rounded text-sm"
                  >
                    Book
                  </Link>
                ) : (
                  <span className="bg-muted text-muted-foreground px-4 py-1 rounded text-sm">
                    Unavailable
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Rooms;
