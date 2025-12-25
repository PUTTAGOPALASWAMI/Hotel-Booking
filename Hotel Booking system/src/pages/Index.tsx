import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { rooms } from '@/data/rooms';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-secondary p-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Welcome to Our Hotel</h1>
          <p className="mb-4">Book your perfect stay with us today!</p>
          <Link 
            to="/booking" 
            className="bg-primary text-primary-foreground px-6 py-2 rounded inline-block"
          >
            Book Now
          </Link>
        </section>

        {/* Featured Rooms */}
        <section className="max-w-6xl mx-auto p-4">
          <h2 className="text-2xl font-bold mb-4">Our Rooms</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {rooms.slice(0, 3).map((room) => (
              <div key={room.id} className="border rounded p-4">
                <img 
                  src={room.image} 
                  alt={room.name}
                  className="w-full h-40 object-cover rounded mb-2"
                />
                <h3 className="font-bold">{room.name}</h3>
                <p className="text-muted-foreground text-sm">{room.type}</p>
                <p className="font-bold text-primary">₹{room.price}/night</p>
                <p className="text-sm mt-2">{room.description}</p>
                <Link 
                  to={`/booking?room=${room.id}`}
                  className="bg-primary text-primary-foreground px-4 py-1 rounded text-sm mt-2 inline-block"
                >
                  Book
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link to="/rooms" className="text-primary underline">
              View All Rooms →
            </Link>
          </div>
        </section>

        {/* Amenities */}
        <section className="bg-secondary p-8 mt-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">Our Amenities</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4">
                <div className="text-3xl mb-2">📶</div>
                <p>Free WiFi</p>
              </div>
              <div className="p-4">
                <div className="text-3xl mb-2">🍽️</div>
                <p>Restaurant</p>
              </div>
              <div className="p-4">
                <div className="text-3xl mb-2">🏊</div>
                <p>Swimming Pool</p>
              </div>
              <div className="p-4">
                <div className="text-3xl mb-2">🅿️</div>
                <p>Free Parking</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="max-w-6xl mx-auto p-8">
          <h2 className="text-2xl font-bold mb-4 text-center">Guest Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border rounded p-4">
              <p className="italic">"Great hotel! Very clean and comfortable."</p>
              <p className="font-bold mt-2">- John D.</p>
              <p className="text-sm text-muted-foreground">⭐⭐⭐⭐⭐</p>
            </div>
            <div className="border rounded p-4">
              <p className="italic">"Excellent service and location."</p>
              <p className="font-bold mt-2">- Sarah M.</p>
              <p className="text-sm text-muted-foreground">⭐⭐⭐⭐⭐</p>
            </div>
            <div className="border rounded p-4">
              <p className="italic">"Will definitely come back!"</p>
              <p className="font-bold mt-2">- Mike R.</p>
              <p className="text-sm text-muted-foreground">⭐⭐⭐⭐⭐</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
