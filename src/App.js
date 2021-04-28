import "./App.css";
import Menu from "./Components/Menu";
import Banner from "./Components/Banner";
import BannerBottom from "./Components/BannerBotom";
import NewCollections from "./Components/NewCollections";
import Footer from "./Components/Footer";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Banner />
      <BannerBottom />
      <NewCollections />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
