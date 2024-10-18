
import Select from 'react-select';
import { useSelector, useDispatch } from 'react-redux';
import { updateCarpetColor, updateCarpetTrim } from '../../../redux/priceConstructor/priceConstructorSlice';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { RootState, AppDispatch } from '../../../redux/store';
import { SelectOption } from "../../../redux/priceConstructor/types";


const carpetColorItems = [
  { value: 'black', label: 'Black' },
  { value: 'gray', label: 'Grey' },
  { value: 'blue', label: 'Blue' },
  { value: 'brown', label: 'Brown' },
  { value: 'red', label: 'Red' },
  { value: 'beige', label: 'Beige' },
  { value: 'haki', label: 'Haki', isDisabled: true },
  { value: 'darkblue', label: 'Dark Blue', isDisabled: true },
  { value: 'orange', label: 'Orange', isDisabled: true },
];

const trimColorItems = [
  { value: 'black', label: 'Black' },
  { value: 'blue', label: 'Blue' },
  { value: 'red', label: 'Red' },
  { value: 'gray', label: 'Grey' },
  { value: 'beige', label: 'Beige' },
  { value: 'brown', label: 'Brown' },
  { value: 'white', label: 'White', isDisabled: true },
  { value: 'orange', label: 'Orange', isDisabled: true },
  { value: 'green', label: 'Green', isDisabled: true },
  { value: 'yellow', label: 'Yellow', isDisabled: true },
];

type ColorForm = {
  onNext: () => void;
  currentStep: number;
}

type ColorFormSelect = {
  carpetColor: SelectOption | null;
  carpetTrim: SelectOption | null;
}

const ColorForm: React.FC<ColorForm> = ({ onNext, currentStep }) => {
  const dispatch = useDispatch<AppDispatch>();
  const carpetColor = useSelector((state: RootState) => state.priceConstructor.carpetColor);
  const carpetTrim = useSelector((state: RootState) => state.priceConstructor.carpetTrim);

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      carpetColor: null,
      carpetTrim: null
    }
  });

  const onSubmit: SubmitHandler<ColorFormSelect> = (data) => {
    dispatch(updateCarpetColor(data.carpetColor?.value));
    dispatch(updateCarpetTrim(data.carpetTrim?.value));
    onNext();
  };

  const images: Record<string, { default: string }> = import.meta.glob('../../../assets/images/priceConstructor/color-combinations/*.jpg', { eager: true });

  const getImageSrc = () => {
    const key = `../../../assets/images/priceConstructor/color-combinations/${carpetColor || 'beige'}-${carpetTrim || 'beige'}.jpg`;

    return images[key] ? images[key].default : images['../../../assets/images/priceConstructor/color-combinations/beige-beige.jpg'].default;
  };


  return (
    <form
      className={`price-constructor__step constructor-step ${currentStep === 1 ? 'price-constructor__step--active' : ''}`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3 className="constructor-step__title">Personalize the colour of your future car mats</h3>
      <div className="constructor-step__image--step2">
        <img
          src={getImageSrc()}
          alt="Step 2 color-scheme"
        />
      </div>
      <div className="constructor-step__fields">
        <h4 className="constructor-step__field-title">Pick a colour combination to see the result</h4>
        <div className="constructor-step__field form-field">
          <Controller
            name="carpetColor"
            control={control}
            rules={{ required: 'Carpet color is required' }}
            render={({ field }) => (
              <Select
                {...field}
                options={carpetColorItems}
                onChange={(option) => {
                  field.onChange(option);
                  dispatch(updateCarpetColor(option?.value));
                }}
                blurInputOnSelect={true}
                autoFocus={false}
                aria-label="Carpet color"
                placeholder="Carpet color"
                classNamePrefix="car-make"
                maxMenuHeight={210}
              />
            )}
          />
          {errors.carpetColor && <span className="form-help">{errors.carpetColor.message}</span>}
        </div>
        <div className="constructor-step__field form-field">
          <Controller
            name="carpetTrim"
            control={control}
            rules={{ required: 'Carpet trim color is required' }}
            render={({ field }) => (
              <Select
                {...field}
                options={trimColorItems}
                onChange={(option) => {
                  field.onChange(option);
                  dispatch(updateCarpetTrim(option?.value));
                }}
                blurInputOnSelect={true}
                autoFocus={false}
                aria-label='Carpet trim color'
                placeholder='Carpet trim color'
                classNamePrefix="car-make"
                maxMenuHeight={210}
              />
            )}
          />
          {errors.carpetTrim && <span className="form-help">{errors.carpetTrim.message}</span>}
        </div>
        <button type="submit" className="constructor-step__button button">Next step</button>
      </div>
    </form>
  )
}

export default ColorForm;