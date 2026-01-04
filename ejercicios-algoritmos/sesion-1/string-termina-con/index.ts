export default function stringTerminaCon(
  string: string,
  final: string
): boolean {
  if (final.length > string.length) {
    return false;
  }

  const end = string.slice(-final.length);

  return end === final;
}

console.log(stringTerminaCon("abc", "bc"));
