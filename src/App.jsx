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
        <Route path="/react-ecommerce/" exact element={<Home />} />
        <Route path="/react-ecommerce/products/">
          <Route path=":category" element={<ProductList />} />
        </Route>
        <Route path="/react-ecommerce/product/">
          <Route path=":id" element={<Product />} />
        </Route>
        <Route path="/react-ecommerce/cart" element={<Cart />} />

        <Route
          path="/react-ecommerce/signin"
          // element={user ? <Navigate to="/react-ecommerce/" /> : <Login />}
          element={<Login />}
        />

        <Route
          path="/react-ecommerce/signup"
          // element={user ? <Navigate to="/react-ecommerce/" /> : <Register />}
          element={<Register />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
