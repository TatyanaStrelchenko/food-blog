'use client';

import { useEffect, useState } from 'react';

export default function Loading() {
  const [timeoutReached, setTimeoutReached] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeoutReached(true);
    }, 1000); // 3 seconds timeout

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      {!timeoutReached ? (
        <h2>Loading...!!!!!</h2>
      ) : (
        <h2>This is taking longer than usual... Please wait.</h2>
      )}
    </div>
  );
}
