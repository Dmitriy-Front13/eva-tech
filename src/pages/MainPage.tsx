import Advantages from '../components/advantages/Advantages';
import FAQ from '../components/faq/FAQ';
import Feedback from '../components/feedback/Feedback';
import GetGift from '../components/getGift/GetGift';
import Hero from '../components/hero/Hero';
import HowWeWork from '../components/howWeWork/HowWeWork';
import ModalManager from '../components/modals/ModalManager';
import PriceConstructor from '../components/priceConstructor/PriceConstructor';
import Reviews from '../components/Reviews/Reviews';
import WorkExamples from '../components/workExamples/WorkExamples';


const MainPage = () => {
  return (
    <main>
      <Hero/>
      <Advantages/>
      <GetGift/>
      <WorkExamples/>
      <PriceConstructor/>
      <Reviews/>
      <HowWeWork/>
      <FAQ/>
      <Feedback/>
      <ModalManager/>
    </main>
  )
}

export default MainPage;