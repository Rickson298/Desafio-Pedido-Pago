/* eslint-disable @next/next/no-img-element */
import { Dots } from "./Dots";
import { Modal } from "./Modal";

export const DotsModal: React.FC = ({ children }) => {
  return (
    <div style={{ position: "relative" }}>
      <Dots />
      <Modal>{children}</Modal>
    </div>
  );
};
