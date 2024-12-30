import { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import s from './App.module.css';
import ImageGallery from '../ImageGallery/ImageGallery';
import SearchBar from '../SearchBar/SearchBar';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageModal from '../ImageModal/ImageModal';

export type Image = {
  id: string;
  urls: { small: string; regular: string };
  alt_description: string | null;
  description: string | null;
  user: { name: string };
  likes: number;
};

const App: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const API_KEY = 'JyNgZqGkyp-nusF9kEkLmb9tATZhW2CiODfKDVoF8Og';
  const API_URL = 'https://api.unsplash.com/search/photos';

  const fetchImages = async (query: string, page: number) => {
    const response = await axios.get<{ results: Image[]; total_pages: number }>(API_URL, {
      params: { query, page, per_page: 12 },
      headers: { Authorization: `Client-ID ${API_KEY}` },
    });
    return response.data;
  };

  useEffect(() => {
    if (!query.trim()) return;

    const loadImages = async () => {
      setIsLoading(true);
      try {
        const data = await fetchImages(query, page);
        setImages((prevImages) => (page === 1 ? data.results : [...prevImages, ...data.results]));
        setTotalPages(data.total_pages);
        setError(null);
      } catch {
        setError('Failed to fetch images. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    loadImages();
  }, [query, page]);

  const handleSearchSubmit = (newQuery: string) => {
    if (query === newQuery) return;
    setQuery(newQuery);
    setPage(1);
    setImages([]);
    setTotalPages(0);
    setError(null);
    toast.success(`Searching for "${newQuery}"`);
  };

  const handleLoadMore = () => {
    if (page < totalPages) setPage((prevPage) => prevPage + 1);
  };

  const openModal = (image: Image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  return (
    <div className={s.wrapper}>
      <header>
        <SearchBar onSubmit={handleSearchSubmit} />
      </header>
      <section>
        {query && error && <ErrorMessage message={error} />}
        <ImageGallery images={images} onImageClick={openModal} />
        {images.length > 0 && page < totalPages && !isLoading && <LoadMoreBtn onClick={handleLoadMore} />}
        {isLoading && <Loader />}
        {!isLoading && images.length === 0 && query && <p>No images found for "{query}". Try a different search!</p>}
      </section>
      {selectedImage && <ImageModal isOpen={!!selectedImage} image={selectedImage} onClose={closeModal} />}
    </div>
  );
};

export default App;