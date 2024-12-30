import s from './LoadMoreBtn.module.css';

export type LoadMoreBtnProps = {
  onClick: () => void;
};

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => (
  <button onClick={onClick} className={s.loading}>
    Load more
  </button>
);

export default LoadMoreBtn;