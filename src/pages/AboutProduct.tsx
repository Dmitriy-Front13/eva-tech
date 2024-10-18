import { Link } from "react-router-dom";
import AboutProductInfo from "../components/aboutProductInfo/AboutProductInfo";
import Comparison from "../components/comparison/Comparison";
import Features from "../components/features/Features";
import Reviews from "../components/Reviews/Reviews";
import FAQ from "../components/faq/FAQ";


const AboutProduct = () => {
  return (
    <main>
      <AboutProductInfo/>
      <Features/>
      <Comparison/>
      <Link to='/#price-constructor' className="shopNow-link">Shop now</Link>
      <Reviews/>
      <FAQ/>
    </main>
  )
}

export default AboutProduct;