import { useState } from "react";
import { Cart } from "./Cart";
import { Header } from "./Header";
import { Routes, Route } from "react-router-dom";
import { NotFound } from "./NotFound";

const App = () => {
  const [products, setProducts] = useState([
    { id: 0, name: "shipcy", price: 100, items: 1 },
    { id: 1, name: "pesi", price: 200, items: 1 },
    { id: 2, name: "molto", price: 300, items: 1 },
    { id: 3, name: "kranshy", price: 400, items: 1 },
    { id: 4, name: "cigaretes", price: 500, items: 1 },
  ]);

  const [copyProducts, setcopyProducts] = useState([
    { id: 0, name: "shipcy", price: 100, items: 1 },
    { id: 1, name: "pesi", price: 200, items: 1 },
    { id: 2, name: "molto", price: 300, items: 1 },
    { id: 3, name: "kranshy", price: 400, items: 1 },
    { id: 4, name: "cigaretes", price: 500, items: 1 },
  ]);

  const [theme, setTheme] = useState("light");

  const increment = (id) => {
    const newProducts = products.map((product) => {
      if (product.id === id) {
        product.items += 1;
      }
      return product;
    });
    setProducts(newProducts);
  };

  const decrement = (id) => {
    const newProducts = products.map((product) => {
      if (product.id === id && product.items > 1) {
        product.items -= 1;
      }
      return product;
    });
    setProducts(newProducts);
  };

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const reset = () => {
    if (products.length !== 0) {
      const newProducts = products.map((product) => {
        product.items = 1;
        return product;
      });
      setProducts(newProducts);
    } else {
      setProducts([
        { id: 0, name: "shipcy", price: 100, items: 1 },
        { id: 1, name: "pesi", price: 200, items: 1 },
        { id: 2, name: "molto", price: 300, items: 1 },
        { id: 3, name: "kranshy", price: 400, items: 1 },
        { id: 4, name: "cigaretes", price: 500, items: 1 },
      ]);
    }
  };

  const delAll = () => {
    setProducts([]);
  };

  const delProduct = (id) => {
    const newProducts = products.filter((product) => product.id !== id);
    const newProducts1 = products.map((product) => {
      if (product.id === id) {
        product.items = 1;
      }
      return product;
    });
    setProducts(newProducts);
  };

  const addItem = (name) => {
    const newProduct = copyProducts.find((product) => product.name === name);
    const newProduct1 = products.find((product) => product.name === name);
    const updatedProducts = products.map((product) => {
      if (product.name === newProduct.name) {
        product.items += 1;
      }
      return product;
    });
    if (newProduct1 === undefined) {
      updatedProducts.push(newProduct);
    }
    setProducts(updatedProducts);
  };

  return (
    <div data-theme={theme}>
      <Routes>
        {/* Show Header only on the home page */}
        <Route
          path='/'
          element={
            <>
              <Header products={products} addItem={addItem} />
              <Cart
                products={products}
                increment={increment}
                decrement={decrement}
                reset={reset}
                changeTheme={changeTheme}
                theme={theme}
                delAll={delAll}
                delProduct={delProduct}
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
