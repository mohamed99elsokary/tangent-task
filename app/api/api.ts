import { productInterface } from "../types";
interface PromiseType {
  products: Array<productInterface>;
  total: number;
}
export async function fetchProducts(query: string = ""): Promise<PromiseType> {
  const response = await fetch(`https://dummyjson.com/products/${query}`);
  if (response.status !== 200) {
    return { products: [], total: 0 };
  }
  const data = await response.json();
  return { products: data.products, total: data.total };
}
