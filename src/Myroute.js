import React,{useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AdminLayout from './components/admincomp/AdminLayout'
import Layout from './components/usercomp/Layout'
import Main from './components/admincomp/main/Main'
import Products from './components/admincomp/product/Products'
import Hompage from './pages/userpages/Hompage'

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
        </Routes>
    </Router>
    </>
  )
}

export default Myroute