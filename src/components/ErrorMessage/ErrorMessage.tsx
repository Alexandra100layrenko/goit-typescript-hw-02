import { IoAlertCircle } from 'react-icons/io5';
import s from './ErrorMessage.module.css';

type ErrorMessageProps = {
  message: string;
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className={s.error}>
      <IoAlertCircle size={20} /> {message}
    </div>
  );
};

export default ErrorMessage;