import { Delivery } from '../types/Delivery'

export const mockDeliveries: Delivery[] = [
    {
        id: 154814,
        date: '28.06.2024',
        city: 'Москва',
        amount: 487,
        type: 'Короб',
        warehouse: 'Черная Грязь',
        address: 'д. Черная Грязь, ул. Промышленная, с.2',
        status: 'В пути',
    },
    {
        id: 26589,
        date: '26.06.2024',
        city: 'Москва',
        amount: 895,
        type: 'Монопаллета',
        warehouse: 'Вёшки',
        address: 'Линкинское шоссе, 2-й километр, вл1с1',
        status: 'В пути',
    },
    {
        id: 984153,
        date: '26.06.2024',
        city: 'Псков',
        amount: 748,
        type: 'Короб',
        warehouse: 'Склад',
        address: 'ул. Индустриальная, д. 9/1',
        status: 'Задерживается',
    },
]
