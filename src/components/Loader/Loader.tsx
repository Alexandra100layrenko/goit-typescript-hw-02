import { Audio } from 'react-loader-spinner';
import s from './Loader.module.css';

const Loader: React.FC = () => {
  return (
    <Audio
      height="80"
      width="80"
      radius="9"
      color="green"
      ariaLabel="loading"
      className={s.loader}
    />
  );
};

export default Loader;