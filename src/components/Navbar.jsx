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
        <div className={`fixed inset-0 z-50 flex justify-end transition-opacity delay-300 ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <div className="bg-gray-900 bg-opacity-75 w-64 h-full overflow-y-auto transform transition-transform ease-out duration-500 delay-300">
            <ul className="py-4">
              {['Home', 'About', 'Services', 'Pages', 'News', 'Contact'].map((item, index) => (
                <li key={index} className={`text-white text-lg font-bold py-2 px-4 cursor-pointer ${selectedItem === item ? 'bg-green-600' : 'hover:bg-green-700'}`} onClick={() => handleItemClick(item)}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <ul className="lg:flex hidden space-x-8">
        {['Home', 'About', 'Services', 'Pages', 'News', 'Contact'].map((item, index) => (
          <li key={index} className={`text-white text-lg font-bold ${selectedItem === item ? 'text-green-600' : 'hover:text-green-300'}`} onClick={() => handleItemClick(item)}>
            {item}
          </li>
        ))}
      </ul>
      <button className="hidden lg:block bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-7 rounded">
        Get Started
      </button>
    </nav>
  );
};

export default Navbar;
