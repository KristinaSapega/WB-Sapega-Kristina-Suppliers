import styles from "./DropdownMenu.module.css"

type Props = {
    onEdit: () => void;
    onDelete: () => void
}

export const DropdownMenu = ({onEdit, onDelete}: Props) => {
    return (
        <div className={styles.menu}>
            <button onClick={onEdit}>Редактировать</button>
            <button onClick={onDelete}>Отменить поставку</button>
        </div>
    )
}