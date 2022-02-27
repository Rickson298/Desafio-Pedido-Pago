import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export const DefaultContentModalCargos = () => (
  <>
    <Link href="/cargos/1">
      <a>
        <img alt="Ver cargo" src="/icons/eye-icon.png" className="eye-icon" />{" "}
        Ver cargo
      </a>
    </Link>
    <button className="disable">
      <img alt="Editar" src="/icons/edit-icon.png" /> Editar
    </button>
    <button className="disable">
      <img alt="Duplcar" src="/icons/duplicate-icon.png" />
      Duplicar
    </button>
    <button className="disable">
      <img alt="Excluir" src="icons/delete-icon.png" /> Excluir
    </button>
  </>
);
