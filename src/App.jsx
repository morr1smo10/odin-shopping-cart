import { useState, useEffect } from 'react';
import Home from './components/Home';
import Shop from './components/Shop';
import Checkout from './components/Checkout';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const number_max = 20;
  const number_list = [];
  for (let i = 1; i <= number_max; i++) {
    number_list.push(i);
  }
  const [itemsList, setItemsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState({});

  function addItem(id, amount) {
    const temp = { ...cart };
    if (temp[id]) {
      temp[id] = temp[id] + amount;
    } else {
      temp[id] = amount;
    }
    console.log(temp);
    setCart(temp);
  }

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await Promise.all(number_list.map(index => 
          fetch(`https://fakestoreapi.com/products/${index}`)
          .then(res => res.json())
          .then(data => {return {id: index, title: data.title, price: data.price, image: data.image}})
        ));
        setItemsList(response);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [])

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home cart={cart}/>,
    },
    {
      path: "shop",
      element: <Shop itemsList={itemsList} loading={loading} error={error} addItem={addItem} cart={cart}/>,
    },
    {
      path: "checkout",
      element: <Checkout cart={cart} itemsList={itemsList}/>,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App
