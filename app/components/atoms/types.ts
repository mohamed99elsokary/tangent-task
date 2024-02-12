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
