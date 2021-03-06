import { useEffect, useState } from "react";

export default function useFetch(search) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const url = `http://api.weatherapi.com/v1/.json?key=537c8b4c35cf4026a6c160201210110&q=${search}&aqi=no`;
    async function init() {
      if (search.length < 4) {
        return;
      }
    }
    setLoading(true);
    setError(null);
    setData([]);
    try {
      const response = fetch(url);

      const json = response.json();
      setData({ location: json.location.name, current: json.current.temp_f });
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }

    init();
  }, [search]);

  return { data, error, loading };
}
