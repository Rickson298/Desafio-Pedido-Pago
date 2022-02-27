import { IconCardPersonalInfo } from "../../atoms/iconCardPersonalInfo/IconCardPersonalInfo";
import * as C from "./styles";

interface IPropCardColaborador {
  // iconSrc: string;
  cardName: string | undefined;
  cardInfo: string | undefined;
}

export const CardPersonalInfo: React.FC<IPropCardColaborador> = ({
  // iconSrc,
  cardInfo,
  cardName,
}) => (
  <C.Container>
    <IconCardPersonalInfo />
    <C.ContainerCardPersonalInfo>
      <span className="card-name">{cardName || "Carregando..."}</span>
      <span className="card-info">{cardInfo || "Carregando..."}</span>
    </C.ContainerCardPersonalInfo>
  </C.Container>
);
