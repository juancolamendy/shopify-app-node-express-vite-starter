import { useState } from 'react';

import { useAuthFetch } from "../hooks";

export const useAppQuery = ({url, options}) => {
  // state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  
  const fetch = useAuthFetch();

  const refetch = async (opts) => {
    // init
    let u = url;
    if(opts && opts.url) {
      u = opts.url;
    }
    let o = options;
    if(opts && opts.options) {
      o = opts.options;
    }
    
    // logic
    try {
      setLoading(true);
      const resp = await fetch(u, o);
      const data = await resp.json();
      setData(data);
    } catch (e) {
      console.log(`--- error on fetching: ${u}`, e);
      setError(e);
    }
    setLoading(false);
  };

  return {loading, error, data, refetch};
};
