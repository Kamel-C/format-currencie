import React from "react";
import Interanationalize from "./Internationalize";

export default function App() {
  return (
    <div>
      <p>locale correspond à locale, value à value et currency... à currency</p>

      <hr />

      <h5>Fonctionnement et affichage</h5>

      <p>
        France avec absence de prix, du pays et de la currency:{" "}
        {Interanationalize.setInternationalize({})}
      </p>

      <p>
        France avec toutes les infos:{" "}
        {Interanationalize.setInternationalize({
          value: 120,
          locale: "fr-FR",
          currency: "EUR",
        })}
      </p>

      <p>
        France avec detection du pays:{" "}
        {Interanationalize.setInternationalize({
          value: 120000,
          currency: "EUR",
        })}
      </p>

      <p>
        France avec detection du pays et de la currency:{" "}
        {Interanationalize.setInternationalize({
          value: 120,
        })}
      </p>

      <p>
        France avec toutes locale undefined:{" "}
        {Interanationalize.setInternationalize({
          value: 120,
          locale: "fr-FR",
          currency: undefined,
        })}
      </p>

      <p>
        France avec toutes currency undefined:{" "}
        {Interanationalize.setInternationalize({
          value: 120,
          locale: undefined,
          currency: "EUR",
        })}
      </p>

      <p>
        France avec toutes locale et currency undefined:{" "}
        {Interanationalize.setInternationalize({
          value: 120,
          locale: undefined,
          currency: undefined,
        })}
      </p>

      <hr />

      <h5>Affichage souhaité par le csm</h5>
      <p>
        Argentina:{" "}
        {Interanationalize.setInternationalize({
          value: 7290,
          locale: "fr-FR",

          currency: "ARS",
        })}
      </p>
      <p>
        Chile:{" "}
        {Interanationalize.setInternationalize({
          value: 120000,
          locale: "fr-FR",
          currency: "CLP",
        })}
      </p>
      <p>
        Colombia:{" "}
        {Interanationalize.setInternationalize({
          value: 490215,
          locale: "fr-FR",

          currency: "COP",
        })}
      </p>
      <p>
        Peru:{" "}
        {Interanationalize.setInternationalize({
          value: 120000,
          locale: "fr-FR",

          currency: "PEN",
        })}
      </p>
      <p>
        Mexico:{" "}
        {Interanationalize.setInternationalize({
          value: 120000.45,
          locale: "fr-FR",

          currency: "MXN",
        })}
      </p>

      <hr />

      <h5>Autres exemples avec différentes valeurs.</h5>

      <p>
        {Interanationalize.setInternationalize({
          value: 120,
          locale: "de-DE",
          currency: "EUR",
        })}
      </p>
      <p>
        {Interanationalize.setInternationalize({
          value: 1200005,
          locale: "en-US",
          currency: "USD",
        })}
      </p>
      <p>
        {Interanationalize.setInternationalize({
          value: 120,
          locale: "en-UK",
          currency: "GBP",
        })}
      </p>
      <p>
        {Interanationalize.setInternationalize({
          value: 120,
          locale: "pt-BR",
          currency: "BRL",
        })}
      </p>
      <p>
        {Interanationalize.setInternationalize({
          value: 120,
          locale: "ja-JP",
          currency: "JPY",
        })}
      </p>
      <p>
        {Interanationalize.setInternationalize({
          value: 120,
          locale: "ms",
          currency: "MYR",
        })}
      </p>
      <p>
        {Interanationalize.setInternationalize({
          value: 120,
          locale: "da",
          currency: "DKK",
        })}
      </p>
      <p>
        {Interanationalize.setInternationalize({
          value: 120,
          locale: "zh-CN",
          currency: "CNY",
        })}
      </p>
      <p>
        {Interanationalize.setInternationalize({
          value: 120,
          locale: "cs",
          currency: "CZK",
        })}
      </p>
      <p>
        {Interanationalize.setInternationalize({
          value: 120,
          locale: "uk",
          currency: "UAH",
        })}
      </p>
      <p>
        {Interanationalize.setInternationalize({
          value: 120,
          locale: "th",
          currency: "THB",
        })}
      </p>
      <p>
        {Interanationalize.setInternationalize({
          value: 120,
          locale: "ar-MA",
          currency: "MAD",
        })}
      </p>
      <p>
        {Interanationalize.setInternationalize({
          value: 120,
          locale: "fr-FR",
          currency: "MAD",
        })}
      </p>
      <p>
        {Interanationalize.setInternationalize({
          value: 120,
          locale: "fr-CH",
          currency: "CHF",
        })}
      </p>
      <p>
        {Interanationalize.setInternationalize({
          value: 120,
          locale: "de-CH",
          currency: "CHF",
        })}
      </p>
      <p>
        {Interanationalize.setInternationalize({
          value: 7290,
          locale: "sp-AR",
          currency: "ARS",
        })}
      </p>
      <p>
        {Interanationalize.setInternationalize({
          value: 120,
          locale: "sp-AR",
          currency: "COP",
        })}
      </p>
      <p>
        {Interanationalize.setInternationalize({
          value: 120,
          locale: "fr-FR",
          currency: "PEN",
        })}
      </p>
    </div>
  );
}
