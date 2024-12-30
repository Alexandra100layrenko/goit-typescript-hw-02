import ReactModal from 'react-modal';
import s from './ImageModal.module.css';

export type Image = {
  urls: { regular: string };
  alt_description: string | null;
  description: string | null;
  user: { name: string };
  likes: number;
};

export type ImageModalProps = {
  isOpen: boolean;
  image: Image;
  onClose: () => void;
};

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, image, onClose }) => {
  ReactModal.setAppElement('#root');

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = 'fallback-image-url.jpg';
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={s.modal}
      overlayClassName={s.overlay}
    >

      <img 
        src={image.urls.regular} 
        alt={image.alt_description || 'Image'} 
        className={s.image} 
        onError={handleImageError}
      />

      <p>{image.description || 'No description available'}</p>
      <p>Author: {image.user.name || 'Unknown'}</p>
      <p>❤️ {image.likes || 0}</p>
      <button onClick={onClose} className={s.closeBtn}>
        Close
      </button>
    </ReactModal>
  );
};

export default ImageModal;