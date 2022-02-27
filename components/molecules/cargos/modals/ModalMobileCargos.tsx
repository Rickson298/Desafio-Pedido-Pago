import { ModalMobile } from "../../../atoms/modalMobile/ModalMobile";
import { DefaultContentModalCargos } from "./DefaultContentModalCargos";

interface PropsModalMobileCargos {
  setEndPointByOption?: React.Dispatch<React.SetStateAction<string>>;
  isOpenModalMobile: boolean;
  setIsOpenModalMobile: React.Dispatch<React.SetStateAction<boolean>>;
}

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
