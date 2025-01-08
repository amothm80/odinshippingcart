import styles from './Nav.module.css';
import { useProductCategories } from '/src/api/useProductCategories.jsx';
function capitalizeFirstLetter(category) {
  const categoryWords = category.split(' ');
  const categoryWordsCapitalized = categoryWords.map((word) => {
    return String(word).charAt(0).toUpperCase() + String(word).slice(1);
  });
  return categoryWordsCapitalized.join(' ');
}

function NavButton({ element, setCategory }) {
  const category = capitalizeFirstLetter(element);
  return (
    <button
      className={styles.navButton}
      onClick={() => {
        setCategory(element);
      }}
    >
      {category}
    </button>
  );
}

export default function Nav({ setCategory }) {
  const { categories, isLoading, error } = useProductCategories();
  if (error) return <div className={styles.nav}>Failed to Load...</div>;
  if (isLoading) return <div className={styles.nav}>Loading...</div>;
  return (
    <nav className={styles.nav}>
      {categories.map((element) => {
        return (
          <NavButton
            key={element}
            element={element}
            setCategory={setCategory}
          />
        );
      })}
    </nav>
  );
}
