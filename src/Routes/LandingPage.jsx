import React from "react";

const LandingPage = () => {
  return (
    <div className=" flex flex-col  text-white">
      <div className="title  text-center ">
        <h1 className=" text-3xl uppercase   bg-gradient-to-r to-violet-500 from-pink-500  bg-clip-text  text-transparent font-bold ">Digi-Pesa
        <p className="text-xl">
          your cyrpto stop
        </p>
        </h1>
   
        <p>
           catch the latest trends in crypto-currency, from top coins and look-ups 
        </p>
      </div>
      <div className="animation h-[50vh] w-[50vw] self-center mt-[8%]   ">
        <lottie-player
          src="https://assets2.lottiefiles.com/packages/lf20_2KNQ1X.json"
          background="#303030"
          speed="1"
          loop
          autoplay
        
        ></lottie-player>
      </div>
    </div>
  );
};

export default LandingPage;
