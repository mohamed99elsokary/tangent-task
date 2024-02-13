import colors from "@/app/constants/colors";
import ButtonAtom from "../atoms/button";
import TextAtom from "../atoms/text";
import { productInterface } from "@/app/types";
import { Flex } from "@chakra-ui/react";
import ProductMolecule from "../molecules/productMolecule";

interface cardMoleculesInterface {
  product: productInterface;
  minus: (product: productInterface) => void;
  plus: (product: productInterface) => void;
}

const CartProductCardOrganism = ({
  product,
  minus = () => {},
  plus = () => {},
}: cardMoleculesInterface) => {
  return (
    <ProductMolecule product={product}>
      <Flex alignItems="center">
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
      </Flex>
    </ProductMolecule>
  );
};
export default CartProductCardOrganism;
