import React, { useEffect, useState } from "react";

const tableRow = ["#", "Coin", "Detail", "Price", "Price change"];

const CryptocurrencyList = () => {
  const [coins, setCoins] = useState([]);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false";

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setCoins(data);
    };
    getData();
  }, []);

  return (
    <div className="container">
      <h2 className="text-center">Listado de criptomonedas</h2>
      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          <table className="table table-dark w-75">
            <thead>
              <tr>
                {tableRow.map((item) => (
                  <th scope="col">{item}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {coins.map((item, index) => (
                <tr key={item.id}>
                  <td>{index+1}</td>
                  <td>{item.name}</td>
                  <td>ver detalle</td>
                  <td>${item.current_price}</td>
                  <td>{item.ath}</td>
                </tr>
              ))}
              {/* <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CryptocurrencyList;
