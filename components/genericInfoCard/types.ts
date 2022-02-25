export interface PropsStyleGenericInfoCard {
  background?: string;
  color?: string;
  border?: string;
  width?: string;
}

export interface PropsGenericInfoCard extends PropsStyleGenericInfoCard {
  label: string;
  info: string | number;
}
