export function getInput(day: number, puzzle: number) {
  return Deno.readTextFileSync(
    `${Deno.cwd()}/day_${day}//puzzle_${puzzle}/input.txt`
  );
}
