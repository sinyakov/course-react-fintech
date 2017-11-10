import React from 'react';

export default ({ value, currency }) => {
  const [floor, fаractional] = value.toString().split('.');
  const currencySymbols = { RUB: '₽', EUR: '€', GBP: '£', USD: '$' };
  return (
    <span>
      <span>{floor}</span>
      {fаractional && <span>{`,${fаractional}`}</span>}
      {currency && <span>{currencySymbols[currency]}</span>}
    </span>
  );
};
