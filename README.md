# Number-Currency

A library to convert numbers into given currencies printed in words. Useful for printing numbers in words in your preferred currency.

# Versions
Version 0.0.1 is the launch version. Supports 7 cuurrencies.

# Installation and Usage

Recommended: get Number-Currency from npm:

```sh
npm install number-currency
# or
yarn add number-currency
```

You can use it in your projects:

```js
import { convertCurrency } from 'number-currency';
```

# Docs

There are 2 functions in the current version:
- convertToWords(numberToConvert) : This function simply converts the number to words.
- convertCurrency(numberToConvert, currency, cent?) : This function takes the number to convert with the desired currency and returns the number in words in the desired currency.

Available Currency:
- USD: United States dollar - Parameter: usd
- EUR - Euro - Parameter: eur
- GBP - British Pound Sterling - Parameter: gbp
- INR - Indian Rupee - Parameter: inr
- AED - UAE Dirhams - Parameter: aed
- SAR - Saudi Arabian Riyal - Parameter: sar
- OMR - Oman Rial - Parameter: omr

Example Usage:
```js
convertCurrency(56.35, 'usd'); //Output: Fifty six dollars and thirty five cents
```

Note: If your desired currency is not given, you may still type in your currency in the function as parameters. You will need to give the subunits as the third parameter.
```js
convertCurrency(25.50, 'yen', 'sen'); //Output: Twenty five yen and fifty sen
```

## License

MIT Licensed.