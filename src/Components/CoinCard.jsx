import { InfoOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const CoinCard = ({
  name,
  price,
  image,
  rank,
  priceChange,
  id,
}) => {
  const navigate = useNavigate();
  return (
    <div className="coin-card  w-full bg-[#303030] text-white text-center m-1 p-1 rounded-md flex flex-col border-2 border-white shadow-lg hover:bg-white hover:text-black ">
      <h1 className="text-xl uppercase">
        {rank} : {name}
      </h1>

      <img
        src={image}
        alt="token"
        className=" w-[50%] h-[50%] self-center m-1"
      />

      <h3>$ {Intl.NumberFormat("en-Us").format(price)}</h3>
      <h3>{rank}</h3>
      <div className="">
        24HR CHANGE
        {priceChange > 0.0001 && (
          <h3 className=" text-green-700"> {priceChange} %</h3>
        )}
        {priceChange < 0.0001 && (
          <h3 className=" text-red-700"> {priceChange} %</h3>
        )}
        <IconButton
          onClick={() => {
            navigate(`/coins/${id}`);
          }}
        >
          <InfoOutlined></InfoOutlined>
        </IconButton>
      </div>
    </div>
  );
};

export default CoinCard;
