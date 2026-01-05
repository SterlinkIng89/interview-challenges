type Input = {
  nombres: string[];
  edades: number[];
};

type Output = {
  id: number;
  nombre: string;
  edad: number;
};

export default function transformador(input: Input): Output[] {
  if (input.nombres.length !== input.edades.length) {
    return [];
  }

  let result = [];

  for (let i = 0; i < input.nombres.length; i++) {
    result.push({ id: i + 1, nombre: input.nombres[i], edad: input.edades[i] });
  }

  return result;
}

console.log(transformador({ nombres: ["Bruno", "Andrea"], edades: [20, 19] }));
