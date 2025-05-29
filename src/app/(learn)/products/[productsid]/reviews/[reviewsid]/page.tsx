import { notFound } from 'next/navigation';

export default async function ReviewDetail(
  { params }: { params: { productsid: string; reviewsid: string } }){
    const { productsid, reviewsid } = params;
    if (parseInt(productsid) > 1000 || parseInt(reviewsid) > 1000) {
        return notFound();
    }
    return (
        <>
        <h1>Review Detail:</h1>
        <h2>Product ID: {productsid}</h2>
        <h2>Review ID: {reviewsid}</h2>
        <p>Details about review {reviewsid} for product {productsid} will be displayed here.</p>
        </>
    );
  }