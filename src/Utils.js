export function calculateSum(strings) {
  if (!strings.trim()) {
    return 0;
  }
  const sanitizedString = strings.replace(/,+$/, "");
  const numbers = sanitizedString.match(/-?\d+/g);

  if (!numbers || sanitizedString.split(",").some((num) => num.trim() === "")) {
    throw new Error("Invalid input: Only numbers and commas are allowed");
  }
  const numArray = numbers.map((num) => parseInt(num, 10));
  const negativeNumbers = numArray.filter((num) => num < 0);
  if (negativeNumbers.length > 0) {
    throw new Error(
      `Negative numbers not allowed: ${negativeNumbers.join(", ")}`
    );
  }
  return numArray.reduce((sum, num) => sum + num, 0);
}
