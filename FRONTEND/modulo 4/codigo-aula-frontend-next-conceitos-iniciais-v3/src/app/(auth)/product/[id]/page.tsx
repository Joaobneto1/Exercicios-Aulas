interface ProductDetailProps {
  params: {
    id: string
  }
}
export default function ProductDetail({ params }: Readonly<ProductDetailProps>) {

  return (
    <h1>Product Detail: {params.id}</h1>
  );
}