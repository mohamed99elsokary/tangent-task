import ImageAtom from "../atoms/image";
import TextAtom from "../atoms/text";
interface productInterface {
  product: {
    id: number;
    title: string;
    description: string;
    price: number;
    thumbnail: string;
  };
}

const ProductMolecule = ({ product }: productInterface) => {
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
    </>
  );
};
export default ProductMolecule;
