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
    <main className="bg-background min-h-screen p-10">
      <h1 className="text-primary text-center text-4xl font-bold mb-6">Vega IT demo app</h1>

      <div className="flex flex-wrap justify-center gap-6 p-6 bg-background min-h-screen">
        {products.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
    </main>
  );
}

export default App;
