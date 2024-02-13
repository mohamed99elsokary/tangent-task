import { productInterface } from "../types";

export async function fetchProducts(): Promise<Array<productInterface>> {
  const response = await fetch("https://dummyjson.com/products/");
  if (response.status !== 200) {
    return [];
  }
  const data = await response.json();
  return data.products;
}
