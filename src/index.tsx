import React from 'react';
import ReactDOM from 'react-dom/client';
import RoomView from './room-view'
import './index.css';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
    <RoomView></RoomView>
  // </React.StrictMode>
)
