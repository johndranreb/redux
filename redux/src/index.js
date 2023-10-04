import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore} from '@reduxjs/toolkit'
import { Provider } from 'react-redux'; // this what we will be using determine which components should have access to the store
import userReducer from "./features/user";
import themeReducer from "./features/theme";

const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
  }
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> 
    <App />
    </Provider>
  </React.StrictMode>
);
//wrap around the provider component and everything in our app should have access to the store


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
