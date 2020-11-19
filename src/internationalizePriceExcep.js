// To be filled with more exceptions
export const currenciesException = ["CLP", "COP", "ARS", "MXN", "PEN"];
const latamCurrencies = ["CLP", "COP", "ARS", "MXN", "PEN"];

// Formats asked by the CSM
// MXN 124,336.85 , COP 490.358,78
function latamRules(value, currency) {
  const dotCommaformated = value.toLocaleString("de-DE");
  const commaDotformated = value.toLocaleString("en-US");
  const dotComma = ["CLP", "COP"];
  const commaDot = ["ARS", "MXN", "PEN"];

  if (dotComma.includes(currency)) {
    return `${currency} ${dotCommaformated}`;
  } else if (commaDot.includes(currency)) {
    return `${currency} ${commaDotformated}`;
  }
  throw new Error("SOMETHING WRONG HAPPENED.");
}

// To be filled with more rules
export function specificRules(value, currency) {
  if (latamCurrencies.includes(currency)) {
    return latamRules(value, currency);
  }
  return null;
}
