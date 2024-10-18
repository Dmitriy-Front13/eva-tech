import { useTimer } from 'react-timer-hook';
import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/modal/modalSlice';
import './getGift.scss';

import footrest from '../../assets/images/footrest.png';

function getEndOfMonth() {
  const now = new Date();
  const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
  return endOfMonth;
}


const Timer = () => {
  const expiryTimestamp = getEndOfMonth();

  const {
    seconds,
    minutes,
    hours,
    days,
    restart
  } = useTimer({
    expiryTimestamp,
    onExpire: () => {
      restart(getEndOfMonth());
    }
  });

  return (
    <div className="get-gift__timer">
      <div>
        <span className="days">{days}</span>
        <p className="timer__text">d :</p>
      </div>
      <div>
        <span className="hours">{hours}</span>
        <p className="timer__text">h :</p>
      </div>
      <div>
        <span className="minutes">{minutes}</span>
        <p className="timer__text">m :</p>
      </div>
      <div>
        <span className="seconds">{seconds}</span>
        <p className="timer__text">s</p>
      </div>
    </div>
  )
}

const GetGift = () => {
  const dispatch = useDispatch();
  const handleOpenModal = () => {
    dispatch(openModal({
      modalData: {
        title: 'Footrest',
        description: true,
        image: footrest,
        items: ['size 25x16 cm', 'thickness of 3 mm', 'anti-slip rubber inserts', 'set mounts - 4pcs', 'warranty 6 months'],
        oldPrice: 15,
        price: 0,
        isGift: true,
      }
    }));
  };
  return (
    <section className="get-gift section">
      <div className="get-gift__inner">
        <Timer />
        <h2 className="get-gift__title section__title">Get your gift for summer!!
        </h2>
        <p className="get-gift__text">Buy now our product and get a complimentary heel pad</p>
        <button className="get-gift__button"
          onClick={handleOpenModal}>
          Get gift
        </button>
      </div>
    </section>
  )
}

export default GetGift;