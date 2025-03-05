import { TiShoppingCart } from "react-icons/ti";
export const Header = ({ products, addItem }) => {
  return (
    <div className='h-[10vh] w-[100vw]'>
      <div className='navbar bg-base-100 shadow-sm w-[100%]'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                {" "}
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'>
              <li>
                <a>chipsy</a>
              </li>
              <li>
                <a>pepsi</a>
              </li>
              <li>
                <a>cigartes</a>
              </li>
              <li>
                <a>baneh</a>
              </li>
            </ul>
          </div>
          <a className='btn btn-ghost text-xl'>Cart</a>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1'>
            <li>
              <a onClick={(e) => addItem(e.target.innerHTML)}>shipcy</a>
            </li>
            <li>
              <a onClick={(e) => addItem(e.target.innerHTML)}>pesi</a>
            </li>
            <li>
              <a onClick={(e) => addItem(e.target.innerHTML)}>molto</a>
            </li>
            <li>
              <a onClick={(e) => addItem(e.target.innerHTML)}>kranshy</a>
            </li>
            <li>
              <a onClick={(e) => addItem(e.target.innerHTML)}>cigaretes</a>
            </li>
          </ul>
        </div>
        <div className='navbar-end relative'>
          <div className='absolute right-8'>
            <div className='indicator'>
              <span className='indicator-item badge badge-secondary'>
                {products.length}
              </span>
              <TiShoppingCart className='  text-2xl' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
