import colors from "@/app/constants/colors";
import ButtonAtom from "../atoms/button";
import ProductMolecule from "./productMolecule";
import { productInterface } from "@/app/types";

interface cardMoleculesInterface {
  product: productInterface;
  onClick: (product: productInterface) => void;
}

const ProductCardMolecule = ({
  product,
  onClick = () => {},
}: cardMoleculesInterface) => {
  return (
    <>
      <ProductMolecule product={product} />
      <ButtonAtom
        text="add to cart"
        onClick={() => {
          onClick(product);
        }}
        color={colors.blue}
      />
    </>
  );
};
export default ProductCardMolecule;
