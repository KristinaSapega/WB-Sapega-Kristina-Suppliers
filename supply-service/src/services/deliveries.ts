import { Delivery } from "../types/Delivery"
import { api } from "./api"

export const getDeliveries = async (): Promise<Delivery[]> => {
    const response = await api.get('/deliveries')
    return response.data
};

export const addDeliveries = async (delivery: Delivery): Promise<Delivery> => {
    const response = await api.post('/deliveries', {
        ...delivery,
        id: delivery.id.toString(),
      })
      return {
        ...response.data,
        id: Number(response.data.id),
      }
    }

export const deleteDeliveries = async (id: number): Promise<void> => {
    const response = await api.delete(`/deliveries/${id}`)
    return response.data
};

export const updateDeliveries = async (id: number, data: Delivery): Promise<Delivery> => {
    const response = await api.put(`/deliveries/${id}`, data)
    return response.data
}