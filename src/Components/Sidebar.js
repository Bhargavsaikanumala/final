import React, { useState } from 'react';
import Logo from "../Assets/logo.png";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (menuName) => {
    if (activeMenu === menuName) {
      setActiveMenu(null); 
    } else {
      setActiveMenu(menuName); 
    }
  };

  const renderProductSubMenu = (menuName) => {
    if (activeMenu === menuName) {
      return (
        <div className="ml-4">
          <ul>
            <li>
              <a href={`/${menuName}/viewProducts`} className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-700 text-sm">
                View Products
              </a>
            </li>
            <li>
              <a href={`/${menuName}/addproduct`} className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-700 text-sm">
                Add products
              </a>
            </li>
            <li>
              <a href={`/${menuName}/editProduct`} className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-700 text-sm">
                Edit Product Details
              </a>
            </li>
            <li>
              <a href={`/${menuName}/deleteProduct`} className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-700 text-sm">
                Delete Product 
              </a>
            </li>
            <li>
              <a href={`/${menuName}/viewsuppliers`} className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-700 text-sm">
                ViewSuppliers 
              </a>
            </li>
            <li>
              <a href={`/${menuName}/addsupplier`} className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-700 text-sm">
                AddSupplier
              </a>
            </li>
            <li>
              <a href={`/${menuName}/editsupplier`} className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-700 text-sm">
                EditSupplier
              </a>
            </li>
            <li>
              <a href={`/${menuName}/deletesupplier`} className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-700 text-sm">
                DeleteSupplier
              </a>
            </li>
            <li>
              <a href={`/${menuName}/vieworders`} className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-700 text-sm">
                ViewOrders
              </a>
            </li>
            <li>
              <a href={`/${menuName}/createorder`} className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-700 text-sm">
                CreateOrder
              </a>
            </li>
            <li>
              <a href={`/${menuName}/editorder`} className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-700 text-sm">
                EditOrder
              </a>
            </li>
            <li>
              <a href={`/${menuName}/deleteorder`} className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-700 text-sm">
                DeleteOrder
              </a>
            </li>
            <li>
              <a href={`/${menuName}/checkinventory`} className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-700 text-sm">
                CheckInventory
              </a>
            </li>
            <li>
              <a href={`/${menuName}/addinventory`} className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-700 text-sm">
                AddInventory
              </a>
            </li>
            <li>
              <a href={`/${menuName}/updateinventory`} className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-700 text-sm">
                UpdateInventory
              </a>
            </li>
            
            <li>
              <a href={`/${menuName}/deleteinventory`} className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-700 text-sm">
                DeleteInventory
              </a>
            </li>
            <li>
              <a href={`/${menuName}/option4`} className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-700 text-sm">
                Option 4
              </a>
            </li>
          </ul>
        </div>




      );
    }
    return null;
  };

  return (
    <nav className="bg-gray-800 flex">
      <div className="w-64 bg-gray-800 min-h-screen"> {/* Sidebar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="flex-shrink-0 text-white">
                <img src={Logo} alt="Logo" className="h-8" />
              </a>
            </div>
          </div>
          <div className="mt-4">
            <div className="ml-4 flex flex-col space-y-1"> {/* Make menu items vertical */}
              <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Home
              </a>
              <a href="/aboutus" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                About
              </a>
              <a href="/services" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Services
              </a>
              <a href="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </a>
            </div>
          </div>
          <div className="mt-auto">
            <div className="ml-4 flex flex-col space-y-1"> {/* Make submenu items vertical */}
              <button
                onClick={() => handleMenuClick('products')}
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium w-full text-left"
              >
                Products
              </button>
              {renderProductSubMenu('products')}
            </div>
          </div>
        </div>
      </div>
      <div className="flex-grow bg-gray-100"> {/* Content */}
        {/* Your content goes here */}
      </div>
    </nav>
  );
};

export default Navbar;
