import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Vechical from './components/Vechical';
import reportWebVitals from './reportWebVitals';
// import Header from './components/Header';
// import FavoriteColor from './components/FavoriteColor';
// import CarClass from './components/Car_Class';

// const Car = new value.Car();
// const Vechical = new value.Vechical();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Vechical/> */}
    {/* <FavoriteColor/> */}
    {/* <CarClass/> */}
    <Timer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
