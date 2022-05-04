import "./App.css";
import { React, useEffect, useState } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Pages/Home";
import Gemspage from "./components/Pages/Gemspage";
import Viewgem from "./components/Pages/Viewgem";
import Birthstones from "./components/Pages/Birthstones";
import Shippingcart from "./components/Pages/Shoppingcart";
import Checkout from "./components/Pages/Checkout";
import Shippingdetails from "./components/Pages/Shippingdetails";
import Placeorder from "./components/Pages/Placeorder";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Reviews from "./components/reviews/reviews";
import ErrorPage from "./components/Pages/Errorpage";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div>
      <Navbar />

      {loading ? (
        <ScaleLoader
          className="loader"
          color={"#F5A623"}
          loading={loading}
          size={80}
        />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gemspage" element={<Gemspage />} />
            <Route path="/viewgem" element={<Viewgem />} />
            <Route path="/birthstones" element={<Birthstones />} />
            <Route path="/shippingcart" element={<Shippingcart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/shippingdetails" element={<Shippingdetails />} />
            <Route path="/placeorder" element={<Placeorder />} />
            <Route path="*" element={<Home />} />
          </Routes>
          <Footer />
        </Router>
      )}
    </div>
  );
}

export default App;
