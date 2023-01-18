export function secondsToHms(input: number | null): string {
  if (input === null) {
    return "-";
  }

  const hours = Math.floor(input / 3600);
  const minutes = Math.floor(input / 60) % 60;
  const seconds = Math.floor(input % 60);

  return [hours, minutes, seconds]
    .map((v) => (v < 10 ? `0${v}` : v))
    .filter((v, i) => v !== "00" || i > 0)
    .join(":");
}
