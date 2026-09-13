import "./App.css";
import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection";
import TechnologiesSection from "./component/Technology/TechnologiesSection";
import Footer from "./component/Footer";
import { ToastContainer } from 'react-toastify';
// cspell:ignore Toastify
import 'react-toastify/dist/ReactToastify.css';

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