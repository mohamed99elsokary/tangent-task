export interface imageAtomInterface {
  src: string;
  alt: string;
  size?: "xs" | "sm" | "md" | "lg";
}
export interface ButtonInterface {
  color: string;
  text: string;
  size?: "xs" | "sm" | "md" | "lg";
  onClick: () => void;
}
export interface TextInterface {
  text: string;
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
