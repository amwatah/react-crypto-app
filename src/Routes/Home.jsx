import { CurrencyExchange, HomeMax, Info, SearchOutlined } from "@mui/icons-material";
import {
  BottomNavigation,
  BottomNavigationAction,


} from "@mui/material";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home relative bg-[#303030] min-h-fit  text-white  flex flex-col items-center " >
      <div className="outlet h-[90vh]  ">
        <Outlet></Outlet>
      </div>

      <div className="bottom-nav  fixed bottom-0  h-[10vh] w-screen flex justify-center items-center gap-1 bg-white rounded-md  m-2 p-1 md:w-[40%]  ">
        <BottomNavigation showLabels>
          <BottomNavigationAction
            onClick={() => {
              navigate("/main");
            }}
            label="Home"
            icon={<HomeMax />}
          />
          <BottomNavigationAction
            onClick={() => {
              navigate("/coins");
            }}
            label="Coins"
            icon={<CurrencyExchange />}
          />
          <BottomNavigationAction
            onClick={() => {
              navigate("/details");
            }}
            label="Search"
            icon={<SearchOutlined/> }
          />
        </BottomNavigation>
      </div>
    </div>
  );
};

export default Home;
