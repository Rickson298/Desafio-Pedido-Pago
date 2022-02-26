export interface PropsCargos {
  data: IDataCargos[];
  onChangeInput: () => void;
}

export interface IDataCargos {
  departament: string;
  agents_quantity: string;
  name: string;
}
