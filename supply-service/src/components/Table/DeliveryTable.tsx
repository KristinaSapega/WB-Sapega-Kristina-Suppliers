import { FiMoreVertical } from "react-icons/fi";
import { mockDeliveries } from "../../mock/data";
import styles from "./DeliveryTable.module.css";


export const DeliveryTable = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div>Номер</div>
                <div>Дата поставки</div>
                <div>Город</div>
                <div>Количество</div>
                <div>Тип поставки</div>
                <div>Склад</div>
                <div>Статус</div>
                <div></div>
            </div>

            {mockDeliveries.map((item) => (
                <div className={styles.row} key={item.id}>
                    <div>{item.id}</div>
                    <div>{item.date}</div>
                    <div>{item.city}</div>
                    <div>{item.amount} шт.</div>
                    <div>{item.type}</div>
                    <div>
                        <div>{item.warehouse}</div>
                        <div className={styles.address}>{item.address}</div>
                    </div>
                    <div
                        className={`${styles.status} ${item.status === 'В пути'
                                ? styles.inTransit
                                : styles.delayed
                            }`}
                    >
                        {item.status}
                    </div>
                    <div className={styles.menu}>
                        <FiMoreVertical />
                    </div>
                </div>
            ))}
        </div>
    )
}
