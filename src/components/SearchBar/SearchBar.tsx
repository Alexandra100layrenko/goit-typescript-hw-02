import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { IoSearch } from 'react-icons/io5';
import s from './SearchBar.module.css';

type SearchBarProps = {
  onSubmit: (query: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const validationSchema = Yup.object({
    query: Yup.string().required('Please enter a search term'),
  });

  const initialValues = { query: '' };

  const handleSubmit = (values: { query: string }, { resetForm }: { resetForm: () => void }) => {
    onSubmit(values.query);
    resetForm();
  };

  return (
    <header className={s.header}>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ handleSubmit, values, setFieldValue }) => (
          <Form onSubmit={handleSubmit} className={s.form}>
            <div className={s.inputWrapper}>
              <button
                type="submit"
                className={s.searchButton}
                aria-label="Search"
                disabled={!values.query.trim()}
              >
                <IoSearch size={20} />
              </button>
              <Field
                name="query"
                type="text"
                placeholder="Search images and photos"
                className={s.input}
                autoComplete="off"
                autoFocus
                value={values.query}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFieldValue('query', e.target.value)}
              />
            </div>
            <ErrorMessage name="query" component="div" className={s.errorMessage} />
          </Form>
        )}
      </Formik>
    </header>
  );
};

export default SearchBar;