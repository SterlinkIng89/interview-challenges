export default function filtrarPares(array: unknown[]): unknown[] {
  let result: unknown[] = [];
  let map = new Map<unknown, number>();

  for (const item of array) {
    const count = map.get(item) || 0;
    map.set(item, count + 1);
  }

  map.forEach((value, key) => {
    if (value % 2 === 0) {
      result.push(key);
    }
  });

  return result;
}

console.log(filtrarPares([1, 2, 3, 1, 2]));
