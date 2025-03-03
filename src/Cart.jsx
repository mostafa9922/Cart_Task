import { MdDarkMode } from "react-icons/md";
import { Proudect } from "./Proudect";

export const Cart = ({
  products,
  increment,
  decrement,
  reset,
  changeTheme,
  theme,
}) => {
  return (
    <div className='w-full h-[90vh] h- flex justify-center items-center'>
      <div className='w-[100vw] h-[90%] flex flex-col justify-around items-center'>
        <h1 className='w-[100%] text-center text-5xl text-green-500 font-bold'>
          Cart Items
        </h1>
        <div className='controls w-[100%] flex justify-around items-center'>
          <button className='btn btn-info' onClick={() => reset()}>
            Reset
          </button>
          <button className='btn btn-error'>Delete Cart</button>
          <button className='btn btn-sm' onClick={() => changeTheme()}>
            <MdDarkMode />
          </button>
        </div>
        <div className='items w-[100%] flex flex-col justify-around items-center'>
          {products.map((product, index) => (
            <Proudect
              key={index}
              product={product}
              increment={increment}
              decrement={decrement}
              theme={theme}
            />
          ))}
        </div>
        <h1 className='w-[100%] text-center text-4xl text-green-500 font-bold'>
          Total Paid : $
          {products.reduce(
            (acc, product) => acc + product.count * product.price,
            0
          )}
        </h1>
      </div>
    </div>
  );
};
