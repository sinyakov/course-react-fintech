import React from 'react';
import PropTypes from 'prop-types';
import './Money.css';

const currencies = {
  RUB: '₽',
  EUR: '€',
  GBP: '£',
  USD: '$'
};

const Money = ({ value, currency }) => {
  const [amount, smalls] = String(value).split('.');
  const currencySymbol = currencies[currency];

  return (
    <span className="Money">
      <span>{amount}</span>
      {smalls ? <span className="Money__smalls">,{smalls}</span> : null}
      {currencySymbol ? <span>&nbsp;{currencySymbol}</span> : null}
    </span>
  );
};

Money.propTypes = {
  value: PropTypes.number,
  currency: PropTypes.string
};

Money.defaultProps = {
  value: 0,
  currency: 'RUB'
};

export default Money;
