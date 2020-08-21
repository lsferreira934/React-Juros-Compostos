import React from 'react';

import css from './intallment.module.css';
import { formatReal, formatNumber } from '../helpers/formatNumbers';

export default function Installment({ value }) {
  const { id, amount, appreciationPercentage, valueDiference } = value;

  return (
    <div className="col s12 m6 l4">
      <div className={` card-panel hoverable responsive ${css.card} `}>
        <div className={` hoverable responsive ${css.id}`}>{id}</div>

        <div>
          <p
            className={` hoverable responsive  ${css.p1} `}
            style={valueDiference < 0 ? { color: 'red' } : { color: 'green' }}
          >
            {formatReal(Number(amount))}
          </p>

          {valueDiference > 0 ? (
            <p
              className={`hoverable responsive ${css.p2}`}
              style={{ color: 'green' }}
            >
              +{formatReal(Number(valueDiference))}
            </p>
          ) : (
            <p
              className={`hoverable responsive ${css.p2}`}
              style={{ color: 'red' }}
            >
              {formatReal(Number(valueDiference))}
            </p>
          )}

          <p
            className={`hoverable responsive ${css.p3}`}
            style={valueDiference < 0 ? { color: 'orange' } : { color: 'blue' }}
          >
            {amount === '0.00'
              ? `0%`
              : `${formatNumber(Number(appreciationPercentage))}%`}
          </p>
        </div>
      </div>
    </div>
  );
}
