import { Delivery } from "../types/Delivery";
import { api } from "./api";

export const getDeliveries = async (): Promise<Delivery[]> => {
    const response = await api.get('/deliveries')
    return response.data
};

export const addDeliveries = async (delivery: Delivery): Promise<Delivery> => {
    const response = await api.post('/deliveries', delivery)
    return response.data
};

export const deleteDeliveries = async (id: number): Promise<void> => {
    const response = await api.delete(`/deliveries/${id}`)
    return response.data
}