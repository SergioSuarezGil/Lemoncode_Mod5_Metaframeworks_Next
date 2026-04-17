export function normalize(str: string): string {
  return str.normalize('NFD').replace(/\p{Diacritic}/gu, '');
}
