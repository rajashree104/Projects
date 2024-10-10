import React from "react";
import Navbar from "./componets/Navbar/Navbar";
import Hero from "./componets/Hero/Hero";
import Products from "./componets/Products/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from "./componets/TopProducts/TopProducts";
import Banner from "./componets/Banner/Banner";
import Subscribe from "./componets/Subscribe/Subscribe";
import Testimonials from "./componets/Testimonials/Testimonials";
import Footer from "./componets/Footer/Footer";
import Popup from "./componets/Popup/Popup";

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Products />
      <TopProducts handleOrderPopup={handleOrderPopup} />
      <Banner />
      <Subscribe />
      <Testimonials />
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
};

export default App;
