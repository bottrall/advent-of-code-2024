import { getInput } from "/utils/getInput.ts";

const input = getInput(1, 1);

function solve(input: string, log: boolean = false) {
  const lines = input.split("\n");

  const left: number[] = [];
  const right: number[] = [];

  for (const line of lines) {
    const [l, r] = line.split("   ");

    left.push(+l);
    right.push(+r);
  }

  left.sort();
  right.sort();

  let distance = 0;

  for (let i = 0; i < left.length; i++) {
    const l = left[i];
    const r = right[i];

    distance += Math.abs(l - r);
  }

  if (log) {
    console.log(distance);
  }

  return distance;
}

let isFirst = true;

Deno.bench("day_1.1", () => {
  solve(input, isFirst);
  isFirst = false;
});

solve(input, true);
