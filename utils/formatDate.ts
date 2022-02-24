import { format } from "date-fns";

export function formatDate(date: string | undefined) {
  if (date) {
    let dateFormatted = format(new Date(date), "dd/MM/yyyy");

    return dateFormatted;
  }
}
