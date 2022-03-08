import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CoinDetails from "./Routes/CoinDetails";
import Coins from "./Routes/Coins";

import Home from "./Routes/Home";

import LandingPage from "./Routes/LandingPage";
import SearchPage from "./Routes/SearchPage";

function App() {
  const my_theme = createTheme({
    palette: {
      type: "light",
      primary: {
        main: "#3f51b5",
      },
      secondary: {
        main: "#f50057",
      },
      text: {
        primary: "#fafafa",
        secondary: "#3f51b5",
      },
    },
  });

  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={my_theme}>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route index element={<LandingPage />}></Route>
              <Route path="main" element={<LandingPage />}></Route>
              <Route path="coins" element={<Coins />}></Route>
              <Route path="coins/:coinId" element={ <CoinDetails/>}></Route>
              <Route path="details" element={ <SearchPage/>}></Route>
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
