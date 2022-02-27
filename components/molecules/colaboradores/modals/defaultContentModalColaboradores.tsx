import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export const DefaultContentModalColaboradores = () => (
  <>
    <Link href="/colaboradores/1">
      {/* Em um projeto real o id do colaborador seria passado por prop */}
      <a>
        <img alt="Olho" src="/icons/eye-icon.png" className="eye-icon" /> Ver
        colaborador
      </a>
    </Link>
    <button>
      <img alt="Lixeira" className="trash-icon" src="icons/delete-icon.png" />
      Excluir
    </button>
  </>
);
