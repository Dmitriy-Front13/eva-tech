import CardSet from '../CardSet';

import set1 from '../../../assets/images/priceConstructor/sets/set-1.jpg';
import set2 from '../../../assets/images/priceConstructor/sets/set-2.jpg';
import set3 from '../../../assets/images/priceConstructor/sets/set-3.jpg';

type SetForm = {
  currentStep: number;
}

const SetForm: React.FC<SetForm> = ({ currentStep }) => {
  return (
    <form className={`price-constructor__step constructor-step ${currentStep === 2 ? 'price-constructor__step--active' : ''}`}>
      <h3 className="constructor-step__title">Choose a set</h3>
      <CardSet
        discount="-40%"
        title="Economy"
        imageUrl={set1}
        totalPrice={59}
        originalPrice={100}
        firstProperty="Front or rear"
      />
      <CardSet
        discount="-15%"
        title="Standart"
        imageUrl={set2}
        totalPrice={119}
        originalPrice={140}
        firstProperty="Front and rear"
      />
      <CardSet
        discount="-10%"
        title="Premium"
        imageUrl={set3}
        totalPrice={199}
        originalPrice={220}
        firstProperty="Front and rear + trunk mat"
      />
    </form>
  )
}

export default SetForm;