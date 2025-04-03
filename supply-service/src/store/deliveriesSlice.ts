import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Delivery } from "../types/Delivery"

type DeliveriesState = {
    items: Delivery[]
  }

  const initialState: DeliveriesState = {
    items:[]
  }

  const deliveriesSlice = createSlice({
    name: 'deliveries',
    initialState,
    reducers: {
        setDeliveries: (state, action: PayloadAction<Delivery[]>) => {
            state.items = action.payload;
        },

        addDelivery: (state, action: PayloadAction<Delivery>) => {
            state.items = [action.payload, ...state.items];
        },
    }

  })


export const { setDeliveries, addDelivery } = deliveriesSlice.actions
export default deliveriesSlice.reducer