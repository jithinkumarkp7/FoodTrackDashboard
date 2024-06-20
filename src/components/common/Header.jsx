import React from 'react';
import { FaBars, FaBell, FaEnvelope, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = ({ toggleSidebar }) => {
  const iconSize = 20;
  return (
    <header className="bg-white shadow-md p-4 flex items-center justify-between">
      <div className="flex ">
        <button onClick={toggleSidebar} className="text-gray-600 mr-4 bg-transparent p-2 focus:outline-none focus:border-transparent">
          <FaBars />
        </button>
        <h1 className="text-2xl font-bold text-gray-800 font-sans">Dashboard</h1>
      </div>

      <nav>
        <ul className="flex space-x-4">
          <li className='flex'>
            <div className="flex items-end justify-end">
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 rounded-md border bg-[#ededed] border-gray-300 focus:outline-non"
              />
            </div>
          </li>
          <li className='flex'>
            <Link to="/notification" className="flex items-center hover:text-gray-300 ">
              <FaBell size={iconSize} className="mr-2" />
            </Link>
          </li>
          <li className='flex'>
            <Link to="/notification" className="flex items-center hover:text-gray-300 ">
              <FaEnvelope size={iconSize} className="mr-2" />
            </Link>
          </li>
          <li className="flex">
            <Link to="/notification" className="flex items-center hover:text-gray-300">
              <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmnBqL5IX6pxZ9vUFfeqc-ezMlPfqveUbJ5yvY8xJs0u5GoYBKWXkpKXk2iv5PB53VSvQ&usqp=CAU'} alt="User" className="h-8 w-8 rounded-full object-cover" />
              <span className="ml-2">{'Jithin'}</span>
            </Link>
          </li>
          <li className="flex">
            <Link to="/notification" className="flex items-center hover:text-gray-300">
              <FaSignOutAlt size={iconSize} className="mr-2" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
