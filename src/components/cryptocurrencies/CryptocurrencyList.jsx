import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../../css/cryptocurrencies.css";

// const tableRow = ["#", "Coin", "Detail", "Price", "Price change"];
const tableRow = ["#", "Coin", "Detail", "Price"];

const CryptocurrencyList = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const filteredCoins = coins.filter(item => item.name.toLowerCase().includes(search.toLowerCase()) || item.symbol.toLowerCase().includes(search.toLowerCase()))



  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10page=1&sparkline=false";

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setCoins(data);
      setIsLoading(false);
    };
    getData();
  }, []);

  return !isLoading ? (
    <div className="container img-fondo">
      <div className="row">
        <div className="col-12 d-flex text-center w-100 justify-content-center">
          <div className="container-search ancho-search">
            <input
              type="text"
              placeholder="Search a coin"
              className="form-control bg-dark text-light mt-3"
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="col-12 d-flex justify-content-center">
          <table className="table table-dark ancho-table">
            <thead>
              <tr>
                {tableRow.map((item, index) => (
                  <th scope="col" key={index}>
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredCoins.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="container-coin">
                      <img
                        src={item.image}
                        alt={item.id}
                        className="img-crypto me-lg-2"
                      />

                      <span className="margin-name">{item.name}</span>

                      <span className="ms-lg-2 text-muted text-uppercase">
                        {item.symbol}
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="container-detail">
                      <button className="btn-detail">
                        <Link
                          to={`/dashboard/criptos/${item.id}`}
                          className="link-coindetail"
                        >
                          ver detalle
                        </Link>
                      </button>
                    </div>
                  </td>
                  <td>
                    <div className="margin-price">${item.current_price}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ) : (
    <p>loading...</p>
  );
};

export default CryptocurrencyList;
