import React, { useState, useEffect } from "react";

const Room = () => {
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    // Simulating loading delay with setTimeout
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Sample rooms data
      const sampleRooms = [
        {
          id: 1,
          type: "Standard Room",
          description: "A comfortable room with all basic amenities.",
          image:
            "https://images.unsplash.com/photo-1506377295352-e3154d43ea9e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFN0YW5kYXJkJTIwUm9vbXxlbnwwfHwwfHx8MA%3D%3D",
          price: "$100 per night",
        },
        {
          id: 2,
          type: "Deluxe Room",
          description: "A spacious room with added luxury amenities.",
          image:
            "https://plus.unsplash.com/premium_photo-1661914368757-a57361d31b45?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          price: "$150 per night",
        },
        {
          id: 3,
          type: "Suite room",
          description:
            "A luxurious suite with a separate living area and premium amenities.",
          image:
            "https://plus.unsplash.com/premium_photo-1661875135365-16aab794632f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3VpdGUlMjByb29tfGVufDB8fDB8fHww",
          price: "$250 per night",
        },
        {
          id: 4,
          type: "Executive suite room",
          description:
            " A premium suite typically reserved for business travelers.",
          image:
            "https://images.unsplash.com/photo-1461988625982-7e46a099bf4f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RXhlY3V0aXZlJTIwc3VpdGUlMjByb29tfGVufDB8fDB8fHww",
          price: "$1000 per night",
        },
        {
          id: 5,
          type: "Presidential suite room",
          description: "The most luxurious and prestigious suite in a hotel.",
          image:
            "https://images.unsplash.com/photo-1489171078254-c3365d6e359f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fFByZXNpZGVudGlhbCUyMHN1aXRlJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
          price: "$800 per night",
        },
        {
          id: 6,
          type: "Pet-friendly room",
          description: "A room where guests are allowed to bring their pets.",
          image:
            "https://images.unsplash.com/photo-1510563800743-aed236490d08?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFBldCUyMGZyaWVuZGx5JTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
          price: "$50 per night",
        },
      ];
      setRooms(sampleRooms);
    }, 2000);

    // Clearing timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  // Skeleton loader component
  const SkeletonLoader = () => (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 animate-pulse">Rooms and Suites</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden animate-pulse"
          >
            <div className="w-full h-64 bg-gray-300"></div>
            <div className="p-4">
              <div className="w-full h-6 bg-gray-300 mb-2"></div>
              <div className="w-full h-4 bg-gray-300 mb-2"></div>
              <div className="w-full h-4 bg-gray-300"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Actual room content
  const ActualContent = () => (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Rooms and Suites</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {rooms.map((room) => (
          <div
            key={room.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img  data-aos="flip-up"
              src={room.image}
              alt={room.type}
              className="w-full h-64 object-cover"
            />
            <div className="p-4" data-aos="zoom-in">
              <h2 className="text-xl font-bold mb-2">{room.type}</h2>
              <p className="text-gray-700 mb-2">{room.description}</p>
              <p className="text-gray-600">{room.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Conditionally render skeleton loader or actual content based on loading state
  return isLoading ? <SkeletonLoader /> : <ActualContent />;
};

export default Room;
