export default function esIsograma(string: string): boolean {
  if (string.length === 0) {
    return true;
  }

  if (string.split(" ").length > 1) {
    return false;
  }

  const cleanString = string
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase();

  return new Set(cleanString).size === cleanString.length;
}

console.log("result:", esIsograma("Murciélago"));
