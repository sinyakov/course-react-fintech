import React from 'react';
import Money from '../Money/Money';

import { NavLink } from 'react-router-dom';

import './Sidebar.css';

export default ({ accounts }) => {
  return (
    <div className="Sidebar">
      <div className="Sidebar__header">Счета</div>
      {Object.values(accounts).map(({ currency, name, amount }, index) => (
        <NavLink
          to={`/account/${index}`}
          key={name}
          className="Link"
          activeClassName="Link--active"
        >
          <div className="Sidebar__account">
            <div className="Sidebar__account-name">{name}</div>
            <div className="Sidebar__account-amount">
              <Money value={amount} currency={currency} />
            </div>
          </div>
        </NavLink>
      ))}
      <NavLink
        to="/create-account"
        className="Link"
        activeClassName="Link--active"
      >
        <div className="Sidebar__account">
          <div className="Sidebar__account-name">Добавить счет</div>
        </div>
      </NavLink>
    </div>
  );
};
