export function calculateSum(strings) {
  // trim the string
  if (!strings.trim()) {
    return 0;
  }
  // get number from string
  const sanitizedString = strings.replace(/,+$/, "");
  const numbers = sanitizedString.match(/-?\d+/g);

  // return error if no numbers are there
  if (!numbers || sanitizedString.split(",").some((num) => num.trim() === "")) {
    throw new Error("Invalid input: Only numbers and commas are allowed");
  }

  // get numeric array from elements and seprate the negative and positive numbers
  const numArray = numbers.map((num) => parseInt(num, 10));
  const negativeNumbers = numArray.filter((num) => num < 0);
  if (negativeNumbers.length > 0) {
    throw new Error(
      `Negative numbers not allowed: ${negativeNumbers.join(", ")}`
    );
  }
  return numArray.reduce((sum, num) => sum + num, 0);
}
