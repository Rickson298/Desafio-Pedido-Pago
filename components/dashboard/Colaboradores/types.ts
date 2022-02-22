export interface IDataColaboradores {
  agent_id: number;
  branch: string;
  department: string;
  image: string;
  name: string;
  role: string;
  status: string;
}

export interface PropsColaboradores {
  data: IDataColaboradores[];
  onChangeInput: () => void;
}
