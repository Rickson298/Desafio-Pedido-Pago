/* eslint-disable @next/next/no-img-element */
import { Dots } from "../../atoms/dots/Dots";
import { ModalDesktop } from "../../atoms/modal/ModalDesktop";

export const DotsModalDesktop: React.FC = ({ children }) => {
  return (
    <div style={{ position: "relative" }}>
      <Dots />
      <ModalDesktop>{children}</ModalDesktop>
    </div>
  );
};
