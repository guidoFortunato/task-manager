import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import '../css/cryptoDetail.css'

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
      setCoins(data);
      setIsLoading(false);
    };
    getData();
  }, [url]);

  return !isLoading ? (
    <>
    {
      name === coins.id ? (
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <div className="card bg-dark px-4 py-4">
              <img
                src={coins.image.large}
                className="card-img-top"
                alt={coins.name}
              />
              <h3 className="card-title mb-3 text-white">{coins.name}</h3>
              <p className="card-text">
                <span className="text-white">Symbol: </span><span className="text-uppercase">{coins.symbol}</span>
              </p>
              <p className="card-text">
              <span className="text-white">Price: </span> <span>${coins.market_data.current_price.usd}</span>
              </p>
              <p className="card-text">
                <span className="me-2 text-white">Price change 24hs:</span>
                <span
                  className={
                    coins.market_data.price_change_percentage_24h > 0
                      ? "text-success"
                      : "text-danger"
                  }
                >
                  {Math.round(
                    coins.market_data.price_change_percentage_24h * 100
                  ) / 100}
                  %
                </span>
              </p>
              <p className="card-text">
              <span className="text-white">ATH: </span><span>${coins.market_data.ath.usd}</span>
              </p>
              <p className="card-text">
                <span className="me-2 text-white">ATH change percentage:</span>
                <span
                  className={
                    coins.market_data.ath_change_percentage.usd > 0
                      ? "text-success"
                      : "text-danger"
                  }
                >
                  {Math.round(
                    coins.market_data.ath_change_percentage.usd * 100
                  ) / 100}
                  %
                </span>
              </p>
              <p className="card-text">
              <span className="text-white">Total supply: </span><span>{coins.market_data.total_supply}</span>
              </p>
              <Link className="btn-back" to="/dashboard/criptos">
                    <span>back to list</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      ) : (<div>La criptomoneda {name} no existe</div>)
    }
    </>
  ) : (
    <p>loading...</p>
  );
};

export default CryptoDetail;
