/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { DotsModalDesktop } from "../../dotsModalDesktop/DotsModalDesktop";
import { DefaultContentModalColaboradores } from "./defaultContentModalColaboradores";

export const ModalDesktopColaboradores = () => {
  return (
    <DotsModalDesktop>
      <DefaultContentModalColaboradores />
    </DotsModalDesktop>
  );
};
