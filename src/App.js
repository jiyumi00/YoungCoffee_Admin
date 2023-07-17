import {BrowserRouter,Route, Routes,} from "react-router-dom";

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from "./pages/login_page";
import UserInfoPage from "./pages/user_info_page";
import TaxInfoPage from "./pages/tax_info_page";

function App() {
  return (
   <BrowserRouter basename="/admin">
    <Routes>
      <Route path="/" element={<LoginPage/>} />
      <Route path="/UserInfo" element={<UserInfoPage/>}/>
      <Route path="/TaxInfo" element={<TaxInfoPage/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
