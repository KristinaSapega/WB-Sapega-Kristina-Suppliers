import { useState } from 'react';
import styles from './Header.module.css';
import { Plus, Search, ChevronDown } from 'lucide-react';
import { CreateModal } from '../Modal/CreateModal';
import  burger  from "../../assets/burger.svg";
import  logo  from "../../assets/logo.svg";
import  reload  from "../../assets/reload.svg";
import list from "../../assets/list.svg";



export const Header = () => {
  const [isCreateOpen, setIsCreateOpen] = useState(false)

  return (
    <>
    <div className={styles.mobileTopbar}>
  <button className={styles.menuButton}>
    <img src={burger} alt="menu" width={36} height={36}/>
  </button>
  <img src={logo} alt="WB logo" className={styles.mobileLogo} width={43} height={24} />
  <div className={styles.rightIcons}>
    <img src={reload} alt="reload" width={36} height={36}/>
    <img src={list} alt="list" width={36} height={36}/>
  </div>
</div>
      <div className={styles.header}>
        <h1 className={styles.title}>Поставки</h1>
        <button className={styles.addButtonM} onClick={() => setIsCreateOpen(true)}>
          <Plus size={36} />
        </button>
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
