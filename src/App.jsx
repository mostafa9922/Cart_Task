import { useState } from "react";
import { Cart } from "./Cart";
import { Header } from "./Header";
import { Routes, Route } from "react-router-dom";
import { NotFound } from "./NotFound";

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "chipsy", price: 100, count: 0 },
    { id: 2, name: "pepsi", price: 200, count: 0 },
    { id: 3, name: "cigartes", price: 300, count: 0 },
    { id: 4, name: "baneh", price: 400, count: 0 },
  ]);

  const [theme, setTheme] = useState("light");

  const increment = (id) => {
    const newProducts = products.map((product) => {
      if (product.id === id) {
        product.count += 1;
      }
      return product;
    });
    setProducts(newProducts);
  };

  const decrement = (id) => {
    const newProducts = products.map((product) => {
      if (product.id === id && product.count > 0) {
        product.count -= 1;
      }
      return product;
    });
    setProducts(newProducts);
  };

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const reset = () => {
    const newProducts = products.map((product) => {
      product.count = 0;
      return product;
    });
    setProducts(newProducts);
  };
  return (
    <div data-theme={theme}>
      <Header />
      <Cart
        products={products}
        increment={increment}
        decrement={decrement}
        reset={reset}
        changeTheme={changeTheme}
        theme={theme}
      />
      <Routes>
        <Route path='/App' element={<App />}></Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
