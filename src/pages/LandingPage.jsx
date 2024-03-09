
import Navbar from "../components/navbar/Navbar";
import Categories from "../components/categories/Categories";
import AllProductsData from "../components/allproductsdata/AllProductsData";
import Modal from "../components/modal/Modal";
import Footer from "../components/footer/FooterComponent";

const LandingPage = () => {
  return (
    <>
      <div className="home" style={{position:"relative", height:"auto"}}>
        <Navbar/>
        <Categories/>
        <AllProductsData/>
        <Modal/>
        <Footer/>
      </div>
    </>
  );
};

export default LandingPage;
