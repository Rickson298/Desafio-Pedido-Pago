/* eslint-disable @next/next/no-img-element */

import { DotsModalDesktop } from "../../../dotsModalDesktop/DotsModalDesktop";

export const ModalDesktopColaboradores = () => {
  return (
    <DotsModalDesktop>
      <span>
        <img alt="Olho" src="/icons/eye-icon.png" className="eye-icon" /> Ver
        colaborador
      </span>
      <span>
        <img alt="Lixeira" className="trash-icon" src="icons/delete-icon.png" />
        Excluir
      </span>
    </DotsModalDesktop>
  );
};
