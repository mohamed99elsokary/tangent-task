import Image from "next/image";
import { imageAtomInterface } from "./types";

const ImageAtom = ({ src, alt, width, height }: imageAtomInterface) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      style={{
        maxWidth: width,
        maxHeight: height,
      }}
    />
  );
};
export default ImageAtom;
