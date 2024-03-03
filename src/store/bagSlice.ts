import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      title: 'MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch',
      imgUrl: '/src/assets/img/products/image.png',
      quantity: 1,
      price: 1293.00,
      discount: 433.00,
      color: "Black",
      guaranteed: true,
      freeDelivery: true,
      inStock: false
    },
    {
      title: 'Laptop Privacy Screen for 13 inch MacBook Pro & MacBook Air',
      imgUrl: '/src/assets/img/products/image-1.png',
      quantity: 1,
      price: 1293.00,
      discount: 63.26,
      color: "Black",
      guaranteed: true,
      freeDelivery: false,
      inStock: false
    },
    {
      title: 'Inateck 12.3-13 Inch MacBook Case Sleeve ',
      imgUrl: '/src/assets/img/products/image-2.png',
      quantity: 1,
      price: 23.26,
      color: "Black",
      guaranteed: false,
      freeDelivery: true,
      inStock: true
    },
  ]
}

export const bagSlice = createSlice({
  name: 'bag',
  initialState,
  reducers: {
    decrement: (state: typeof initialState, action: PayloadAction<number>) => {
      const {quantity} = state.items[action.payload]
      if (quantity === 1) {
        state.items.splice(action.payload, 1)
      } else {
        state.items[action.payload].quantity--
      }
    },
    increment: (state: typeof initialState, action: PayloadAction<number>) => {
      state.items[action.payload].quantity++
    },
    deleteItem: (state: typeof initialState, action: PayloadAction<number>) => {
      state.items.splice(action.payload, 1)
    }
  }
})

export const { increment, decrement, deleteItem } = bagSlice.actions

export default bagSlice.reducer
