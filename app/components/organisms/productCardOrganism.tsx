import colors from "@/app/constants/colors";
import ButtonAtom from "../atoms/button";
import { productInterface } from "@/app/types";
import ProductMolecule from "../molecules/productMolecule";

interface cardMoleculesInterface {
  product: productInterface;
  onClick: (product: productInterface) => void;
}

const ProductCardOrganism = ({
  product,
  onClick = () => {},
}: cardMoleculesInterface) => {
  return (
    <>
      <ProductMolecule product={product}>
        <ButtonAtom
          text="add to cart"
          onClick={() => {
            onClick(product);
          }}
          color={colors.blue}
        />
      </ProductMolecule>
    </>
  );
};
export default ProductCardOrganism;
