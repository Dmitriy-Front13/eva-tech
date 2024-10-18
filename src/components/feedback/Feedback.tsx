import { useForm, SubmitHandler  } from 'react-hook-form';

import { getCurrentDate } from '../../utils/getCurrentDate';

import useFormSubmit from '../../hook/useFormSubmit';

import 'toastify-js/src/toastify.css';
import './feedback.scss';


interface FeedbackFormInputs {
  userName: string;
  userEmail: string;
  userMessage: string;
}

const FeedbackForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FeedbackFormInputs>();
  const { isLoading, submitForm } = useFormSubmit('https://eva-tech.ca/action.php');

  const onSubmit: SubmitHandler<FeedbackFormInputs> = async (data) => {
    const date = getCurrentDate();
    const payload = { ...data, formName: 'feedback', date };
    submitForm(payload);
  }
  return (
    <form className={`feedback-form  ${isLoading ? 'form--pending' : ''}`} onSubmit={handleSubmit(onSubmit)}>
      <div className="form-field feedback-form__field">
        <input className="feedback-form__input form-control"
          type="text"
          placeholder="Your name*"
          {...register('userName', { required: 'Name is required' })} />
        {errors.userName && <span className='form-help'>{errors.userName.message}</span>}
      </div>
      <div className="form-field feedback-form__field">
        <input className="feedback-form__input form-control"
          type="email"
          placeholder="Your email*"
          {...register('userEmail', {
            required: 'Email is required',
            pattern: {
              value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              message: 'Invalid email address',
            },
          })} />
        {errors.userEmail && <span className='form-help'>{errors.userEmail.message}</span>}
      </div>
      <div className="form-field feedback-form__field">
        <textarea className="feedback-form__message form-control"
          placeholder="Your question*"
          {...register('userMessage', { required: 'Message is required' })}></textarea>
        {errors.userMessage && <span className='form-help'>{errors.userMessage.message}</span>}
      </div>
      <button type="submit"
        className={`button feedback-form__button`}
        disabled={isLoading}>
        {isLoading ? 'Sending...' : 'Send'}
      </button>
    </form>
  )
}


const Feedback = () => {

  return (
    <section className="feedback section">
      <div className="container">
        <h2 className="title section__title feedback__title">Any questions?
        </h2>
        <p className="section__sub-title feedback__sub-title">Fill out the form below, and we will call you
          back as soon as possible:
        </p>
        <FeedbackForm />
      </div>
    </section>
  )
}

export default Feedback;