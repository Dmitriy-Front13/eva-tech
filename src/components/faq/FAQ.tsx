import { useState, useRef } from "react";
import { useSpring, animated } from 'react-spring';

import './faq.scss';

type FAQItem = {
  title: string;
  content: string;
}
type Items = FAQItem[];

const FAQItem: React.FC<FAQItem> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLParagraphElement>(null);
  const animation = useSpring({
    height: isOpen ? contentRef.current?.scrollHeight : 0
  });
  return (
    <div className="faq__item" >
      <h5 className={`faq__item-title ${isOpen ? 'opened' : ''}`} onClick={() => setIsOpen(!isOpen)}>{title}</h5>
      <animated.div style={animation} className='faq__item-text'>
        <p ref={contentRef}>{content}</p>
      </animated.div>
    </div>
  )
}

const items: Items = [
  { title: "WHAT ARE THE MATS MADE OF?", content: "Our mats are made of Ethylene Vinyl Acetate (EVA), an innovative material with a cellular structure. It's lightweight, durable, functional, and eco-friendly. EVA is odorless, chemical-resistant, and retains its properties in both high (+50°C) and freezing temperatures." },
  { title: "WILL THE MATS FIT MY CAR EVEN IF THERE IS NO PHOTO OF MY SPECIFIC MODEL ON THE SITE?", content: "Yes, all our mats are custom-made to fit your specific car model. Even if there is no photo of your exact vehicle, rest assured that the mats are precisely cut according to your car's unique measurements. We constantly update our product range and templates to ensure a perfect fit." },
  { title: "HOW IS THE FASTENING OF THE MATS CARRIED OUT?", content: "The mats are fastened with original clips designed specifically for your car’s floor. For vehicles with factory-installed holders, we provide mats with matching fasteners to ensure a secure and precise fit." },
  { title: "OUR MATS DO NOT HAVE SIDES, WILL WATER OVERFLOW?", content: "Our mats are designed to retain water effectively without the need for raised edges. The cellular structure traps moisture, making them superior to rubber mats that require high sides to prevent overflow." },
  { title: "IS THERE A WARRANTY?", content: "Yes, we offer a 6-month warranty. The lifespan of the mats depends on how they're used, but with proper care, they can last for many years." },
  { title: "HOW CAN I PAY?", content: "You can pay via e-transfer. After placing your order, we’ll send you instructions on how to complete the payment. Once the payment is confirmed, we’ll begin production." },
  { title: "HOW LONG DOES IT TAKE TO MAKE THE MATS?", content: "Our mats are handcrafted and typically take 2-4 days to produce. However, since each set is custom-made, production times may vary slightly." },
  { title: "HOW ARE THEY SHIPPED?", content: "We deliver via Canada Post or UPS. Enter your postal code on our website, and the shipping cost will be calculated automatically." },
  { title: "WHICH MATS ARE BETTER SUITED FOR FALL AND WINTER?", content: "EVA mats are ideal for both fall and winter. They won’t soften from frequent rain in the fall or harden in freezing winter temperatures. Unlike textile or rubber mats, they retain their shape and effectively trap water, snow, and mud, keeping your car’s interior clean throughout the colder months." },
  { title: "HOW TO CLEAN THE MATS?", content: "Our mats are easy to clean with a pressure water jet. The cells trap dirt, and with the pressure of the water, all debris is easily washed away. You can also use car shampoos and detergents, and we recommend washing the mats regularly." },
  { title: "DO THE MATS HAVE A SMELL?", content: "The mats may have a slight smell when brand new, but it fades quickly. The EVA material we use is made from eco-friendly components and won’t emit any odors, even in high temperatures." },
  { title: "WHICH COLOR GETS DIRTY THE LEAST?", content: "Gray and beige are the most practical colors. Gray works well for darker interiors and hides wet dirt better, while beige is ideal for light interiors and conceals dry dust and sand." },
  { title: "CAN I RETURN THE MATS AND GET A REFUND?", content: "Yes, you can return the mats within 7 days if they are unused and in their original condition. Once we receive them, we will process your refund via the original payment method." }
];

const FAQ = () => {
  return (
    <section className="faq">
      <div className="container">
        <h2 className="faq__title">F&Q</h2>
        <div className="faq__items">
          {items.map((item, index) => (
            <FAQItem key={index} title={item.title} content={item.content} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ;