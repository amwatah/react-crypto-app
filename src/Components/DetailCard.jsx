import React from "react";

const DetailCard = ({
  symbol,
  name,
  id,
  image,
  link,
  homePage,
  price,
  marketCap,
}) => {
  return (
    <>
      <div className=" flex flex-col  items-center ">
        <div className="details flex flex-col justify-evenly  items-center uppercase text-2xl gap-1 place-content-center border-b-2 p-2 m-2 ">
          <p>{name} </p>
          <div className="flex justify-evenly gap-1">
          <p> {id} </p>
          <p> TKR: {symbol} </p>

          </div>
         
        </div>
        <div className="image ">
          <img src={image} alt="coin" className=" h-[30vh] w-[30vw] " />
        </div>
        <div className="data  border-2 p-3 rounded-md m-2 text-center capitalize ">
          <div className="links flex justify-evenly underline">
            <a href={link}> Website</a>
            <a href={homePage}> HomePage</a>
          </div>

          <p> current price: ${Intl.NumberFormat("en-US").format(price)} </p>
          <p> market Cap: ${Intl.NumberFormat("en-US").format(marketCap)}</p>
        </div>
      </div>
    </>
  );
};

export default DetailCard;
