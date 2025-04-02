import styles from "./SegmentNav.module.css"

export const SegmentNav = () => {
    return (
        <nav className={styles.nav}>
          <button className={`${styles.navItem} ${styles.active}`}>Поставки</button>
          <button className={styles.navItem}>Товары</button>
          <button className={styles.navItem}>Цены и скидки</button>
          <button className={styles.navItem}>Аналитика</button>
          <button className={styles.navItem}>Реклама</button>
        </nav>
      )

}