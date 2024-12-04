import { getInput } from "/utils/getInput.ts";

const input = getInput(3, 1);

const regex = /mul\((\d+),(\d+)\)/g;

function solve(input: string) {
  let result = 0;

  const matches = input.match(regex) ?? [];

  for (const match of matches) {
    const [a, b] = match.slice(4, -1).split(",");
    result += +a * +b;
  }

  return result;
}

console.log(solve(input)); // 165225049
