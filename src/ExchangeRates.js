// src/ExchangeRates.js

import React from 'react';
import { useQuery, gql } from '@apollo/client';

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

function ExchangeRates() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h2>Exchange Rates</h2>
      <ul>
        {data.rates.map(({ currency, rate }) => (
          <li key={currency}>
            {currency}: {rate}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExchangeRates;
