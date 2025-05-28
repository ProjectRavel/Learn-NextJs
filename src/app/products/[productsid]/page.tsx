export default async function ProductDetail(
  { params }: { params: { productsid: string } }
) {
  const productsid = params.productsid;

  return (
    <>
      <h1>Product Detail:</h1>
      <h2>Product ID: {productsid}</h2>
      <p>Details about product {productsid} will be displayed here.</p>
    </>
  );
}
