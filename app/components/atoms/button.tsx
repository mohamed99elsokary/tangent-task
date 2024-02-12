import { Button } from "@chakra-ui/react";
import { ButtonInterface } from "./types";
import colors from "@/app/constants/colors";

const ButtonAtom = ({
  color = colors.primary,
  text,
  size = "sm",
  onClick = () => {},
}: ButtonInterface) => {
  return (
    <Button colorScheme={color} onClick={onClick} size={size}>
      {text}
    </Button>
  );
};
export default ButtonAtom;
