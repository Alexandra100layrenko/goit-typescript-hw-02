import { Audio } from 'react-loader-spinner';
import s from './Loader.module.css'

const Loader: React.FC = () => {
  return (
    <div className={s.loader}>
      <Audio
        height="80"
        width="80"
        color="green"
        ariaLabel="loading"
      />
    </div>
  );
};

export default Loader;