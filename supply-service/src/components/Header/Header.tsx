import styles from './Header.module.css';
import { Plus, Search, ChevronDown } from 'lucide-react';

export const Header = () => {
    return (
        <div className={styles.header}>
          <h1 className={styles.title}>Поставки</h1>
          <div className={styles.controls}>
            <button className={styles.addButton}>
              <Plus size={20} />
              Добавить поставку
            </button>
            <div className={styles.sortSearch}>
              <button className={styles.sortButton}>
                По номеру
                <ChevronDown size={24} />
              </button>
              <div className={styles.searchWrapper}>
                <input
                  type="text"
                  placeholder="Поиск..."
                  className={styles.searchInput}
                />
                <Search className={styles.searchIcon} />
              </div>
            </div>
          </div>
        </div>
      )
}