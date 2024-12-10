import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Layout from "../../Layout";
import AccomplishedWork from "../../pages/AccomplishedWorkPage/accomplishedWorkPage";
import Home from "../../pages/HomePage/homePage";
import Contact from "../../pages/ContactPage/Contact";
import Safety from "../../pages/SafetyPage/Safety.jsx";
import ProcessPage from "../../pages/Process/ProcessPage.jsx";
import PrivacyPolicy from "../../pages/Documents/PrivacyPolicy.jsx";
import TernAndCondition from "../../pages/Documents/TernAndCondition.jsx";
import AboutPage from "../../pages/About/AboutPage.jsx";
import Maintenance from "../../pages/Maintenance/Maintenance.jsx";
import Center from "../../pages/Center/Center.jsx";
import CommercialLifts from "../../pages/Lifts/CommercialLifts/commercialLift.jsx";
import HospitalLifts from "../../pages/Lifts/HospitalLifts/hospitalLifts.jsx";
import HotelLifts from "../../pages/Lifts/HotelLifts/hotelLifts.jsx";
import ResidentialLifts from "../../pages/Lifts/ResidentialLifts/residentialLifts.jsx";
import IndustrialLifts from "../../pages/Lifts/IndustrialLifts/industrialLifts.jsx";
import CustomizeLifts from "../../pages/CustomizeLifts/customizeLifts.jsx";
import BlogPageById from "../../pages/blogsPage/blogsPageById.jsx";
import BlogPage from "../../pages/blogsPage/blogPage.jsx";
import CategoryBlogPage from "../../pages/blogsPage/categoryBlogPage.jsx";
import HydraulicLifts from "../../pages/HydraulicLifts/hydraulicLifts.jsx";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />

          <Route path="/commercial-lifts" element={<CommercialLifts />} />
          <Route path="/hospital-lifts" element={<HospitalLifts />} />
          <Route path="/hotel-lifts" element={<HotelLifts />} />
          <Route path="/residential-lifts" element={<ResidentialLifts />} />
          <Route path="/industrial-lifts" element={<IndustrialLifts />} />

          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/accomplished-work" element={<AccomplishedWork />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/customize-lifts" element={<CustomizeLifts />} />

          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TernAndCondition />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/hydraulic-lifts" element={<HydraulicLifts />} />

          <Route path="/blogs/:id" element={<BlogPageById />} />
          {/* <Route path="/blog/:id" element={<BlogDetail/>}/> */}
          <Route path="/category/:category" element={<CategoryBlogPage />} />
          <Route path="/experience-center" element={<Center />} />
        </Route>
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </Router>
  );
};

export default Routing;
