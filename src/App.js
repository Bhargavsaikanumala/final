
import './App.css';
import Home from './Pages/home';
import Aboutus from './Pages/aboutus';
import ViewProducts from './Pages/viewproducts';
import AddProduct from './Pages/addproduct';
import EditProduct from './Pages/editproduct';
import DeleteProduct from './Pages/deleteproduct';
import ViewSuppliers from './Pages/viewsuppliers';
import AddSupplier from './Pages/addsupplier';
import EditSupplier from './Pages/editsupplier';
import DeleteSupplier from './Pages/deletesupplier';


import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ViewOrders from './Pages/vieworders';
import CreateOrder from './Pages/createorder';
import EditOrder from './Pages/editorder';
import DeleteOrder from './Pages/deleteorder';
import CheckInventory from './Pages/checkinventory';
import AddInventory from './Pages/addinventory';
import UpdateInventory from './Pages/updateinventory';
import DeleteInventory from './Pages/deleteinventory';


function App() {
  return (
    <div >
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/aboutus" element={<Aboutus/>}/>
          <Route path="/product/view-products" element={<ViewProducts />} />
          <Route path="/product/add-product" element={<AddProduct />} />
          <Route path="/product/edit-product" element={<EditProduct />} /> {/* Add route for EditProduct */}
          <Route path="/product/delete-product" element={<DeleteProduct />} />
          <Route path="/suppliers/view-suppliers" element={<ViewSuppliers />} /> 
          <Route path="/suppliers/add-supplier" element={<AddSupplier />} />
          <Route path="/suppliers/edit-supplier" element={<EditSupplier />} />
          <Route path="/suppliers/delete-supplier" element={<DeleteSupplier />} />
          <Route path="/orders/view-orders" element={<ViewOrders />} />
          <Route path="/orders/create-order" element={<CreateOrder />} />
          <Route path="/orders/edit-order" element={<EditOrder />} />
          <Route path="/orders/delete-order" element={<DeleteOrder />} />
          <Route path="/inventory/check-inventory" element={<CheckInventory />} />
          <Route path="/inventory/add-inventory" element={<AddInventory />} />
          <Route path="/inventory/update-inventory" element={<UpdateInventory />} />
          <Route path="/inventory/delete-inventory" element={<DeleteInventory />} />
        </Routes>

     </BrowserRouter>
     
    </div>
  );
}

export default App;
