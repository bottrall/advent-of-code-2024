import { getInput } from "/utils/getInput.ts";

const input = getInput(2, 2);
const answer = 514;

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

function isSafe(report: string, remove: number = -1) {
  const levels = report.split(" ").map(Number);

  if (remove >= 0) {
    levels.splice(remove, 1);
  }

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

  if (safe) {
    return true;
  }

  if (remove === levels.length) {
    return false;
  }

  return isSafe(report, remove + 1);
}

Deno.bench("day_2.2", () => {
  const res = solve(input);

  if (res !== answer) {
    throw new Error(`Expected ${answer}, got ${res}`);
  }
});

console.log(solve(input));
