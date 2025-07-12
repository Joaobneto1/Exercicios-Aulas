
interface IProduct {
  id: string;
  title: string
}

async function getProducts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  const responseJSON = await response.json()
  return responseJSON
}

export default async function Product() {
  const products: IProduct[] = await getProducts()

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