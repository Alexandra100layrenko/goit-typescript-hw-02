import s from './ImageCard.module.css';

type Image = {
  urls: { small: string };
  alt_description: string | null;
};

type ImageCardProps = {
  image: Image;
  onClick: (image: Image) => void;
};

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
  return (
    <div onClick={() => onClick(image)} className={s.card}>
      <img src={image.urls.small} alt={image.alt_description || 'Image'} className={s.image} />
    </div>
  );
};

export default ImageCard;