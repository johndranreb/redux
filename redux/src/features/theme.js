import {createSlice} from '@reduxjs/toolkit' // a function that allows you to create your reducer in a very easy way intuitive for your to split your logic and more organized.abs
import {useDispatch} from "@react-redux"; // is used to modify values of your states


const initialStateValue = "";

export const themeSlice = createSlice({
  name: "theme", //name of the slice/state
  initialState: {value: initialStateValue}, //initial state
  reducer: {
    changeColor: (state, action) => {  
        state.value = action.payload;
    },
  },
});

export const { changeColor } = themeSlice.actions;

export default userSlice.reducer;