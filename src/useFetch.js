import React, { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [datas, setDatas] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((response) => {
          if (!response.ok) {
            throw Error('could not fetch the data for that resource');
          }
          return response.json();
        })
        .then((data) => {
          setDatas(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === 'AbortError') {
            console.log('fetch aborted');
          } else {
            setIsPending(false);
            setError(err.message);
          }
        });
    }, 1000);

    return () => {
      abortCont.abort();
    };
  }, [url]);

  return { datas, isPending, error };
};

export default useFetch;
