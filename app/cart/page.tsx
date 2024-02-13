"use client";
import { Grid, GridItem } from "@chakra-ui/react";
import { productInterface } from "../types";
import { useEffect, useState } from "react";
import CartProductCardOrganism from "../components/organisms/cartProductCardOrganism";
import { handleCurrency } from "../utils";
export default function Cart() {
  const [products, setProducts] = useState<Array<productInterface>>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const stringifiedProducts: string = localStorage.getItem("cart") ?? "[]";
    const parsedCart: Array<productInterface> = JSON.parse(stringifiedProducts);
    setProducts(parsedCart);
    const stringifiedTotalPrice: string =
      localStorage.getItem("totalPrice") ?? "0";
    setTotalPrice(+stringifiedTotalPrice);
  }, []);
  const saveCart = (cart: Array<productInterface>) => {
    localStorage.setItem("cart", JSON.stringify(cart));
    setProducts(cart);
  };
  const changeTotalPrice = (type: string, productPrice: number) => {
    let newTotal;
    if (type === "+") {
      newTotal = totalPrice + productPrice;
    } else {
      newTotal = totalPrice - productPrice;
    }

    localStorage.setItem("totalPrice", String(newTotal));
    setTotalPrice(newTotal);
  };
  const decreaseQuantity = (product: productInterface) => {
    const newCart: Array<productInterface> = [...products];
    const productIndex: number = products.findIndex(
      (item: productInterface) => product.id === item.id
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
    saveCart(newCart);
    changeTotalPrice("-", product.price);
  };

  const increaseQuantity = (product: productInterface) => {
    const newCart: Array<productInterface> = [...products];
    const productIndex: number = products.findIndex(
      (item: productInterface) => product.id === item.id
    );

    const oldProduct: productInterface = products[productIndex];
    newCart[productIndex] = {
      ...oldProduct,
      quantity: (oldProduct.quantity += 1),
    };
    saveCart(newCart);

    changeTotalPrice("+", product.price);
  };

  return (
    <>
      <Grid templateColumns="repeat(1, 1fr)" gap={6}>
        {products.map((product: productInterface) => (
          <GridItem key={product.title}>
            <CartProductCardOrganism
              product={product}
              minus={decreaseQuantity}
              plus={increaseQuantity}
            />
          </GridItem>
        ))}
      </Grid>

      <h1>total price: {handleCurrency(totalPrice)}</h1>
    </>
  );
}
