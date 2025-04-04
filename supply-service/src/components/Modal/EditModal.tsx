import { useState } from "react"
import { Delivery } from "../../types/Delivery"
import styles from "./EditModal.module.css"
import { updateDeliveries } from "../../services/deliveries"
import { X } from "lucide-react"


type Props = {
    delivery: Delivery
    onClose: () => void
    onSave: (update: Delivery) => void
}
export const EditModal = ({ delivery, onClose, onSave }: Props) => {
    const cities = ["Москва", "Псков", "Тверь", "Абакан", "Нижний Новгород", "Кострома", "Ярославль"]
    const types = ["Короб", "Монопаллета"]
    const warehouses = ["Склад", "СЦ Абакан", "Черная грязь", "Внуково", "Белая дача", "Электросталь", "Вёшки"]
    const statuses = ["В пути", "Задерживается"]

    const [form, setForm] = useState<Delivery>({ ...delivery })
    const [saving, setSaving] = useState(false)

    const handleChange = (field: keyof Delivery, value: string | number) => {
        setForm((prev) => ({ ...prev, [field]: value }))
    }

    const handleSubmit = async () => {
        try {
            setSaving(true)
            const updated = await updateDeliveries(form.id, form)
            onSave(updated)
            onClose()
        } catch (error) {
            console.error("Ошибка при обновлении", error)
        } finally {
            setSaving(false)
        }
    }

    return (
        <div className={styles.foreground}>
            <div className={styles.modal}>
                <button className={styles.close} onClick={onClose}> <X size={24} color="#fff" /> </button>
                <div className={styles.headerText}>
                    <h2 className={styles.title}>Редактирование</h2>
                    <p className={styles.id}>ID: #{delivery.id}</p>
                </div>

                <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                    <div className={styles.field}>
                        <label htmlFor="city">Город</label>
                        <select
                            id="city"
                            className={styles.select}
                            value={form.city}
                            onChange={(e) => handleChange("city", e.target.value)}
                        >
                            {cities.map((city) => (
                                <option key={city} value={city}>{city}</option>
                            ))}
                        </select>
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="type">Тип поставки</label>
                        <select
                            id="type"
                            className={styles.select}
                            value={form.type}
                            onChange={(e) => handleChange("type", e.target.value)}
                        >
                            {types.map((type) => (
                                <option key={type} value={type}>{type}</option>
                            ))}
                        </select>
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="amount">Количество</label>
                        <div className={styles.amountWrapper}>
                            <input
                                id="amount"
                                className={styles.input}
                                type="number"
                                value={form.amount === 0 ? '' : form.amount}
                                onChange={(e) => handleChange("amount", +e.target.value)}
                            />
                            <span className={styles.unit}>шт.</span>
                        </div>
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="warehouse">Склад</label>
                        <select
                            id="warehouse"
                            className={styles.select}
                            value={form.warehouse}
                            onChange={(e) => handleChange("warehouse", e.target.value)}
                        >
                            {warehouses.map((warehouse) => (
                                <option key={warehouse} value={warehouse}>{warehouse}</option>
                            ))}
                        </select>
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="status">Статус</label>
                        <select
                            id="status"
                            className={styles.select}
                            value={form.status}
                            onChange={(e) => handleChange("status", e.target.value)}
                        >
                            {statuses.map((status) => (
                                <option key={status} value={status}>{status}</option>
                            ))}
                        </select>
                    </div>
                </form>
                <div className={styles.actions}>
                    <button className={styles.saveBtn} onClick={handleSubmit} disabled={saving}>
                        {saving ? "Сохраняем..." : "Сохранить"}
                    </button>
                    <button className={styles.cancelBtn} onClick={onClose}>Отменить</button>
                </div>
            </div>
        </div>
    )

}