  import { notFound } from "next/navigation";
  import { Metadata } from "next";

  type Props = {
      params: {
          productsid: string;
      };
  }

  export const generateMetadata = async ({
      params,
  }: Props): Promise<Metadata> => {
      const productsid = params.productsid;
      const title = await new Promise((resolve) => {
          setTimeout(() => {
              resolve(`Product ${productsid} Details`);
          }, 5000);
      });
      const desctiption = await new Promise((resolve) => {
          setTimeout(() => {
              resolve(`Details about product ${productsid}`);
          }, 5000);
      })
      return {
        title: `${title}`,
        description: `${desctiption}`,
      };
    };

  export default async function ProductDetail({ params }: { params: { productsid: string } }  
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
