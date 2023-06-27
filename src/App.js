import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Product from "./Product";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Cart from "./Cart";
import { Provider } from "react-redux";
import estore from "./store/store";
function App() {
  return (
    <BrowserRouter>
      <Provider store={estore}>
        <Dashboard />
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<Product />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
