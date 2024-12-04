import { getInput } from "../../utils/getInput.ts";

const input = getInput(3, 1);

const re = /mul\((\d+),(\d+)\)/g;

function solve(input: string) {
  let match: RegExpMatchArray | null = null;
  let result = 0;

  while ((match = re.exec(input)) != null) {
    const [_, a, b] = match;
    result += +a * +b;
  }

  return result;
}

console.log(solve(input)); // 165225049
