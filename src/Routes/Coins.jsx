import axios from "axios";
import React, { useEffect, useState } from "react";
import CoinCard from "../Components/CoinCard";

const Coins = () => {
  const [coinsList, setCoinsList] = useState([]);

  //get coins from coin-gecko api
  async function FetchCoins() {
    const url =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24";

    axios.get(url).then((response) => {
      console.log(response.data);
      setCoinsList(response.data);
    });
  }

  //Load on render
  useEffect(() => {
    FetchCoins();
  }, []);

  return (
    <div className=" bg-[#303030] text-white  text-center h-full ">
      <h1>TOP 100 COINS </h1>
      <div className="  grid grid-cols-1  md:grid-cols-4 gap-1  bg-[#303030]">
        {coinsList.map((coin, index) => {
          return (
            <CoinCard
              key={index}
              name={coin.name}
              price={coin.current_price}
              image={coin.image}
              marketCap={coin.market_cap}
              rank={coin.market_cap_rank}
              ticker={coin.symbol}
              id={coin.id}
              priceChange={coin.price_change_percentage_24h}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Coins;
