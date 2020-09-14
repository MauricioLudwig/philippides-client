import { useEffect } from 'react';

const Debug = <T>(data: T) => {
  useEffect(() => {
    console.log(JSON.stringify(data, undefined, -4));
  }, [data]);

  return null;
};

export default Debug;
