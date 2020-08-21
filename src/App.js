import React, { useEffect, useState } from 'react';
import Form from './components/Form';
import Installments from './components/Installments';

import css from './components/intallment.module.css';
export default function App() {
  const [moneyValue, setMoneyValue] = useState(0);
  const [percentageValue, setPercentageValue] = useState(0);
  const [installmentValue, setinstallmentValue] = useState(1);
  const [allValue, setAllValue] = useState([]);

  useEffect(() => {
    const getValue = () => {
      setAllValue([]);
      const value = [];

      for (let i = 1; i <= installmentValue; i++) {
        const amount = (moneyValue * (1 + percentageValue) ** i).toFixed(2);
        const percentageDifference = ((amount / moneyValue - 1) * 100).toFixed(
          2
        );
        const valueDiference = (amount - moneyValue).toFixed(2);
        const objectValue = {
          id: i,
          valueDiference: valueDiference,
          amount: amount,
          appreciationPercentage: percentageDifference,
        };
        value.push(objectValue);
      }

      setAllValue(value);
    };
    getValue();
  }, [moneyValue, percentageValue, installmentValue]);

  const handleInputMoney = ({ target }) => {
    if (Number(target.value) < 99999999) {
      const moneyValue = Number(target.value);
      setMoneyValue(moneyValue);
    }
  };
  const handleInputPercentage = ({ target }) => {
    if (Number(target.value) <= 12 && Number(target.value) >= -12) {
      const targetValue = Number(target.value);

      const percentageValue = targetValue / 100;

      setPercentageValue(percentageValue);
    }
  };

  const handleInputInstallment = ({ target }) => {
    if (Number(target.value) <= 36) {
      const installmentValue = Number(target.value);
      setinstallmentValue(installmentValue);
    }
  };

  return (
    <div className={`container  ${css.container}`}>
      <h1 className={`card-panel teal lighten-2 ${css.h1}`}>
        <span>React</span> Juros Compostos
      </h1>

      <Form>
        <div className="input-field col s12 m12 l4">
          <div>
            <label
              style={{ fontSize: '20pt' }}
              htmlFor="inputValueCapital"
              className="active"
            >
              Capital Inicial:
            </label>
          </div>
          <input
            style={{ fontSize: '20pt' }}
            id="inputValueCapital"
            type="number"
            step="100"
            min="100"
            max="100000000"
            defaultValue="0"
            autoFocus
            onChange={handleInputMoney}
          />
        </div>

        <div className="input-field col s12 m8 l4">
          <div>
            <label
              style={{ fontSize: '20pt' }}
              htmlFor="inputPercentage"
              className="active"
            >
              Taxa de juros mensal:
            </label>
          </div>
          <input
            style={{ fontSize: '20pt' }}
            id="inputPercentage"
            type="number"
            min="-12"
            max="12"
            step="0.1"
            defaultValue="0"
            onChange={handleInputPercentage}
          />
        </div>

        <div className="input-field col s12 m4 l4">
          <div>
            <label
              style={{ fontSize: '20pt' }}
              htmlFor="inputInstallment"
              className="active"
            >
              Período (meses):
            </label>
          </div>
          <input
            style={{ fontSize: '20pt' }}
            id="inputInstallment"
            type="number"
            min="1"
            max="36"
            defaultValue="1"
            onChange={handleInputInstallment}
          />
        </div>
      </Form>

      <Installments allValue={allValue} />
    </div>
  );
}
