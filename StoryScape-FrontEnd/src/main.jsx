import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/login/login.jsx';
import SignUp from './components/signUp/signUp.jsx';
import UploadForm from './components/uploadForm/uploadForm.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<App />} />
        <Route path="login" element={<Login />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="uploadForm" element={<UploadForm />} />
        {/* <Route path="" element={<CardDetails />} />
        <Route path="" element={<CardDetails />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./components/App/index";
// import reportWebVitals from "./reportWebVitals";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import CardCollection from "./pages/CardCollection";
// import CardDetails from "./pages/CardDetails/CardDetails";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route index path="/" element={<App />} />
//         <Route path="cardCollection" element={<CardCollection />} />
//         <Route path="cardDetails" element={<CardDetails />} />
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();