import { Card, CardBody, CardFooter, Stack } from "@chakra-ui/react";
import ImageAtom from "../atoms/image";
import TextAtom from "../atoms/text";
import { productInterface } from "@/app/types";
interface ProductMoleculePropsInterface {
  product: productInterface;
  children?: React.ReactNode;
}

const ProductMolecule = ({
  product,
  children,
}: ProductMoleculePropsInterface) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <ImageAtom
          src={product.thumbnail}
          alt={`${product.title} image`}
          width={300}
          height={300}
        />
        <Stack mt="6" spacing="3">
          <TextAtom text={product.title} />
          <TextAtom text={product.description} />
          <TextAtom text={product.price} />
        </Stack>
      </CardBody>
      <CardFooter>{children}</CardFooter>
    </Card>
  );
};
export default ProductMolecule;
