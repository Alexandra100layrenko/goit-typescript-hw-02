import s from './LoadMoreBtn.module.css';

type LoadMoreBtnProps = {
  onClick: () => void;
};

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => (
  <button onClick={onClick} className={s.loading}>
    Load more
  </button>
);

export default LoadMoreBtn;