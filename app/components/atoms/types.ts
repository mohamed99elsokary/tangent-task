export interface imageAtomInterface {
  src: string;
  alt: string;
  width: number;
  height: number;
}
export interface ButtonInterface {
  color?: string;
  text: string;
  size?: "xs" | "sm" | "md" | "lg";
  onClick: () => void;
}
export interface TextInterface {
  text: string | number;
  color?: string;
  size?:
    | "6xl"
    | "5xl"
    | "4xl"
    | "3xl"
    | "2xl"
    | "xl"
    | "lg"
    | "md"
    | "sm"
    | "xs";
}
