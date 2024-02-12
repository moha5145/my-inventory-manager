import "./index.css";
import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import SuppliersPage from "./pages/SuppliersPage";
import ItemsPage from "./pages/ItemsPage";
import ItemInPage from "./pages/ItemInPage";
import ItemOutPage from "./pages/ItemOutPage";
import CategoriesPage from "./pages/CategoriesPage";
import DashboardPage from "./pages/ DashboardPage";
import ReportsPage from "./pages/ ReportsPage";
import SettingsPage from "./pages/SettingsPage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import UsersPage from "./pages/UsersPage";

function App() {
  return (
  <div className="App">
      <BrowserRouter >
        <Routes>
          <Route element={<Layout />} >
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/suppliers" element={<SuppliersPage />} />
            <Route path="/items" element={<ItemsPage />} />
            <Route path="/item-in" element={<ItemInPage />} />
            <Route path="/item-out" element={<ItemOutPage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/reports" element={<ReportsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
