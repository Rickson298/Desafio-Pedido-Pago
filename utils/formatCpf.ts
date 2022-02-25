export function formatCpf(cpf: string) {
  let cpfFormatted = cpf?.replace(
    /(\d{3})(\d{3})(\d{3})(\d{2})/,
    "$1 $2 $3 $4"
  );
  return cpfFormatted;
}
