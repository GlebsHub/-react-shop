import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Shop from "./components/Shop";
import Preloader from "./components/Preloader";

function App() {
  return (
    <>
        <Header />
        <Shop />
        <Footer />
        <Preloader />
    </>
  );
}

export default App;
