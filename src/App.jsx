import { useState } from "react";
import { Cart } from "./Cart";
import { Header } from "./Header";
import { Routes, Route } from "react-router-dom";
import { NotFound } from "./NotFound";

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "chipsy", price: 100, count: 0 },
    { id: 2, name: "pepsi", price: 200, count: 0 },
    { id: 3, name: "cigarettes", price: 300, count: 0 },
    { id: 4, name: "baneh", price: 400, count: 0 },
  ]);

  const [theme, setTheme] = useState("light");

  const increment = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, count: product.count + 1 } : product
      )
    );
  };

  const decrement = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id && product.count > 0
          ? { ...product, count: product.count - 1 }
          : product
      )
    );
  };

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const reset = () => {
    setProducts(products.map((product) => ({ ...product, count: 0 })));
  };

  return (
    <div data-theme={theme}>
      <Routes>
        {/* Show Header only on the home page */}
        <Route
          path='/'
          element={
            <>
              <Header />
              <Cart
                products={products}
                increment={increment}
                decrement={decrement}
                reset={reset}
                changeTheme={changeTheme}
                theme={theme}
              />
            </>
          }
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
