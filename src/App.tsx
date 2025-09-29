import { useEffect, useState } from "react";
import Card from "./components/Card";

function App() {
  const [products, setProducts] = useState([]);

  // only runs on first render to fetch data then pass it down via props
  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      console.log(data);
      setProducts(data);
    }

    fetchProducts();
  }, []);

  return (
    <div>
      <h1 className="bg-red-400">Vega IT practice application,</h1>

      {products.map((product) => (
        <Card key={product.id} {...product} />
      ))}
    </div>
  );
}

export default App;
