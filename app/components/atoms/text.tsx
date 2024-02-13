import { Text } from "@chakra-ui/react";
import { TextInterface } from "./types";
import colors from "@/app/constants/colors";

const TextAtom = ({
  text,
  size = "sm",
  color = colors.black,
}: TextInterface) => {
  return (
    <Text fontSize={size} color={color} >
      {text}
    </Text>
  );
};
export default TextAtom;
