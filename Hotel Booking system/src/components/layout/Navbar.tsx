import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-primary text-primary-foreground p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          🏨 Hotel Booking
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/rooms" className="hover:underline">Rooms</Link>
          <Link to="/booking" className="hover:underline">Booking</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-2">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/rooms" onClick={() => setMenuOpen(false)}>Rooms</Link>
          <Link to="/booking" onClick={() => setMenuOpen(false)}>Booking</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
