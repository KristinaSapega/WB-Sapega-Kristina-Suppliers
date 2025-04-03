import { useState } from "react"
import { Delivery } from "../../types/Delivery"
import styles from "./CreateModal.module.css"
import { addDeliveries } from "../../services/deliveries"
import { X } from "lucide-react"
import DatePicker from "react-datepicker"
import { Calendar } from "lucide-react"
import { ru } from "date-fns/locale"
import "react-datepicker/dist/react-datepicker.css"
import { format } from "date-fns"
import { useDispatch } from "react-redux"
import { addDelivery } from "../../store/deliveriesSlice"


type Props = {
    onClose: () => void
    onAdd: (newDelivery: Delivery) => void
}

const cities = ["Москва", "Псков", "Тверь", "Абакан", "Нижний Новгород", "Кострома", "Ярославль"]
const types = ["Короб", "Монопаллета"]
const warehouses = ["Склад", "СЦ Абакан", "Черная грязь", "Внуково", "Белая дача", "Электросталь", "Вёшки"]
const statuses = ["В пути", "Задерживается"]


export const CreateModal = ({ onClose }: Props) => {
    const [form, setForm] = useState<Delivery>({
        id: Math.floor(Math.random() * 100000),
        date: '',
        city: 'Москва',
        amount: 0,
        type: 'Короб',
        warehouse: 'Склад',
        address: '—',
        status: 'В пути',

    })

    const [date, setDate] = useState<Date | null>(null)
    const [showCalendar, setShowCalendar] = useState(false)

    const dispatch = useDispatch()

    const handleChange = (field: keyof Delivery, value: string | number) => {
        setForm((prev) => ({ ...prev, [field]: value }))
    }

    const handleSubmit = async () => {
        try {
            const newDelivery = await addDeliveries(form)
            dispatch(addDelivery(newDelivery))
            onClose()
        } catch (error) {
            console.error("Ошибка при создании", error)
        }
    }

    return (
        <div className={styles.foreground}>
            <div className={styles.modal}>
                <button className={styles.close} onClick={onClose}> <X size={24} color="#fff" /> </button>
                <div className={styles.headerText}>
                    <h2 className={styles.title}>Новая поставка</h2>
                    <p className={styles.id}>ID: #{form.id}</p>
                </div>

                <form className={styles.form} onSubmit={(e) => e.preventDefault()}>

                    <div className={styles.field}>
                        <label htmlFor="date">Дата поставки</label>
                        <div className={styles.datePickerWrapper}>
                            <input
                                type="text"
                                className={styles.dateInput}
                                value={form.date}
                                placeholder="__.__.____"
                                readOnly
                            />
                            <Calendar
                                size={20}
                                className={styles.calendarIcon}
                                onClick={() => setShowCalendar((prev) => !prev)}
                            />
                            {showCalendar && (
                                <div className={styles.dateOver}>
                                    <DatePicker
                                        selected={date}
                                        onChange={(selectedDate: Date | null) => {
                                            if (selectedDate) {
                                                setDate(selectedDate)
                                                const formatted = format(selectedDate, "dd.MM.yyyy", { locale: ru })
                                                setForm((prev) => ({ ...prev, date: formatted }))
                                                setShowCalendar(false)
                                            }
                                        }}
                                        locale={ru}
                                        inline
                                        calendarClassName="react-datepicker"
                                        dayClassName={() => "react-datepicker__day"}
                                    />
                                </div>
                            )}
                        </div>
                    </div>

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
                    <button className={styles.saveBtn} onClick={handleSubmit}>Создать</button>
                    <button className={styles.cancelBtn} onClick={onClose}>Отменить</button>
                </div>
            </div>
        </div>
    )

}
