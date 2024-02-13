import colors from "@/app/constants/colors";
import ButtonAtom from "../atoms/button";
import ProductMolecule from "./productMolecule";
import TextAtom from "../atoms/text";
import { productInterface } from "@/app/types";

interface cardMoleculesInterface {
  product: productInterface;
  minus: (product: productInterface) => void;
  plus: (product: productInterface) => void;
}

const CartProductCardMolecule = ({
  product,
  minus = () => {},
  plus = () => {},
}: cardMoleculesInterface) => {
  return (
    <>
      <ProductMolecule product={product} />

      <ButtonAtom
        text="-"
        onClick={() => {
          minus(product);
        }}
        color={colors.gray}
      />
      <TextAtom text={product.quantity} />
      <ButtonAtom
        text="+"
        onClick={() => {
          plus(product);
        }}
        color={colors.gray}
      />
    </>
  );
};
export default CartProductCardMolecule;
