import React, { useState, useRef, useEffect } from 'react';
import logo from '../assets/logo.png'; 

const Navbar = () => {
  const [selectedItem, setSelectedItem] = useState('Home');
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setMenuOpen(false); // Close the menu after selecting an item
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on cleanup
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <nav className="p-4 flex justify-between items-center relative">
    <div className="flex items-center">
      <img src={logo} alt="Logo" className="h-12 mr-2" />
    </div>
    <div className="lg:hidden relative">
      <button onClick={toggleMenu} className="text-white focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"/>
          <line x1="3" y1="6" x2="21" y2="6"/>
          <line x1="3" y1="18" x2="21" y2="18"/>
        </svg>
      </button>
      {menuOpen && (
        <div className="mr-12"> {/* Add the mr-12 class here */}
          <ul className="flex flex-col absolute bg-gray-200 bg-opacity-100 text-black w-48 mt-2 p-2 shadow-lg " >
            <li onClick={() => handleItemClick('Home')} className="cursor-pointer hover:text-green-500">Home</li>
            <li onClick={() => handleItemClick('About')} className="cursor-pointer hover:text-green-500">About</li>
            <li onClick={() => handleItemClick('Services')} className="cursor-pointer hover:text-green-500">Services</li>
            <li onClick={() => handleItemClick('Pages')} className="cursor-pointer hover:text-green-500">Pages</li>
            <li onClick={() => handleItemClick('News')} className="cursor-pointer hover:text-green-500">News</li>
            <li onClick={() => handleItemClick('Contact')} className="cursor-pointer hover:text-green-500">Contact</li>
          </ul>
        </div>
      )}
    </div>
    <ul className="lg:flex hidden space-x-8">
      <li
        className={`text-white text-lg font-bold ${selectedItem === 'Home' ? 'text-green-600' : 'hover:text-green-300'}`}
        onClick={() => handleItemClick('Home')}
      >
        Home
      </li>
      <li
        className={`text-white text-lg font-bold ${selectedItem === 'About' ? 'text-green-600' : 'hover:text-green-300'}`}
        onClick={() => handleItemClick('About')}
      >
        About
      </li>
      <li
        className={`text-white text-lg font-bold ${selectedItem === 'Services' ? 'text-green-600' : 'hover:text-green-300'}`}
        onClick={() => handleItemClick('Services')}
      >
        Services
      </li>
      <li
        className={`text-white text-lg font-bold ${selectedItem === 'Pages' ? 'text-green-600' : 'hover:text-green-300'}`}
        onClick={() => handleItemClick('Pages')}
      >
        Pages
      </li>
      <li
        className={`text-white text-lg font-bold ${selectedItem === 'News' ? 'text-green-600' : 'hover:text-green-300'}`}
        onClick={() => handleItemClick('News')}
      >
        News
      </li>
      <li
        className={`text-white text-lg font-bold ${selectedItem === 'Contact' ? 'text-green-600' : 'hover:text-green-300'}`}
        onClick={() => handleItemClick('Contact')}
      >
        Contact
      </li>
    </ul>
    <button className="hidden lg:block bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-7 rounded">
      Get Started
    </button>
  </nav>
  
  );
};

export default Navbar;
