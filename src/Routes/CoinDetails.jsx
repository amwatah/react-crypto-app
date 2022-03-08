import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailCard from "../Components/DetailCard";

const CoinDetails = () => {
  const [coinDetails, setCoinDetails] = useState({});
  const coinIdentity = useParams().coinId;
  //api url

  //fetch coin details
  function getCoinDetails() {
    const coinGeckoUrl = `https://api.coingecko.com/api/v3/coins/${coinIdentity}?localization=false&tickers=false&developer_data=false`;

    axios.get(coinGeckoUrl).then((response) => {
      console.log(response.data);
      setCoinDetails(response.data);
    });
  }

  //get Details
  useEffect(() => {
    getCoinDetails();
  }, []);

  return (
    <div>
      <DetailCard
        id={coinDetails.id}
        symbol={coinDetails.symbol}
        name={coinDetails.name}
        image={coinDetails.image?.large}
        link={coinDetails.links?.blockchain_site}
        price={coinDetails.market_data?.current_price.usd}
        marketCap={coinDetails.market_data?.market_cap.usd}

      />
    </div>
  );
};

export default CoinDetails;
