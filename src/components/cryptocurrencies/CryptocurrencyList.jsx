import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../../css/cryptocurrencies.css";

// const tableRow = ["#", "Coin", "Detail", "Price", "Price change"];
const tableRow = ["#", "Coin", "Detail", "Price"];

const CryptocurrencyList = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const filteredCoins = coins.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.symbol.toLowerCase().includes(search.toLowerCase())
  );

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=40page=1&sparkline=false";

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      setCoins(data);
      setIsLoading(false);
    };
    getData();
  }, []);

  return !isLoading ? (
    <div className="container img-fondo">
      <div className="row mt-3">
        <div className="col-12 d-flex text-center w-100 justify-content-center">
          <div className="container-search ancho-search">
            <Link className="btn-detail mt-5" to="/dashboard">
              back to dashboard
            </Link>

            <input
              type="text"
              placeholder="Search a coin"
              className="form-control bg-dark text-light mt-3"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="col-12 d-flex justify-content-center">
          {/* <div className="table-responsive"> */}
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
                {filteredCoins.length > 0 ? (
                  filteredCoins.map((item, index) => (
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
                          <Link
                            to={`/dashboard/criptos/${item.id}`}
                            className="btn-detail"
                          >
                            ver detalle
                          </Link>
                        </div>
                      </td>
                      <td>
                        <div className="margin-price">
                          ${item.current_price}
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4}>
                      <span className="text-error">
                        there is no cryptocurrency called "{search}" in this
                        listing
                      </span>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          {/* </div> */}
        </div>
      </div>
    </div>
  ) : (
    <p>loading...</p>
  );
};

export default CryptocurrencyList;
