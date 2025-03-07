export const Proudect = ({
  product: { id, name, price, items },
  increment,
  decrement,
  theme,
  delProduct,
}) => {
  return (
    <div
      className={`flex justify-around items-center w-[90%] h-15 ${
        theme === "dark" ? "bg-blue-600" : "bg-gray-200"
      } my-2 rounded-4xl text-xs md:text-base `}>
      <h1>ID : {id}</h1>
      <h1>Name : {name}</h1>
      <h1>Price : {price}</h1>
      <h1>Items : {items}</h1>
      <button
        className='btn btn-success btn-xs md:btn-md'
        onClick={() => increment(id)}>
        +
      </button>
      <button
        className='btn btn-warning btn-xs md:btn-md'
        onClick={() => decrement(id)}>
        -
      </button>
      <button
        className='btn btn-error btn-xs md:btn-md'
        onClick={() => delProduct(id)}>
        Del
      </button>
      <h1>Total : ${items * price}</h1>
    </div>
  );
};
