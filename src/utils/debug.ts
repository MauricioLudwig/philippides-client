import { useEffect } from 'react';

// helper function for debugging any data. New log is rendered each time said data mutates.

const Debug = <T>(data: T) => {
  useEffect(() => {
    console.log(`%c${JSON.stringify(data, null, 4)}`, 'color: yellow');
  }, [data]);

  return null;
};

export default Debug;
