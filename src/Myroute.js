import React,{useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AdminLayout from './components/admincomp/AdminLayout'
import Layout from './components/usercomp/Layout'
import Main from './components/admincomp/main/Main'
import Products from './components/admincomp/product/Products'
import Hompage from './pages/userpages/Hompage'
import Loginpage from './pages/userpages/Loginpage'
import Register from './pages/userpages/Register'

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
            </Route>

            <Route path='/login' element={<Loginpage/>}/>
            <Route path='/register' element={<Register/>}/>
        </Routes>
    </Router>
    </>
  )
}

export default Myroute