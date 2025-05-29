import { notFound } from "next/navigation";
export default async function ProductDetail(
  { params }: { params: { productsid: string } }  
) {
  const productsid = params.productsid;

  if (parseInt(productsid) > 1000) {
    return notFound();
  }

  return (
    <>
      <h1>Product Detail:</h1>
      <h2>Product ID: {productsid}</h2>
      <p>Details about product {productsid} will be displayed here.</p>
    </>
  );
}
