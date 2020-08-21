import React from 'react';
import css from './intallment.module.css';

export default function Form({ children }) {
  return <div className={` row ${css.inputDiv}`}>{children}</div>;
}
