const toCurrency = (dollarAmount: number) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    useGrouping: true,
  });

  return formatter.format(dollarAmount);
};

export default toCurrency;
