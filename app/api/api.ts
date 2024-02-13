import { productInterface } from "../types";

export async function fetchProducts(
  query: string = ""
): Promise<Array<productInterface>> {
  const response = await fetch(`https://dummyjson.com/products/${query}`);
  if (response.status !== 200) {
    return [];
  }
  const data = await response.json();
  return data.products;
}
