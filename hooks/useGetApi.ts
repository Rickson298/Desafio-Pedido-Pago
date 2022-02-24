import { useState } from "react";
import { api } from "../pages/api/baseUrl";

interface Props {
  fetchData: () => Promise<void>;
  data: object[];
  isLoading: boolean;
}

export function useGetApi(): any[] {
  const [data, setData] = useState<Object[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function fetchData(
    endPoint: string,
    queryParams: string = ""
  ): Promise<void> {
    setIsLoading(true);
    let { data } = await api.get(endPoint);
    setData(data);
    setIsLoading(false);
  }
  return [fetchData, data, isLoading];
}
