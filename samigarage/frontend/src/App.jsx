//import Routes and Route from react-router-dom
import { Routes, Route } from "react-router-dom";
//import the components
import Home from "./markup/pages/Home";
import Login from "./markup/pages/Login";
import AddEmployee from "./markup/pages/Admin/AddEmployee";
import Header from "./markup/components/Header/Header";
import "./App.css";
import Footer from "./markup/components/Footer/Footer";
import Services from "./markup/pages/Services";
import About from "./markup/pages/about";
import Unautorized from "./markup/pages/Unautorized";
//import the private auth route component
import PrivateAuthRoute from "./markup/components/Auth/PrivateAuthRoute";
import Orders from "./markup/pages/Admin/Orders";
import AddCustomers from "./markup/pages/admin/AddCustomers";
import Employees from "./markup/pages/admin/Employees";
//import AdminDashboard from "./markup/pages/Admin/AdminDashboard";
import Dashboard from "./markup/pages/admin/Dashboard";
import Contact from "./markup/pages/Contact"
import Customers from "./markup/pages/admin/Customers";
import EditEmployee from "./markup/pages/admin/EditEmployee";
import EditCustomer from "./markup/pages/admin/EditCustomer";

function App() {
  return (
    <>
      {/* header section */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Unautorized" element={<Unautorized />} />
        <Route
          path="/admin/orders"
          element={
            <PrivateAuthRoute roles={[1, 2, 3]}>
              <Orders />
            </PrivateAuthRoute>
          }
        />

        <Route
          path="/admin/customer"
          element={
            <PrivateAuthRoute roles={[2, 3]}>
              <AddCustomers />
            </PrivateAuthRoute>
          }
        />

        <Route path="/admin/employees" element={<Employees />} />

        <Route
          path="/admin/add-Employee"
          element={
            <PrivateAuthRoute roles={[3]}>
              <AddEmployee />
            </PrivateAuthRoute>
          }
        />
        <Route path="admin/admin-dashboard" element={<Dashboard />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin/customers" element={<Customers />} />
        <Route
          path="/employees/edit/:employee_id"
          element={<EditEmployee />} // Corrected syntax here
        />
        <Route
          path="/customer/edit/:customer_id"
          element={<EditCustomer />} // Corrected syntax here
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
