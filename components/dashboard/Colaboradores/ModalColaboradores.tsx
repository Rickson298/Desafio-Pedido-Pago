/* eslint-disable @next/next/no-img-element */
import { DotsModal } from "../../dotsModal/DotsModal";

export const ModalColaboradores = () => {
  return (
    <DotsModal>
      <span>
        <img alt="Olho" src="/icons/eye-icon.png" className="eye-icon" /> Ver
        colaborador
      </span>
      <span>
        <img alt="Lixeira" className="trash-icon" src="icons/trash-icon.png" />
        Excluir
      </span>
    </DotsModal>
  );
};
