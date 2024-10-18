import { useForm, SubmitHandler } from 'react-hook-form';
import { useState, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';
import { updatePrice } from '../../redux/price/priceSlice';
import { updatePromo } from '../../redux/promo/promoSlice';
import { RootState } from '../../redux/store';

import Spinner from '../spinner/Spinner';

import './orderPromo.scss';

const OrderPromo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const animation = useSpring({
    height: isOpen ? contentRef.current?.scrollHeight : 0,
    overflow: 'hidden'
  });
  const dispatch = useDispatch();

  const shippingCost = useSelector((state: RootState) => state.price.product);
  const usePromo = useSelector((state: RootState) => state.promo.usePromo);

  const { register, handleSubmit, setError, formState: { errors } } = useForm<{ promoCode: string }>();
  const [loading, setLoading] = useState(false);

  type PromoCodes = {
    code: string;
    discountValue: number;
    expirationDate: string
  }

  const onSubmit: SubmitHandler<{ promoCode: string }> = async (data) => {
    setLoading(true);
    const { promoCode } = data;
    try {
      const response = await axios.get('https://eva-tech.ca/promoCodes.json');
      const promoCodes = response.data;

      const foundPromo = promoCodes.find((code: PromoCodes) => code.code === promoCode.toUpperCase());

      if (foundPromo) {
        const discountAmount = (shippingCost! * foundPromo.discountValue) / 100;
        const newPrice = Math.max(shippingCost! - discountAmount, 0);

        dispatch(updatePrice({
          subtotal: newPrice
        }));
        dispatch(updatePromo({
          usePromo: true,
          promoValue: foundPromo.code,
          discount: discountAmount
        }));
        setLoading(false);
      } else {
        setError('promoCode', { type: 'manual', message: 'Promocode invalid' });
        setLoading(false);
      }
    } catch (err) {
      setError('promoCode', { type: 'manual', message: 'Something went wrong...' });
      setLoading(false);
    }
  };

  return (
    <div className="order-promo">
      <div className="order-promo__box" onClick={() => setIsOpen(!isOpen)}>
        Have promocode?
        <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line y1="-0.5" x2="10" y2="-0.5" transform="matrix(0.73994 0.672673 -0.489416 0.87205 0 1)" stroke="black" />
          <line y1="-0.5" x2="10" y2="-0.5" transform="matrix(-0.73994 0.672673 0.489416 0.87205 14.7988 1)" stroke="black" />
        </svg>
      </div>
      <animated.div style={animation} ref={contentRef} >
        <form className="order-promo__form" onSubmit={handleSubmit(onSubmit)}>
          <label className="order-promo__label">Promocode</label>
          <input
            className="order-promo__input"
            type="text"
            {...register('promoCode', { required: 'Promocode is required' })}
            placeholder="Promo code"
          />
          {usePromo && <p className="promoValid">Promocode valid!</p>}
          {errors.promoCode && <p className="promoInvalid">{errors.promoCode.message}</p>}
          <button type="submit"
            className={`order-promo__btn order-promo__btn--promo ${loading ? 'order-promo__btn--loading' : ''}`}
            disabled={usePromo}>
            {loading ? <Spinner /> : 'Check promocode'}
          </button>
        </form>
      </animated.div>
    </div>
  );
};

export default OrderPromo;