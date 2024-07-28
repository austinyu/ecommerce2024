
const CURRENCY_FORMATTER = new Intl.NumberFormat('en-US', {
  currency: "USD",
  style: "currency",
  minimumFractionDigits: 0, 
});

const formatCurrency = (amount: number) => {
  return CURRENCY_FORMATTER.format(amount);
}

const NUMBER_FORMATTER = new Intl.NumberFormat('en-US');

const formatNumber = (amount: number) => {
  return NUMBER_FORMATTER.format(amount);
}

export { formatCurrency, formatNumber };

