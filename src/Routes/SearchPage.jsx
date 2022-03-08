import { Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import DetailCard from "../Components/DetailCard";

const SearchPage = () => {
  const [coinName, setCoinName] = useState("");
  const [coinDetails, setCoinDetails] = useState();
  const [gotDetails, setGotDetails] = useState(false);

  //fetch coin details
  async function getCoinDetails() {
    const coinGeckoUrl = `https://api.coingecko.com/api/v3/coins/${coinName}?localization=false&tickers=false&developer_data=false`;

    axios.get(coinGeckoUrl).then((response) => {
      console.log(response.data);
      setCoinDetails(response.data);
      setGotDetails(true);
    });
  }

  return (
    <>
      <div className="search-page p-3 flex flex-col items-center">
        <p>LOOK UP </p>

        <TextField
          value={coinName}
          onChange={(e) => setCoinName(e.target.value)}
          label="enter a coin id e.g bitcoin"
        />
        <br />
        <Button onClick={ ()=> getCoinDetails() } variant="outlined">SEARCH</Button>
      </div>

      {gotDetails && (
        <DetailCard
          id={coinDetails.id}
          symbol={coinDetails.symbol}
          name={coinDetails.name}
          image={coinDetails.image?.large}
          link={coinDetails.links?.blockchain_site}
          price={coinDetails.market_data?.current_price.usd}
          marketCap={coinDetails.market_data?.market_cap.usd}
        />
      )}
    </>
  );
};

export default SearchPage;
