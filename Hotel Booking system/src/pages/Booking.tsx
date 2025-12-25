import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { rooms } from '@/data/rooms';
import { v4 as uuidv4 } from 'uuid';

const Booking = () => {
  const [searchParams] = useSearchParams();
  const preselectedRoom = searchParams.get('room') || '';

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    roomId: preselectedRoom,
    checkIn: '',
    checkOut: '',
    guests: '2',
    requests: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [bookingId, setBookingId] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const availableRooms = rooms.filter(r => r.available);
  const selectedRoom = rooms.find(r => r.id === formData.roomId);

  // Calculate total price
  const calculateTotal = () => {
    if (!selectedRoom || !formData.checkIn || !formData.checkOut) return 0;
    const checkIn = new Date(formData.checkIn);
    const checkOut = new Date(formData.checkOut);
    const nights = Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24));
    return nights > 0 ? nights * selectedRoom.price : 0;
  };

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  // Validate form
  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name || formData.name.length < 2) {
      newErrors.name = 'Name is required (min 2 characters)';
    }
    if (!formData.email || !formData.email.includes('@')) {
      newErrors.email = 'Valid email is required';
    }
    if (!formData.phone || formData.phone.length < 10) {
      newErrors.phone = 'Valid phone number is required';
    }
    if (!formData.roomId) {
      newErrors.roomId = 'Please select a room';
    }
    if (!formData.checkIn) {
      newErrors.checkIn = 'Check-in date is required';
    }
    if (!formData.checkOut) {
      newErrors.checkOut = 'Check-out date is required';
    }
    if (formData.checkIn && formData.checkOut && formData.checkOut <= formData.checkIn) {
      newErrors.checkOut = 'Check-out must be after check-in';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Generate booking ID
      const id = 'BK-' + uuidv4().slice(0, 8).toUpperCase();
      setBookingId(id);
      setIsSubmitted(true);
    }
  };

  // Show confirmation
  if (isSubmitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 max-w-2xl mx-auto p-4 w-full text-center">
          <div className="border rounded p-8 mt-8">
            <h1 className="text-2xl font-bold text-green-600 mb-4">✓ Booking Confirmed!</h1>
            <p className="mb-4">Thank you for your reservation.</p>
            <div className="bg-secondary p-4 rounded text-left">
              <p><strong>Booking ID:</strong> {bookingId}</p>
              <p><strong>Name:</strong> {formData.name}</p>
              <p><strong>Room:</strong> {selectedRoom?.name}</p>
              <p><strong>Check-in:</strong> {formData.checkIn}</p>
              <p><strong>Check-out:</strong> {formData.checkOut}</p>
              <p><strong>Total:</strong> ₹{calculateTotal()}</p>
            </div>
            <button 
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  name: '', email: '', phone: '', roomId: '',
                  checkIn: '', checkOut: '', guests: '2', requests: ''
                });
              }}
              className="bg-primary text-primary-foreground px-4 py-2 rounded mt-4"
            >
              Make Another Booking
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 max-w-2xl mx-auto p-4 w-full">
        <h1 className="text-2xl font-bold mb-4">Book a Room</h1>

        <form onSubmit={handleSubmit} className="border rounded p-4 space-y-4">
          <h2 className="font-bold">Personal Information</h2>
          
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Full Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border rounded p-2 w-full"
              placeholder="John Doe"
            />
            {errors.name && <p className="text-destructive text-sm">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border rounded p-2 w-full"
              placeholder="john@example.com"
            />
            {errors.email && <p className="text-destructive text-sm">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium mb-1">Phone *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="border rounded p-2 w-full"
              placeholder="(123) 456-7890"
            />
            {errors.phone && <p className="text-destructive text-sm">{errors.phone}</p>}
          </div>

          <hr />
          <h2 className="font-bold">Booking Details</h2>

          {/* Room Select */}
          <div>
            <label className="block text-sm font-medium mb-1">Select Room *</label>
            <select
              name="roomId"
              value={formData.roomId}
              onChange={handleChange}
              className="border rounded p-2 w-full"
            >
              <option value="">-- Select a room --</option>
              {availableRooms.map((room) => (
                  <option key={room.id} value={room.id}>
                    {room.name} - ₹{room.price}/night
                  </option>
              ))}
            </select>
            {errors.roomId && <p className="text-destructive text-sm">{errors.roomId}</p>}
          </div>

          {/* Dates */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Check-in Date *</label>
              <input
                type="date"
                name="checkIn"
                value={formData.checkIn}
                onChange={handleChange}
                className="border rounded p-2 w-full"
              />
              {errors.checkIn && <p className="text-destructive text-sm">{errors.checkIn}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Check-out Date *</label>
              <input
                type="date"
                name="checkOut"
                value={formData.checkOut}
                onChange={handleChange}
                className="border rounded p-2 w-full"
              />
              {errors.checkOut && <p className="text-destructive text-sm">{errors.checkOut}</p>}
            </div>
          </div>

          {/* Guests */}
          <div>
            <label className="block text-sm font-medium mb-1">Number of Guests</label>
            <select
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className="border rounded p-2 w-full"
            >
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <option key={n} value={n}>{n} guest(s)</option>
              ))}
            </select>
          </div>

          {/* Special Requests */}
          <div>
            <label className="block text-sm font-medium mb-1">Special Requests</label>
            <textarea
              name="requests"
              value={formData.requests}
              onChange={handleChange}
              className="border rounded p-2 w-full"
              rows={3}
              placeholder="Any special requirements..."
            />
          </div>

          {/* Price Summary */}
          {selectedRoom && calculateTotal() > 0 && (
            <div className="bg-secondary p-4 rounded">
              <p><strong>Room:</strong> {selectedRoom.name}</p>
              <p><strong>Price per night:</strong> ₹{selectedRoom.price}</p>
              <p className="text-lg font-bold">
                <strong>Total:</strong> ₹{calculateTotal()}
              </p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-primary text-primary-foreground px-6 py-2 rounded w-full"
          >
            Confirm Booking
          </button>
        </form>
      </main>

      <Footer />
    </div>
  );
};

export default Booking;
