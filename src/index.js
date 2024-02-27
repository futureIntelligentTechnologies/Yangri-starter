import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ProductProvider from "./contexts/ProductContext";
import SideBarProvider from "./contexts/SidebarContext";
import CartProvider from "./contexts/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
    <ProductProvider>
      <SideBarProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </SideBarProvider>
    </ProductProvider>
  </CartProvider>
);
