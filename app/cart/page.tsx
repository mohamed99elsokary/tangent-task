"use client";
import { ChakraProvider, Grid, GridItem } from "@chakra-ui/react";
import { productInterface } from "../types";
import CartProductCardMolecule from "../components/molecules/cartProductCardMolecule";
import { useEffect, useState } from "react";
export default function Cart() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const stringifiedProducts: string = localStorage.getItem("cart") ?? "[]";
    const parsedCart: any = JSON.parse(stringifiedProducts);
    setProducts(parsedCart);
  }, []);

  const decreaseQuantity = (product: productInterface) => {
    const newCart: Array<productInterface> = [...products];
    const productIndex: number = products.findIndex(
      (item: any) => product.id === item.id
    );

    const oldProduct: productInterface = products[productIndex];
    if (oldProduct.quantity === 1) {
      newCart.splice(productIndex, 1);
    } else {
      newCart[productIndex] = {
        ...oldProduct,
        quantity: (oldProduct.quantity -= 1),
      };
    }
    localStorage.setItem("cart", JSON.stringify(newCart));
    setProducts(newCart);
  };
  const increaseQuantity = (product: productInterface) => {
    const newCart: Array<productInterface> = [...products];
    const productIndex: number = products.findIndex(
      (item: any) => product.id === item.id
    );

    const oldProduct: productInterface = products[productIndex];
    newCart[productIndex] = {
      ...oldProduct,
      quantity: (oldProduct.quantity += 1),
    };
    localStorage.setItem("cart", JSON.stringify(newCart));
    setProducts(newCart);
  };
  return (
    <ChakraProvider>
      <Grid templateColumns="repeat(1, 1fr)" gap={6}>
        {products.map((product: productInterface) => (
          <GridItem key={product.title}>
            <CartProductCardMolecule
              product={product}
              minus={decreaseQuantity}
              plus={increaseQuantity}
            />
          </GridItem>
        ))}
      </Grid>
    </ChakraProvider>
  );
}
