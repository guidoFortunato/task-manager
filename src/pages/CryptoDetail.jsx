import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CryptoDetail = () => {
  const { name } = useParams();
  const [coins, setCoins] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const url = `https://api.coingecko.com/api/v3/coins/${name}`;

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
  }, [url]);

  return !isLoading ? (
    <div className="container">
      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          <div className="card bg-dark">
            <img
              src={coins.image.large}
              className="card-img-top"
              alt={coins.name}
            />
            <h5 className="card-title">{coins.name}</h5>
            <p className="card-text">
              <span>Symbol: {coins.symbol}</span>
            </p>
            <p className="card-text">
              <span>Price: ${coins.market_data.current_price.usd}</span>
            </p>
            <p className="card-text">
              <span className="me-2">Price change:</span>
              <span
                className={
                  coins.market_data.price_change_percentage_24h > 0
                    ? "text-success"
                    : "text-danger"
                }
              >
                %{coins.market_data.price_change_percentage_24h}
              </span>
            </p>
            <p className="card-text">
              <span>ATH: ${coins.market_data.ath.usd}</span>
            </p>
            <p className="card-text">
              <span>
                ATH change percentage: %{" "}
                {coins.market_data.ath_change_percentage.usd}
              </span>
            </p>
            <p className="card-text">
              <span>Total supply: {coins.market_data.total_supply}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <p>loading...</p>
  );
};

export default CryptoDetail;
