"use client";
import colors from "@/app/constants/colors";
import ButtonAtom from "../atoms/button";
import { productInterface } from "@/app/types";
import ProductMolecule from "../molecules/productMolecule";

interface cardMoleculesInterface {
  product: productInterface;
}
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
};
const ProductCardOrganism = ({ product }: cardMoleculesInterface) => {
  return (
    <>
      <ProductMolecule product={product}>
        <ButtonAtom
          text="add to cart"
          onClick={() => {
            addToCart(product);
          }}
          color={colors.blue}
        />
      </ProductMolecule>
    </>
  );
};
export default ProductCardOrganism;
