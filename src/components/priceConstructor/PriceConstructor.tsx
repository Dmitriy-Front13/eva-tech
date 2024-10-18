import { useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

import StepNavigation from './StepNavigation';
import CarMakeForm from './forms/CarMakeForm';
import ColorForm from './forms/ColorForm';
import SetForm from './forms/SetForm';

import './priceConstructor.scss';

const PriceConstructor = () => {
  const { hash } = useLocation();
  const ref = useRef<HTMLElement>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([false, false, false]);

  const handleStepChange = (step: number) => {
    if (step <= currentStep || completedSteps[step - 1]) {
      setCurrentStep(step);
    }
  };

  const completeStep = (step: number) => {
    const newCompletedSteps = [...completedSteps];
    newCompletedSteps[step] = true; 
    setCompletedSteps(newCompletedSteps);
    setCurrentStep(step + 1); 
  };


  useEffect(() => {
    if (hash) {
      ref.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [hash]);

  return (
    <section ref={ref} className="section price-constructor">
      <div className="container">
        <h2 className="section__title price-constructor__title">Car Mat Customization</h2>
        <p className="section__sub-title price-constructor__title">Set descriptions and prices are at step 3</p>

        <div className="price-constructor__holder">
          <StepNavigation currentStep={currentStep} onStepChange={handleStepChange} completedSteps={completedSteps} />

          <div id="price-constructor-form" className="price-constructor__form">
            <CarMakeForm onNext={() => completeStep(0)} currentStep={currentStep}/>
            <ColorForm onNext={() => completeStep(1)} currentStep={currentStep}/>
            <SetForm currentStep={currentStep}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PriceConstructor;