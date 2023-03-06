import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';



axios.interceptors.request.use((request)=>{
  console.log(request);
  request.headers.channelName = 'StayInTouch'
  return request;
},error=>{console.log(error);
return Promise.reject(error)}
)

axios.interceptors.response.use((response)=>{
  console.log(response);
  response.headers.channelName = 'StayInTouch'
  return response;
},error=>{console.log(error);
return Promise.reject(error)}
)

axios.defaults.baseURL="https://jsonplaceholder.typicode.com/"
axios.defaults.headers.common["AUTHORIZATION"]="AUTH_TOKEN"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
