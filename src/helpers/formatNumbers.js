const formatter = Intl.NumberFormat('pt-BR');

function formatNumber(value) {
  return formatter.format(value);
}

function formatReal(value) {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}

export { formatNumber, formatReal };
