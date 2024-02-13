"use client";
import ProductCardMolecule from "@/app/components/molecules/productCardMolecule";
import { ChakraProvider, Grid, GridItem } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { productInterface } from "./types";

export default function Home() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    setProducts(data.products);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const addToCart = (product: any) => {
    const cart = localStorage.getItem("cart");
    if (!cart) {
      localStorage.setItem(
        "cart",
        JSON.stringify([{ ...product, quantity: 1 }])
      );
    } else {
      let parsedCart: Array<productInterface> = JSON.parse(cart);
      const productIndex = parsedCart.findIndex(
        (item: any) => product.id === item.id
      );
      if (productIndex === -1) {
        localStorage.setItem(
          "cart",
          JSON.stringify([...parsedCart, { ...product, quantity: 1 }])
        );
      } else {
        const oldProduct: productInterface = parsedCart[productIndex];
        oldProduct.quantity += 1;
        localStorage.setItem("cart", JSON.stringify(parsedCart));
      }
    }
  };

  return (
    <ChakraProvider>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {products.map((product: productInterface) => (
          <GridItem key={product.title}>
            <ProductCardMolecule product={product} onClick={addToCart} />
          </GridItem>
        ))}
      </Grid>
    </ChakraProvider>
  );
}
