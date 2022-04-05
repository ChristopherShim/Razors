import url from "./URL";
export default async () => {
  const response = await fetch(`${url}/api/products`).catch(error =>
    console.error(error)
  );
  const products = await response.json();
  if (products.error) {
    return null;
  }
  return products;
};