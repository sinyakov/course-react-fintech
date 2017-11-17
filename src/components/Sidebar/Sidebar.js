import React from 'react';
import { NavLink } from 'react-router-dom';

import Money from '../Money/Money';
import PATH from '../../PATH';

import './Sidebar.css';

export default ({ accounts }) => {
  return (
    <div className="Sidebar">
      <div className="Sidebar__header">Счета</div>
      {Object.values(accounts).map(({ currency, name, amount }, index) => (
        <NavLink
          to={`${PATH}/account/${index + 1}`}
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
        to={`${PATH}/create-account`}
        className="Link"
        activeClassName="Link--active"
      >
        <div className="Sidebar__account">
          <div className="Sidebar__account-name">Добавить счет</div>
        </div>
      </NavLink>
      <NavLink
        to={`${PATH}/about`}
        className="Link"
        activeClassName="Link--active"
      >
        <div className="Sidebar__account">
          <div className="Sidebar__account-name">About</div>
        </div>
      </NavLink>
    </div>
  );
};
