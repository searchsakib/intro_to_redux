import { PayloadAction, Reducer, createSlice } from '@reduxjs/toolkit';

export interface ICounterState {
  value: number;
}

const initialState: ICounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value++;
    },
    incrementByValue: (state, action: PayloadAction<number>) => {
      state.value = state.value + action.payload;
    },
    decrement: (state) => {
      state.value--;
    },
  },
});

export const { increment, decrement, incrementByValue } = counterSlice.actions;

export default counterSlice.reducer as Reducer<ICounterState>;
