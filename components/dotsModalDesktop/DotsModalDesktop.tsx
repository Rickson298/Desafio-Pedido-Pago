/* eslint-disable @next/next/no-img-element */
import { Dots } from "../dots/Dots";
import { Modal } from "../modal/Modal";

export const DotsModalDesktop: React.FC = ({ children }) => {
  return (
    <div style={{ position: "relative" }}>
      <Dots />
      <Modal>{children}</Modal>
    </div>
  );
};
