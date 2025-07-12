'use client'
import { useEffect, useState } from "react";

interface IProduct {
  id: string;
  title: string
}
export default function Product() {
  const [products, setProducts] = useState<IProduct[]>();
  useEffect(() => {
    getProducts()
  }, [])

  async function getProducts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const responseJSON = await response.json()
    setProducts(responseJSON);
  }
  return (
    <>
      <h1>Product list</h1>
      <ul>
        {products?.map(product =>
          <li key={product.id}>{product.title}</li>
        )}
      </ul>
    </>
  );
}