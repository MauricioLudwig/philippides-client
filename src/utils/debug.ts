import { useEffect } from 'react';

/**
 * * Helper function for debugging. New log is rendered each time data mutates
 * @param data Any data intended for logging
 */

const Debug = <T>(data: T) => {
  useEffect(() => {
    console.log(`%c${JSON.stringify(data, null, 4)}`, 'color: yellow');
  }, [data]);

  return null;
};

export default Debug;
