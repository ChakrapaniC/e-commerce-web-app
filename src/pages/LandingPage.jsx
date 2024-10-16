
// import Navbar from "../components/navbar/Navbar";
// import Categories from "../components/categories/Categories";
// import AllProductsData from "../components/allproductsdata/AllProductsData";
// import Modal from "../components/modal/Modal";
// import Footer from "../components/footer/FooterComponent";
import JobPosting from "../components/googlejobs/Jobs";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostingJob from "../components/newjob/NewJob";

const LandingPage = () => {
  return (
    <>
      
      <div className="home" style={{position:"relative", height:"auto"}}>
      <Router>
      <Routes>
        <Route path="/" element={ <JobPosting/>} />
        <Route path="/job" element={<PostingJob/>} />
      </Routes>
    </Router>
        {/* <Navbar/>
        <Categories/>
        <AllProductsData/>
        <Modal/>
        <Footer/> */}
       
      </div>
    </>
  );
};

export default LandingPage;
