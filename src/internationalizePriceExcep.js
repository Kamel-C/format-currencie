// To be filled with more exceptions
export const currenciesException = ["CLP", "COP", "ARS", "MXN", "PEN"];
const latamCurrencies = ["CLP", "COP", "ARS", "MXN", "PEN"];

// To be filled with more rules
export function specificRules(value, currency) {
  if (latamCurrencies.includes(currency)) {
    return latamRules(value, currency);
  }
}

// Formats asked by Kaspersky
// MXN 124,336.85 , COP 490.358,78
function latamRules(value, currency) {
  let dotCommaformated = new Intl.NumberFormat("de-DE").format(value);
  let commaDotformated = new Intl.NumberFormat("en-US").format(value);
  const dotComma = ["CLP", "COP"];
  const commaDot = ["ARS", "MXN", "PEN"];

  if (dotComma.includes(currency)) {
    return `${currency} ${dotCommaformated}`;
  } else if (commaDot.includes(currency)) {
    return `${currency} ${commaDotformated}`;
  } else {
    throw new Error("SOMETHING WRONG HAPPENED.");
  }
}
