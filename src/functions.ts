const ones = [
  "",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];
const tens = [
  "",
  "",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];

export function convertToWords(n: number, s?: string): string {
  if (n === 0) return "";
  else if (n < 20) return ones[n] + " " + s;
  else if (n < 100)
    return tens[Math.floor(n / 10)] + " " + convertToWords(n % 10, s);
  else if (n < 1000)
    return ones[Math.floor(n / 100)] + " hundred " + convertToWords(n % 100, s);
  else if (n < 1000000)
    return (
      ones[Math.floor(n / 1000)] + " thousand, " + convertToWords(n % 1000, s)
    );
  else if (n < 1000000000)
    return (
      ones[Math.floor(n / 1000000)] +
      " million, " +
      convertToWords(n % 1000000, s)
    );
  else if (n < 1000000000000)
    return (
      ones[Math.floor(n / 1000000000)] +
      " billion, " +
      convertToWords(n % 1000000000, s)
    );
  else
    return (
      ones[Math.floor(n / 1000000000000)] +
      " trillion, " +
      convertToWords(n % 1000000000000, s)
    );
}

export function convertCurrency(
  money: number,
  currency: string,
  cent?: string
) {
  const main = Math.floor(money);
  const sub = Math.round((money - main) * 100);
  if (currency === "aed")
    return (
      convertToWords(main, "dirhams") + " and " + convertToWords(sub, "fils")
    );
  else if (currency === "usd")
    return (
      convertToWords(main, "dollars") + " and " + convertToWords(sub, "cents")
    );
  else if (currency === "inr")
    return (
      convertToWords(main, "rupees") + " and " + convertToWords(sub, "paise")
    );
  else if (currency === "euro")
    return (
      convertToWords(main, "euros") + " and " + convertToWords(sub, "cents")
    );
  else if (currency === "gbp")
    return (
      convertToWords(main, "pounds") + " and " + convertToWords(sub, "pence")
    );
  else if (currency === "sar")
    return (
      convertToWords(main, "riyals") + " and " + convertToWords(sub, "halalas")
    );
  else if (currency === "omr")
    return (
      convertToWords(main, "rials") + " and " + convertToWords(sub, "baisa")
    );
  else if (cent)
    return convertToWords(main, currency) + " and " + convertToWords(sub, cent);
  else throw new Error("Parameters incorrect.");
}
