import { FiMoreVertical } from "react-icons/fi";
//import { mockDeliveries } from "../../mock/data";
import styles from "./DeliveryTable.module.css";
import { useEffect, useState } from "react";
import { getDeliveries } from "../../services/deliveries";
import { Delivery } from "../../types/Delivery";


export const DeliveryTable = () => {
    const [deliveries, setDeliveries] = useState<Delivery[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getDeliveries()
                setDeliveries(data)
            } catch (error) {
                console.error("Ошибка при получении поставок", error)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    if (loading) return <p>Загрузка...</p>
    
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

            {deliveries.map((item) => (
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
