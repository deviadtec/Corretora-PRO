import { formatCurrency } from "react-native-format-currency";

export class CurrencyUtil {
  static formatValue(value: string): {} {
    const [valueFormattedWithSymbol, valueFormattedWithoutSymbol, symbol] =
      formatCurrency({ amount: Number(value), code: "BRL" });
    return valueFormattedWithSymbol;
  }
}
