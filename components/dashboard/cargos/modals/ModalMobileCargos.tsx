import { ModalMobile } from "../../../modalMobile/ModalMobile";
import { DefaultContentModalCargos } from "./DefaultContentModalCargos";
import { PropsModalMobileCargos } from "./types";

export const ModalMobileCargos: React.FC<PropsModalMobileCargos> = ({
  setEndPointByOption,
  isOpenModalMobile,
  setIsOpenModalMobile,
  ...rest
}) => {
  return (
    <ModalMobile
      setIsOpenModalMobile={setIsOpenModalMobile}
      isOpenModalMobile={isOpenModalMobile}
      {...rest}
    >
      <DefaultContentModalCargos />
    </ModalMobile>
  );
};
