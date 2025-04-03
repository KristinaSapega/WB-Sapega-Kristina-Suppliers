import { useState } from 'react';
import styles from './Header.module.css';
import { Plus, Search, ChevronDown } from 'lucide-react';
import { CreateModal } from '../Modal/CreateModal';

export const Header = () => {
  const [isCreateOpen, setIsCreateOpen] = useState(false)

    return (
      <>
        <div className={styles.header}>
          <h1 className={styles.title}>Поставки</h1>
          <div className={styles.controls}>
            <button className={styles.addButton} onClick={() => setIsCreateOpen(true)}>
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
        {isCreateOpen && <CreateModal onClose={() => setIsCreateOpen(false)} />}
        </>
      )
}
