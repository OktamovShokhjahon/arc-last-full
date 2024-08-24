import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const req = await fetch(url);
        const res = await req.json();
        setData(res);
      } catch (err) {
        setError(err);
      }
      setIsLoading(false);
    };

    getData();
  }, [url]);

  return {
    data,
    isLoading,
    error,
  };
}

export default useFetch;
