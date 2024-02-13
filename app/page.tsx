"use client";
import { ChakraProvider, Grid, GridItem } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { productInterface } from "./types";
import ProductCardOrganism from "./components/organisms/productCardOrganism";
import { useToast } from "@chakra-ui/react";
export default function Home() {
  const toast = useToast();
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    setProducts(data.products);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const addToCart = (product: productInterface) => {
    const totalPrice = localStorage.getItem("totalPrice") || "0";

    const cart = localStorage.getItem("cart") || "[]";
    const parsedCart: Array<productInterface> = JSON.parse(cart);
    const productIndex = parsedCart.findIndex(
      (item: any) => product.id === item.id
    );
    let cartProduct: productInterface;
    if (productIndex === -1) {
      cartProduct = { ...product, quantity: 1 };
      parsedCart.push(cartProduct);
    } else {
      cartProduct = parsedCart[productIndex];
      parsedCart[productIndex] = {
        ...cartProduct,
        quantity: cartProduct.quantity + 1,
      };
    }
    localStorage.setItem("cart", JSON.stringify(parsedCart));
    localStorage.setItem("totalPrice", String(+totalPrice + cartProduct.price));
    toast({
      title: "added successfully",
      description: "your item has been added to cart",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <ChakraProvider>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {products.map((product: productInterface) => (
          <GridItem key={product.title}>
            <ProductCardOrganism product={product} onClick={addToCart} />
          </GridItem>
        ))}
      </Grid>
    </ChakraProvider>
  );
}
