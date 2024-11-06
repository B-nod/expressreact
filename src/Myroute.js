import React,{useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AdminLayout from './components/admincomp/AdminLayout'
import Layout from './components/usercomp/Layout'
import Main from './components/admincomp/main/Main'
import Products from './components/admincomp/product/Products'
import Hompage from './pages/userpages/Hompage'
import Loginpage from './pages/userpages/Loginpage'
import Register from './pages/userpages/Register'
import Productpage from './pages/userpages/Productpage'
import ProductDetail from './pages/userpages/ProductDetail'
import Cart from './pages/userpages/Cart'
import WomenPage from './pages/userpages/WomenPage'
import KidPage from './pages/userpages/KidPage'
import EmailVerify from './pages/userpages/EmailVerify'
import Profile from './pages/userpages/Profile'

const Myroute = () => {
    const [isDarkmode, setIsDarkmode] = useState(true);
  return (
    <>
    <Router>
        <Routes>
            {/* route for admin */}
            <Route path='/admin' element={<AdminLayout  isDarkmode={isDarkmode} setIsDarkmode={setIsDarkmode} />}>
            <Route index  element={<Main isDarkmode={isDarkmode}/>}/>
            <Route path='productlist' element={<Products isDarkmode={isDarkmode} />}/>
            </Route>
            {/* route for normal user */}
            <Route path='/' element={<Layout/>}>
            <Route index element={<Hompage/>}/>
            <Route path='men' element={<Productpage/>}/>
            <Route path='women' element={<WomenPage/>}/>
            <Route path='kid' element={<KidPage/>}/>
            <Route path='productdetail/:id' element={<ProductDetail/>}/>
            <Route path='cart' element={<Cart/>}/>
            <Route path='login' element={<Loginpage/>}/>
            <Route path='register' element={<Register/>}/>
            <Route path='email/confirmation/:token' element={<EmailVerify/>}/>
            <Route path='profile' element={<Profile/>}/>
            </Route>

          
        </Routes>
    </Router>
    </>
  )
}

export default Myroute