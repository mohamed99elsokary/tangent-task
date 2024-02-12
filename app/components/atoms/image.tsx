import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { imageAtomInterface } from "./types";

const ImageAtom = ({ src, alt, size = "sm" }: imageAtomInterface) => {
  return (
    <Box boxSize={size}>
      <Image src={src} alt={alt} />
    </Box>
  );
};
export default ImageAtom;
