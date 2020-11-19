import { currencyList } from "./CountriesCurrencies";
import {
  currenciesException,
  specificRules,
} from "./internationalizePriceExcep";

class Internationalize {
  static BROWSER_COUNTRY = window.navigator.language;

  // It gets the currency from an object stored in CountriesCurrencies.ts
  static getCountryCurrency(language) {
    let currencyCode;
    let countryCode =
      language || language === undefined ? language : this.BROWSER_COUNTRY;

    if (countryCode.length > 2) {
      countryCode = countryCode.slice(3).toUpperCase();
    } else {
      countryCode = countryCode.toUpperCase();
    }

    Object.keys(currencyList).forEach((key) => {
      if (key.toString() === countryCode) {
        currencyCode = currencyList[key];
        return currencyCode;
      }
      return null;
    });
    return currencyCode;
  }

  // It sets a default locale
  static defaultLocale(locale) {
    return locale && locale !== undefined ? locale : this.BROWSER_COUNTRY;
  }

  // It format the currency
  static formatCurrency(value, locale, currency) {
    if (value % 1 === 0) {
      return value.toLocaleString(locale, {
        style: "currency",
        currency,
      });
    }
    return value.toLocaleString(locale, {
      style: "currency",
      currency,
      minimumFractionDigits: 2,
    });
  }

  // To be used with the customer browser.
  // Intl api manages the way to show the prices.
  static setInternationalize(data) {
    let { value, locale, currency } = data;
    try {
      value = typeof value === "number" ? value : parseFloat(value);
      locale = locale === undefined ? this.defaultLocale(locale) : locale;
      currency =
        currency === undefined ? this.getCountryCurrency(locale) : currency;

      if (value) {
        if (currenciesException.includes(currency)) {
          return specificRules(value, currency);
        }
        return this.formatCurrency(value, locale, currency);
      } else {
        return this.formatCurrency(0, locale, currency);
      }
    } catch (err) {
      console.log(`ERROR INTERNATIONALIZE FUNCTION:: ${err.message}`);
      if (value) {
        return new Intl.NumberFormat("en-US").format(value);
      }
    }
    return null;
  }
}

export default Internationalize;
