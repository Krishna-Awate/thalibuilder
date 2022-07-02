import { createSlice } from '@reduxjs/toolkit';
import chapati from '../components/Images/Chapati.png';
import daal from '../components/Images/Daal.png';
import pickle from '../components/Images/Pickle.png';
import curd from '../components/Images/curd.png';
import sweet from '../components/Images/sweet.png';
import paneer from '../components/Images/paneer.png';

const initialState = {
  thaliItem: [
    { item: 'Chapati', price: 20, image: chapati, isDone: false, quantity: 1 },
    { item: 'Pickle', price: 10, image: pickle, isDone: false, quantity: 1 },
    { item: 'Curd', price: 30, image: curd, isDone: false, quantity: 1 },
    { item: 'Sweet', price: 40, image: sweet, isDone: false, quantity: 1 },
    { item: 'Daal', price: 100, image: daal, isDone: false, quantity: 1 },
    {
      item: 'Paneer Dish',
      price: 200,
      image: paneer,
      isDone: false,
      quantity: 1,
    },
  ],
  selectedItem: [],
};

export const thaliSlice = createSlice({
  name: 'thali',
  initialState,
  reducers: {
    initialSelectList: (state, action) => {
      const listInLocalStorage = JSON.parse(localStorage.getItem('list'));
      if (listInLocalStorage) {
        state.selectedItem = listInLocalStorage;
      }
    },
    addItem: (state, action) => {
      state.selectedItem.push(state.thaliItem[action.payload.index]);
    },
    addQuantity: (state, action) => {
      state.selectedItem[action.payload].quantity += 1;
    },
    changeListQty: (state, action) => {
      state.thaliItem[action.payload.index].quantity = action.payload.value;
    },
    changeSelectedQty: (state, action) => {
      state.selectedItem[action.payload.index].quantity = action.payload.value;
    },
    removeItem: (state, action) => {
      state.selectedItem.splice(action.payload, 1);
    },
  },
});

export const {
  initialSelectList,
  addItem,
  removeItem,
  addQuantity,
  changeListQty,
  changeSelectedQty,
} = thaliSlice.actions;

export default thaliSlice.reducer;
