import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { DetalhesColaborador } from "../../components/templates/detalhesColaborador/DetalhesColaborador";

export default function PageDetalhesColaborador() {
  const {
    query: { idColaborador },
  } = useRouter();

  const [idColaboradorState, setIdColaboradorState] = useState<
    string | string[]
  >();
  useEffect(() => {
    setIdColaboradorState(idColaborador);
  }, [idColaborador]);

  return <DetalhesColaborador idColaborador={idColaboradorState} />;
}
