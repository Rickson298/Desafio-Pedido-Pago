import { ModalMobile } from "../../../atoms/modalMobile/ModalMobile";
import { DefaultContentModalColaboradores } from "./defaultContentModalColaboradores";

interface props {
  setEndPointByOption?: React.Dispatch<React.SetStateAction<string>>;
  isOpenModalMobile: boolean;
  setIsOpenModalMobile: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalMobileColaboradores: React.FC<props> = ({
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
      <DefaultContentModalColaboradores />
    </ModalMobile>
  );
};
