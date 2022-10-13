export function parsePrice(price: number): string {
  return new Intl.NumberFormat('de-DE').format(price);
}
