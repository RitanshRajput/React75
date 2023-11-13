import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
      box-sizing: border-box;
      margin: 0px;
      padding: 0px;
    }

    body{
      background-color: #FBEAE7;
      color: white;
      height: 100vh;
      font-family: 'Poppins', sans-serif;
    }
`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
