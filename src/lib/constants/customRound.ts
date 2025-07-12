export function customRound(number: number) {
  const intPart = Math.floor(number);
  const decPart = number - intPart;

  if (decPart < 0.5) {
    return intPart;
  } else if (decPart > 0.5) {
    return intPart + 1;
  } else {
    return number;
  }
}
