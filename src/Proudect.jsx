export const Proudect = ({
  product: { id, name, price, count },
  increment,
  decrement,
  theme,
}) => {
  return (
    <div
      className={`flex justify-around items-center w-[90%] h-15 ${
        theme === "dark" ? "bg-blue-600" : "bg-gray-200"
      } my-2 rounded-4xl`}>
      <h1>ID : {id}</h1>
      <h1>Name : {name}</h1>
      <h1>Price : {price}</h1>
      <h1>Count : {count}</h1>
      <button className='btn btn-success' onClick={() => increment(id)}>
        +
      </button>
      <button className='btn btn-warning' onClick={() => decrement(id)}>
        -
      </button>
      <button className='btn btn-error'>Del</button>
      <h1>Total : ${count * price}</h1>
    </div>
  );
};
