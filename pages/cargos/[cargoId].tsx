import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CargosPermissoes } from "../../components/templates/PermissoesCargos/PermissoesCargo";

export default function PageCargosPermissoes() {
  const {
    query: { cargoId },
  } = useRouter();

  const [cargoIsState, setCargoIdState] = useState<string | string[]>();
  useEffect(() => {
    setCargoIdState(cargoId);
  }, [cargoId]);

  return <CargosPermissoes cargoId={cargoIsState} />;
}
