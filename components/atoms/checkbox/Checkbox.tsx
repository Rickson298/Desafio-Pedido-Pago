import { BsCheck } from "react-icons/bs";
import * as C from "./styles";

export interface PropsCheckbox {
  checked?: boolean;
}

const Checkbox: React.FC<PropsCheckbox> = ({ checked }) => {
  return (
    <C.Container checked={checked}>
      <BsCheck size={20} />
    </C.Container>
  );
};
export default Checkbox;
