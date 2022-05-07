import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { Footer, Home, Navbar } from "./components";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const data = async () =>
      await axios.get(`https://fakestoreapi.com/products`);

    data().then(({ data }) => setProducts(data));
  }, []);
  return (
    <div className="app">
      <Navbar />
      <Home products={products} />
      <Footer />
    </div>
  );
}

export default App;
