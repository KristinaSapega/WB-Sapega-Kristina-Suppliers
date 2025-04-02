import styles from "./Sidebar.module.css"
import logo from "../../assets/logo.svg"

export const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
          <img src={logo} alt="WB logo" className={styles.logo} />
        </aside>
      )
}