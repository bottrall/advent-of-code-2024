import { getInput } from "/utils/getInput.ts";

const input = getInput(2, 1);
const answer = 463;

function solve(input: string) {
  const reports = input.split("\n");

  let safe = 0;

  for (const report of reports) {
    const levels = report.split(" ").map(Number);

    let isIncreasing = false;
    let isDecreasing = false;

    let graduallyIncreasing = true;

    for (let i = 0; i < levels.length - 1; i++) {
      const level = levels[i];
      const nextLevel = levels[i + 1];

      if (level < nextLevel) {
        isIncreasing = true;
      }

      if (level > nextLevel) {
        isDecreasing = true;
      }

      if (isIncreasing && isDecreasing) {
        break;
      }

      const diff = Math.abs(level - nextLevel);

      if (diff < 1 || diff > 3) {
        graduallyIncreasing = false;
        break;
      }
    }

    if (graduallyIncreasing && !(isIncreasing && isDecreasing)) {
      safe++;
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
