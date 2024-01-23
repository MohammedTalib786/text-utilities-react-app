import React from "react";
import ReactDOM from 'react-dom/client';
import App from './App';

// Old Method
// ReactDOM.render(<App />, document.getElementById('root'))

// New Method
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


// Our prefered Method
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)
