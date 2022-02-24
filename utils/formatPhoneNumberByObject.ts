export function formatPhoneNumberByObject(
  ddi: string,
  ddd: string,
  number: string
) {
  if (ddi && ddi && number) {
    let numberFormatted = `+${ddi} ${ddd} ${number.slice(0, 5)} ${number.slice(
      5,
      number.length
    )}`;
    return numberFormatted;
  }
}
