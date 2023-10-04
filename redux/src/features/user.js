import {createSlice} from '@reduxjs/toolkit' // a function that allows you to create your reducer in a very easy way intuitive for your to split your logic and more organized.abs


const initialStateValue = {name:"", age: 0, email:""};

export const userSlice = createSlice({
  name: "user", //name of the slice/state
  initialState: {value: initialStateValue}, //initial state
  reducer: {
    login: (state, action) => {  
        state.value = action.payload;
    },

    logout: (state) => {
      state.value = initialStateValue;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;