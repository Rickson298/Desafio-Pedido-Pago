export function formatStatusToPortuguese(status: string): string {
  if (status === "active") {
    return "Ativo";
  }
  return "Inativo";
}
