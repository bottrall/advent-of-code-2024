import { getInput } from "/utils/getInput.ts";

const input = getInput(2, 1);
const answer = 463;

function solve(input: string) {
  const reports = input.split("\n");

  let safe = 0;

  for (const report of reports) {
    if (isSafe(report)) {
      safe++;
    }
  }

  return safe;
}

function isSafe(report: string) {
  const levels = report.split(" ").map(Number);

  let isIncreasing = false;
  let isDecreasing = false;

  let safe = true;

  for (let i = 0; i < levels.length - 1; i++) {
    const level = levels[i];
    const nextLevel = levels[i + 1];

    if (!isIncreasing && level < nextLevel) {
      isIncreasing = true;
    }

    if (!isDecreasing && level > nextLevel) {
      isDecreasing = true;
    }

    if (isIncreasing && isDecreasing) {
      safe = false;
      break;
    }

    const diff = Math.abs(level - nextLevel);

    if (diff < 1 || diff > 3) {
      safe = false;
      break;
    }
  }

  return safe;
}

console.log(solve(input));

Deno.bench("day_2.1", () => {
  const res = solve(input);

  if (res !== answer) {
    throw new Error(`Expected ${answer}, got ${res}`);
  }
});
