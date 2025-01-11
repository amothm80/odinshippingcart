import styles from './Nav.module.css';
import { useProductCategories } from '/src/api/useProductCategories.jsx';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

function capitalizeFirstLetter(category) {
  const categoryWords = category.split(' ');
  const categoryWordsCapitalized = categoryWords.map((word) => {
    return String(word).charAt(0).toUpperCase() + String(word).slice(1);
  });
  return categoryWordsCapitalized.join(' ');
}

function NavButton({ element }) {
  const category = capitalizeFirstLetter(element);
  const link = `category/${element}`;
  return (
    <Link className={styles.navButton} key={element} to={link}>
      {category}
    </Link>
  );
}

NavButton.propTypes = {
  element: PropTypes.string,
}

export default function Nav() {
  const { categories, isLoading, error } = useProductCategories();
  if (error) return <div className={styles.nav}>Failed to Load...</div>;
  if (isLoading) return <div className={styles.nav}>Loading...</div>;

  return (
    <nav className={styles.nav}>
      {categories.map((element) => {
        return <NavButton key={element} element={element} />;
      })}
    </nav>
  );
}
