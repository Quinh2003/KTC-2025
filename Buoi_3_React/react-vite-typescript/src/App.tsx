// LESSION - 03   // 02/07/2025

/*import React from "react";
import Button from "./Components/Button/Button";
import SearchInput from "./Components/SearchInputs/SearchInput";
import Card_1 from "./Components/Card/Card_1";
import Card_2 from "./Components/Card/Card_2";
import Card_3 from "./Components/Card/Card_3";
import Card_4 from "./Components/Card/Card_4";
import Contact from "./Components/Contact/Contact";


import {
  Apple,
  Facebook,
  GanttChart,
  ArrowRight,
  Search,
  Globe,
  SlidersHorizontal,
  Phone,
  Smile,
} from "lucide-react";

import "./App.css";

const App = () => {
  return (
    <div className="container">
      <div className="leftPanel">
        <div className="buttonGroup">
          <Button label="Get started" type="primary" rightIcon={<ArrowRight size={18} />} />
          <Button label="Continue with Apple" type="apple" icon={<Apple size={18} />} />
          <Button label="Continue with Google" type="outline" icon={<GanttChart size={18} />} />
          <Button label="Continue with Facebook" type="outline" icon={<Facebook size={18} />} />
        </div>
      </div>

      <div className="middlePanel">
        <SearchInput placeholder="" leftIcon={Search} />
        <SearchInput placeholder="Search" leftIcon={Search} />
        <SearchInput placeholder="Textfield" bold  leftIcon={Search} />
        <SearchInput placeholder="Search in the web" leftIcon={Search} rightIcon={Globe} />
        <SearchInput placeholder="Search crypto" leftIcon={Search} rightIcon={SlidersHorizontal} />
        <SearchInput placeholder="Phone number" rightIcon={Phone} rightBgColor="#ccf7d4" />
        <SearchInput placeholder="Search in the web" leftIcon={Search} rightIcon={Smile} rightBgColor="#ffe26f" />
      </div>

      <div className="rightPanel">
        <Card_1 />
        <Card_2 />
        <Card_3 />
        <Card_4 />
      </div>

      <div className="contactPanel">
        <Contact />
      </div>
    </div>

  );
};

export default App;*/

// LESSION - 04   // 03/07/2025

// Afternoon Session
// import React from "react";
// import ElectronicsList from "./Lession04/Electronics/ElectronicsList";
// import ArticleList from "./Lession04/Article/ArticleList";
// import Color from "./Lession04/Color/Color";
// import Rating from "./Lession04/Rating/Rating";
// import DealOfTheDay from "./Lession04/DealOfTheDay/DealOfTheDay";

// const App: React.FC = () => {
//   return (
//     <div style={{ padding: 20 }}>
//       <ArticleList />
//       <ElectronicsList />
//       <DealOfTheDay />
//       <Color />
//       <Rating />
//     </div>
//   );
// };
// export default App;

// HOMEWORD
// import React from 'react';
// import LikeButton from './Lession04/Homework/LikeButton/LikeButton';
// import Slider from './Lession04/Homework/Slide/Slider';
// import './App.css';
// import ButtonTabs from './Lession04/Homework/ButtonTabs/ButtonTabs';
// import Accordion from './Lession04/Homework/Accordtions/Accordtion';

// const App: React.FC = () => {
//   return (
//     <div className="outerBorder">
//       <h1 style={{ textAlign: 'center' }}>Homework Session 2</h1>
//       <h2>Like Button</h2>
//       <LikeButton />
//       <Slider />
//       <ButtonTabs/>
//       <Accordion />
//     </div>
//   );
// };

// export default App;

// LESSION -05 // 04/07/2025
// Afternoon Session

// import React from 'react';
// import Exercise01 from './Lession05/Afternoon/Exercise01';
// import './App.css';
// import Exercise02 from './Lession05/Afternoon/Exercise02';
// import Exercise03 from './Lession05/Afternoon/Exercise03';
// import Exercise04 from './Lession05/Afternoon/Exercise04';
// import Exercise05 from './Lession05/Afternoon/Exercise05';
// import Exercise07 from './Lession05/Afternoon/Exercise07';
// import Exercise08 from './Lession05/Afternoon/Exercise08';
// import Exercise09 from './Lession05/Afternoon/Exercise09';
// import Exercise10 from './Lession05/Afternoon/Exercise10';

// function App() {
//   return (
//     <React.Fragment>
//      <Exercise01 />
//      <Exercise02 />
//      <Exercise03 />
//      <Exercise04 />
//      <Exercise05 />
//      <Exercise07 />
//      <Exercise08 />
//      <Exercise09 />
//      <Exercise10 />
//     </React.Fragment>
//   );
// }

// export default App;

// HOMEWORD

// import React, { useState } from 'react';
// import './App.css';
// import Calculator from "./Lession05/Homeworks/Calculator/Calculator";
// import RegistrationForm from "./Lession05/Homeworks/Registration/RegistrationForm";
// import { CartProvider } from './Lession05/Homeworks/Shopping/components/CartContext';
// import { CartIcon } from './Lession05/Homeworks/Shopping/components/CartIcon';
// import { CartDropdown } from './Lession05/Homeworks/Shopping/components/CartDropdown';
// import { ProductGrid } from './Lession05/Homeworks/Shopping/components/ProductGrid';

// const App: React.FC = () => {
//   const [isCartOpen, setIsCartOpen] = useState(false);

//   const toggleCart = () => {
//     setIsCartOpen((prev) => !prev);
//   };

//   return (
//     <div className="outerBorder">
//       {/* Calculator */}
//       <section className="section">
//         <h1>Calculator</h1>
//         <Calculator />
//       </section>

//       {/* Registration */}
//       <section className="section">
//         <h1>Registration Form</h1>
//         <RegistrationForm />
//       </section>

//       {/* Shopping*/}
//       <CartProvider>
//         <div className="app">
//           <header className="header">
//             <div className="headerContent">
//               <h1>🛒 Big Market</h1>
//               <div style={{ position: 'relative' }}>
//                 <CartIcon onClick={toggleCart} />
//                 {isCartOpen && <CartDropdown isOpen={isCartOpen} />}
//               </div>
//             </div>
//           </header>

//           <main className="main">
//             <div className="container">
//               <h3>Thực phẩm khô</h3>
//               <ProductGrid />
//             </div>
//           </main>
//         </div>
//       </CartProvider>
//     </div>
//   );
// };

// export default App;

// LESSION - 06 // 07/07/2025

//import './App.css';
// import React from 'react';
// import Products from './Lession06/CRUD/Products';

// const App: React.FC = () => {
//   return (
//     <div className="container mx-auto bg-gray-100 p-4">
//       <Products />
//     </div>
//   );
// };
// export default App;

// import WeatherApp from "./Lession06/HomeWords/WeatherApp";

// export default function App() {
//   return (
//     <div>
//       {/*<Customer />*/}
//       <WeatherApp />
//     </div>
//   )
// }

// LESSION - 07 // 08/07/2025

// AFTERNOON
// import { BrowserRouter as Router, Routes, Route, BrowserRouter,} from "react-router";
// import Headers from "./Lession07/Afternoon/Components/Headers";
// import HomePage from "./Lession07/Afternoon/Pages/HomePage";
// import BlogPage from "./Lession07/Afternoon/Pages/BlogPage";
// import CategoryPage from "./Lession07/Afternoon/Pages/CategoryPage";
// import ProductPage from "./Lession07/Afternoon/Pages/ProductPage";
// import CustomerPage from "./Lession07/Afternoon/Pages/CustomerPage";

// function App() {
//   return (
//     <BrowserRouter>
//       <Headers />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/blog" element={<BlogPage />} />
//         <Route path="/category" element={<CategoryPage />} />
//         <Route path="/product" element={<ProductPage />} />
//         <Route path="/login" element={<BlogPage />} />
//         <Route path="/customer" element={<CustomerPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// HOMEWORD

// import { Routes, Route, BrowserRouter } from "react-router";
// import Sidebar from "./Lession07/HomeWord/Components/Sidebar";
// import PatientsPage from "./Lession07/HomeWord/Pages/PatientsPage";
// import OverviewPage from "./Lession07/HomeWord/Pages/OverviewPage";
// import MapPage from "./Lession07/HomeWord/Pages/MapPage";
// import DepartmentsPage from "./Lession07/HomeWord/Pages/DepartmentsPage";
// import HistoryPage from "./Lession07/HomeWord/Pages/HistoryPage";
// import DoctorsPage from "./Lession07/HomeWord/Pages/DoctorsPage";
// import SettingsPage from "./Lession07/HomeWord/Pages/SettingsPage";
// import { FaBell, FaSearch } from "react-icons/fa";

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="flex min-h-screen">
//         <Sidebar />
//         <div className="flex-1 flex flex-col">
//           <div className="flex items-center justify-between px-6 py-4 border-b bg-white">
//             <div className="flex items-center w-full max-w-md">
//               <div className="relative w-full">
//                 <span className="absolute left-3 inset-y-0 flex items-center text-gray-400">
//                   <FaSearch className="text-sm" />
//                 </span>

//                 <input
//                   type="text"
//                   placeholder="Search..."
//                   className="w-full pl-10 pr-4 py-2 border rounded-lg bg-gray-100 text-sm outline-none focus:ring-2 focus:ring-blue-400"
//                 />
//               </div>
//             </div>

//             <div className="flex items-center gap-4 ml-4">
//               <FaBell className="text-gray-500 text-lg cursor-pointer" />
//               <div className="w-8 h-8 rounded-full bg-gray-300"></div>
//               <span className="text-sm font-medium text-gray-700">
//                 Emma Kwan
//               </span>
//             </div>
//           </div>

//           <div className="p-6 flex-1 bg-gray-50">
//             <Routes>
//               <Route path="/" element={<PatientsPage />} />
//               <Route path="/overview" element={<OverviewPage />} />
//               <Route path="/map" element={<MapPage />} />
//               <Route path="/departments" element={<DepartmentsPage />} />
//               <Route path="/doctors" element={<DoctorsPage />} />
//               <Route path="/history" element={<HistoryPage />} />
//               <Route path="/settings" element={<SettingsPage />} />
//             </Routes>
//           </div>
//         </div>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;

// LESSION 8 // 09/07/2025

//AFTERNOON

// import AuthPage from "./Lession08/Afternoon/Form-In-Up/Pages/AuthPage";
// import LoginForm from "./Lession08/Afternoon/Form_Login/LoginForm";
// import RegisterForm from "./Lession08/Afternoon/Form_Register/RegisterForm";
// import RegistrationForm from "./Lession08/Homework/RegistrationForm";

// function App() {
//   return (
//     <div
//       style={{
//         fontFamily: "Arial, sans-serif",
//         backgroundColor: "#f9f9f9",
//         minHeight: "100vh",
//         padding: "40px",
//       }}
//     >
//       {/* // Afternoom */}
//       <AuthPage />
//       <RegisterForm />
//       <LoginForm />

//       {/* // Homework */}
//       <RegistrationForm />
//     </div>
//   );
// }
// export default App;
