"use client";
import colors from "@/app/constants/colors";
import ButtonAtom from "../atoms/button";
import ImageAtom from "../atoms/image";
import TextAtom from "../atoms/text";

interface cardMoleculesInterface {
  thumbnail: string;
  title: string;
  price: number;
  description: string;
}

const CardMolecule = ({
  thumbnail,
  title,
  price,
  description,
}: cardMoleculesInterface) => {
  return (
    <>
      <ImageAtom src={thumbnail} alt={`${title} image`} />
      <TextAtom text={title} />
      <TextAtom text={description} />
      <TextAtom text={price} />
      <ButtonAtom
        text="add to cart"
        onClick={() => {
          console.log("add to cart button called");
        }}
        color={colors.primary}
      />
    </>
  );
};
export default CardMolecule;
