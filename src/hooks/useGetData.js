import { useState, useEffect } from 'react';

const useGetData = (API) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getItems() {
      let response = await fetch(API);
      response = await response.json();
      setItems(response.body);
    }
    getItems();
  }, []);

  return items;
};

export default useGetData;
