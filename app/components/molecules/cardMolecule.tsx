"use client";
import colors from "@/app/constants/colors";
import ButtonAtom from "../atoms/button";
import ImageAtom from "../atoms/image";
import TextAtom from "../atoms/text";
interface productInterface {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}
interface cardMoleculesInterface {
  product: productInterface;
  onClick: (product: productInterface) => void;
}

const CardMolecule = ({
  product,
  onClick = () => {},
}: cardMoleculesInterface) => {
  return (
    <>
      <ImageAtom
        src={product.thumbnail}
        alt={`${product.title} image`}
        width={300}
        height={300}
      />
      <TextAtom text={product.title} />
      <TextAtom text={product.description} />
      <TextAtom text={product.price} />
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
export default CardMolecule;
