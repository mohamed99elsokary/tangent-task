"use client";
import CardMolecule from "./components/molecules/cardMolecule";
import { ChakraProvider, Grid, GridItem } from "@chakra-ui/react";
import { useState, useEffect } from "react";

interface productInterface {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}
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
    console.log({ product });
  };

  return (
    <ChakraProvider>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {products.map((product: productInterface) => (
          <GridItem key={product.title}>
            <CardMolecule product={product} onClick={addToCart} />
          </GridItem>
        ))}
      </Grid>
    </ChakraProvider>
  );
}
