import { ModalMobile } from "../../atoms/modalMobile/ModalMobile";

interface PropsModalMobileCategories {
  setEndPointByOption: React.Dispatch<React.SetStateAction<string>>;
  isOpenModalMobile: boolean;
  setIsOpenModalMobile: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalMobileCategories: React.FC<PropsModalMobileCategories> = ({
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
      <span className="title">Categorias</span>
      <span className="link" onClick={() => setEndPointByOption("/agents")}>
        Colaboradores
      </span>
      <span className="link" onClick={() => setEndPointByOption("/roles")}>
        Cargos
      </span>
    </ModalMobile>
  );
};
