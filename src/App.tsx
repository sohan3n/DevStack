import "./App.css";
import Navbar from "./component/navbar";
import HeroSection from "./component/heroSection";
import TechnologiesSection from "./component/Technology/technologiesSection";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./component/footer";

function App() {

  return <>
    <Navbar/>
    <HeroSection/>
    <TechnologiesSection />
    <ToastContainer position="bottom-right" />
    <Footer />
  </>
}

export default App;