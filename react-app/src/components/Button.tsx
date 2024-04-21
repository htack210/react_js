import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  // The question mark makes color is optional since the default is set to primary.
  color?: "primary" | "seconday" | "danger" | "success";
  onClick: () => void;
}
const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
