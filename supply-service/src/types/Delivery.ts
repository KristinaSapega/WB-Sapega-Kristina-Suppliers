export type DeliveryStatus = 'В пути' | 'Задерживается'

export type DeliveryType = 'Короб' | 'Монопаллета'

export type Delivery = {
  id: number
  date: string
  city: string
  amount: number
  type: DeliveryType
  warehouse: string
  address: string
  status: DeliveryStatus
}
