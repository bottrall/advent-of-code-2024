import { getInput } from "../../utils/getInput.ts";

const input = getInput(3, 2);

const multiplyRegex = /mul\((\d+),(\d+)\)/;
const doRegex = /do\(\)/;
const doNotRegex = /don't\(\)/;

const re = new RegExp(
  `(${multiplyRegex.source}|${doRegex.source}|${doNotRegex.source})`,
  "g"
);

function solve(input: string) {
  let match: RegExpMatchArray | null = null;
  let enabled = true;
  let result = 0;

  while ((match = re.exec(input)) !== null) {
    const [value, _, a, b] = match;

    if (doRegex.test(value)) {
      enabled = true;
      continue;
    }

    if (doNotRegex.test(value)) {
      enabled = false;
      continue;
    }

    if (enabled && multiplyRegex.test(value)) {
      result += +a * +b;
    }
  }

  return result;
}

console.log(solve(input)); // 108830766
