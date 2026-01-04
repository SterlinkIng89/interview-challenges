export default function letrasPorNumeros(string: string): string {
  return string
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase()
    .replace(/\s/g, "")
    .split("")
    .map((char) => char.charCodeAt(0) - 96)
    .join(" ");
}

// Just clean up the string an then split, map each char, join and return

console.log(letrasPorNumeros("abc def"));
