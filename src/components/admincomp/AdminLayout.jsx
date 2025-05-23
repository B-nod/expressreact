import React,{useState} from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { isAuthenticated } from '../../auth';
import Adminheader from './AdminHeader'
import Adminfooter from './AdminFooter'
import Main from './main/Main'
import Sidebar from './Sidebar/Sidebar'

const AdminLayout = ({ isDarkmode, setIsDarkmode }) => {
    const [showSideBar, setShowSideBar] = useState(false);

      // Check if the user is authenticated and has the admin role
  if (!isAuthenticated() || isAuthenticated().user.role !== 1) {
    return <Navigate to='/signin' />;
  }
    
  return (
    <>
    <Adminheader
     showSideBar={showSideBar}
     setShowSideBar={setShowSideBar}
     isDarkmode={isDarkmode}
     setIsDarkmode={setIsDarkmode}
    />
     <div
        className={`flex pt-[80px] h-screen overflow-hidden ${
          isDarkmode ? "bg-[#071739]" : "bg-[#F8F8F8]"
        }`}
      >
        <Sidebar showSideBar={showSideBar} isDarkmode={isDarkmode} />

        <div
      className={`w-full h-screen ${
        isDarkmode ? "bg-[#071739]" : "bg-[#F8F8F8]"
      } transition-all duration-200 ease-in-out sm:p-[20px] p-[10px] overflow-scroll scrollbar `}
    >
      <Outlet isDarkmode={isDarkmode}/>

     <Adminfooter isDarkmode={isDarkmode}/>
    </div>
      </div>
  
  
    </>
  )
}

export default AdminLayout