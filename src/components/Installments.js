import React from 'react';
import Installment from './Installment';

export default function Installments({ allValue }) {
  return (
    <div className="row">
      {allValue.map((value) => {
        return <Installment key={value.id} value={value} />;
      })}
    </div>
  );
}
