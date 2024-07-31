import { createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";

const initialState = {
    count : 0
}

export const counterSlice = createSlice({
    name : 'counter',
    initialState,
    reducers :{
        increment : (state: any) => {
            state.count += 1;
        },
        decrement : (state: any) => {
            state.count -= 1;
        },
        reset : (state: any) => {
            state.count = 0;
        },
        incrementByAmount: (state:any, actions:any) => {
            console.log(actions);
            
            state.count += actions.payload;
        }
    }
});

export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;