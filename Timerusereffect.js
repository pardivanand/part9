import React, { useState, useEffect } from 'react';

function Timerusereffect() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h2>Timerusereffect: {seconds} seconds</h2>
    </div>
  );
}

export default Timerusereffect;