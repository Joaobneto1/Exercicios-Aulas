export function convertToReal(price: number) {
  const options = {
    style: "currency",
    currency: "BRL",
  };
  return new Intl.NumberFormat("pt-BR", options).format(price / 100);
}
