import logo from "./logo.svg";
import "./App.css";
import HeaderBar from "./components/Header/HeaderBar";
import { Box } from "@mui/material";
import background from "./components/assests/background.svg";
import HeroSection from "./components/HeroSection/HeroSection";
import Footer from "./components/Footer/Footer";
import Staking from "./components/Staking/Staking";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Box
        sx={{
          backgroundColor: "#00052C",
          backgroundImage: `url(${background})`,
          backgroundSize: "100%  100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <HeaderBar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
        </Routes>
        <Routes>
          <Route path="/Staking" element={<Staking />} />
        </Routes>
        <Footer />
      </Box>
    </BrowserRouter>
  );
}

export default App;
