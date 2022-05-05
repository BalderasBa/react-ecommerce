import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
// import { users } from "./data";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/products/">
          <Route path=":category" element={<ProductList />} />
        </Route>
        <Route path="/product/">
          <Route path=":id" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />

        <Route
          path="/signin"
          // element={user ? <Navigate to="/" /> : <Login />}
          element={<Login />}
        />

        <Route
          path="/signup"
          // element={user ? <Navigate to="/" /> : <Register />}
          element={<Register />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
