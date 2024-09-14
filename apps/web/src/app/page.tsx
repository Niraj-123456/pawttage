import ProductList from "@next/components/ProductList";

async function getProducts() {
  const res = await fetch("http://localhost:3000/api/products");
  return res.json();
}

export default async function Home() {
  const products = await getProducts();
  return (
    <main className="w-full">
      <ProductList products={products} />
    </main>
  );
}
