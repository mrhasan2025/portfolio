import React, { useState, useEffect } from 'react';

const VisitorInfo = () => {
  const [visitorData, setVisitorData] = useState({
    time: new Date().toLocaleTimeString(),
    location: 'Loading...',
    ip: 'Loading...'
  });

  useEffect(() => {
    // Update time every second
    const timeInterval = setInterval(() => {
      setVisitorData(prev => ({
        ...prev,
        time: new Date().toLocaleTimeString()
      }));
    }, 1000);

    // Get approximate location
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        setVisitorData(prev => ({
          ...prev,
          location: `${data.city}, ${data.country_name}`,
          ip: data.ip
        }));
      })
      .catch(() => {
        setVisitorData(prev => ({
          ...prev,
          location: 'Location unavailable',
          ip: 'IP hidden for privacy'
        }));
      });

    return () => clearInterval(timeInterval);
  }, []);

  return (
    <div className="fixed top-2 right-2 bg-white bg-opacity-80 p-2 rounded-lg shadow-md text-xs z-50">
      <p>🕒 Your time: {visitorData.time}</p>
      <p>📍 Your location: {visitorData.location}</p>
      <p>🌐 Network: {visitorData.ip}</p>
    </div>
  );
};

export default VisitorInfo;