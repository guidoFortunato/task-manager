import React, { useEffect, useState } from 'react';

const CryptocurrencyList = () => {

  const [coins, setCoins] = useState([]);

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false'

  useEffect(() => {
    const getData = async()=>{
      const res = await fetch(url)
      const data = await res.json()
      setCoins(data)
    }
    getData()
  }, []);
  
  return (
    <h2>
      Listado de criptomonedas
      <ul>
        {
          coins.map(item => (
            <li key={item.symbol}>{item.id}: ${item.current_price}</li>
          ))
        }
      </ul>
    </h2>
  );
}

export default CryptocurrencyList;
