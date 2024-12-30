import s from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';
import { Image } from '../App/App';


export type ImageGalleryProps = {
  images: Image[];
  onImageClick: (image: Image) => void;
};

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onImageClick }) => {
  return (
    <ul className={s.gallery}>
      {images.map((image) => (
        <li key={image.id} className={s.item}>
          <ImageCard image={image} onClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;