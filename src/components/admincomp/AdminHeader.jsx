import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MdMenu,
  MdMenuOpen,
  MdShoppingCart,
  MdEmail,
  MdNotifications,
  MdArrowDropDown,
} from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { HiXMark } from "react-icons/hi2";
import { NavbarButton } from "./NavButton/StyleComponents";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import userImage from '../../assests/photo/ceo.jpeg'
import logo from '../../assests/logoblue.png'
import darklogo from '../../assests/logowhite.png'
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { isAuthenticated,signout } from "../../auth";


const Navbar = ({ showSideBar, setShowSideBar, isDarkmode, setIsDarkmode }) => {
  const navigate = useNavigate()
  const [input, setInput] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const{user} = isAuthenticated()

  return (
    <div className="w-full fixed top-0 z-50">
      <div
        className={`w-full h-[80px] flex justify-between items-center lg:px-[20px] px-[10px] ${
          isDarkmode ? "bg-[#112143]" : "bg-white"
        }
        transition-all duration-200 ease-in-out `}
      >
        <div className="w-1/4 h-full flex justify-between items-center">
          <div className="flex items-center gap-1" >
            <img
               src={isDarkmode ? darklogo : logo} // Change the logo based on dark mode
              alt="logo"
              className="w-[200px] h-[200px] mt-[25px]"
            />
            <h1
              className={`font-inter font-extrabold text-2xl uppercase sm:block hidden
            ${
              isDarkmode ? "text-white" : "text-[#403E57]"
            }  transition-all duration-200 ease-in-out`}
            >
              Eagle Trend
            </h1>
          </div>
        </div>

        <div className="w-1/4 xl:flex hidden h-full pl-[30px] items-center justify-start gap-5">
          <button
            className={`w-[40px] h-[36px] rounded-full flex justify-center items-center group 
        relative opacity-90 hover:opacity-100 transition-all duration-200 ease-in-out 
        ${isDarkmode ? "bg-[#132956]" : "bg-[#E6EEFE]"}`}
            onClick={() => setShowSideBar((prev) => !prev)}
          >
            {showSideBar ? (
              <MdMenuOpen
                size={20}
                className={`${
                  isDarkmode ? "text-white" : "text-[#403E57]"
                } group-hover:text-[#0858F7] transition-all 
                    duration-200 ease-in-out `}
              />
            ) : (
              <MdMenu
                size={20}
                className={`${
                  isDarkmode ? "text-white" : "text-[#403E57]"
                } group-hover:text-[#0858F7] transition-all 
                    duration-200 ease-in-out `}
              />
            )}
          </button>
          <div
            className="w-[250px] h-[40px] flex rounded-md overflow-hidden relative opacity-90 hover:opacity-100
        transition duration-200 ease-in-out"
          >
            <div
              className={`w-[40px] h-full flex justify-center items-center ${
                isDarkmode ? "bg-[#132956]" : "bg-[#E6EEFE]"
              }`}
            >
              <FiSearch
                size={14}
                className={`${isDarkmode ? "text-white" : "text-[#403E57]"}`}
              />
            </div>
            <input
              value={input}
              type="text"
              className={`w-[210px] h-full border-none outline-none text-xs font-inter
              ${isDarkmode ? "text-white" : "text-[#403E57]"} ${
                isDarkmode ? "bg-[#132955]" : "bg-[#E6EEFE]"
              }`}
              placeholder="Search here ...."
              onChange={(e) => setInput(e.target.value)}
            />
            {input.length > 0 && (
              <button
                className="absolute top-0 right-0 w-[40px] h-full flex justify-center items-center border-none
              outline-none"
                onClick={() => setInput("")}
              >
                <HiXMark
                  size={16}
                  className={`${
                    isDarkmode ? "text-white" : "text-[#403E57]"
                  } hover:text-[#0858F7] font-bold`}
                />
              </button>
            )}
          </div>
        </div>

        <div
          className="xl:w-2/4 w-3/4 flex justify-end sm:gap-5 gap-3 items-center sm:px-[20px] 
      px-0"
        >
          <div className="xl:hidden flex h-full items-center sm:gap-5 gap-3 ">
            <div className="lg:hidden block">
              <NavbarButton
                onClick={() => setShowSearch(!showSearch)}
                isDarkmode={isDarkmode}
              >
                <FiSearch
                  className={`group-hover:text-[#0858F7] transition-all duration-200 
                ease-in-out  ${isDarkmode ? "text-white" : "text-[#403E57]"}`}
                />
              </NavbarButton>
            </div>
            <button
              className={`sm:w-[40px] w-[30px] sm:h-[40px] h-[30px] rounded-full flex justify-center 
              items-center group relative opacity-90 hover:opacity-100 transition-all duration-200 ease-in-out 
        text-black group-hover:text-[#0858F7] ${
          isDarkmode ? "bg-[#132956]" : "bg-[#E6EEFE]"
        }`}
              onClick={() => setShowSideBar((prev) => !prev)}
            >
              {showSideBar ? (
                <MdMenuOpen
                  size={20}
                  className={`${
                    isDarkmode ? "text-white" : "text-[#403E57]"
                  } group-hover:text-[#0858F7] transition-all 
                      duration-200 ease-in-out `}
                />
              ) : (
                <MdMenu
                  size={20}
                  className={`${
                    isDarkmode ? "text-white" : "text-[#403E57]"
                  } group-hover:text-[#0858F7] transition-all 
                      duration-200 ease-in-out `}
                />
              )}
            </button>
            <div
              className="w-[250px] h-[40px]  rounded-md overflow-hidden relative opacity-90 hover:opacity-100
        transition duration-200 ease-in-out lg:flex hidden"
            >
              <div
                className={`w-[40px] h-full flex justify-center items-center  ${
                  isDarkmode ? "bg-[#132956]" : "bg-[#E6EEFE]"
                }`}
              >
                <FiSearch
                  size={16}
                  className={`group-hover:text-[#0858F7] transition-all duration-200 
                ease-in-out  ${isDarkmode ? "text-white" : "text-[#403E57]"}`}
                />
              </div>
              <input
                value={input}
                type="text"
                className={`w-[210px] h-full border-none outline-none text-sm font-inter  ${
                  isDarkmode ? "bg-[#132956]" : "bg-[#E6EEFE]"
                }`}
                placeholder="Search here ...."
                onChange={(e) => setInput(e.target.value)}
              />
              {input.length > 0 && (
                <button
                  className="absolute top-0 right-0 w-[40px] h-full flex justify-center items-center border-none
              outline-none"
                  onClick={() => setInput("")}
                >
                  <HiXMark
                    size={16}
                    className="text-black hover:text-[#0858F7] font-bold"
                  />
                </button>
              )}
            </div>
          </div>
          <div className="flex items-center sm:gap-5 gap-3 ">
            <NavbarButton
              onClick={() => setIsDarkmode(!isDarkmode)}
              isDarkmode={isDarkmode}
            >
              {isDarkmode ? (
                <BsSunFill
                  className={` group-hover:text-[#0858F7] transition-all duration-200 
                ease-in-out ${isDarkmode ? "text-white" : "text-[#403E57]"}  `}
                />
              ) : (
                <BsMoonFill
                  className={` group-hover:text-[#0858F7] transition-all duration-200 
                ease-in-out ${isDarkmode ? "text-white" : "text-[#403E57]"}`}
                />
              )}
            </NavbarButton>
            <NavbarButton isDarkmode={isDarkmode}>
              <TbWorld
                className={` group-hover:text-[#0858F7] transition-all duration-200 
                ease-in-out ${isDarkmode ? "text-white" : "text-[#403E57]"}`}
              />
            </NavbarButton>
            <NavbarButton isDarkmode={isDarkmode} item={"02"} hidden>
              <MdShoppingCart
                className={` group-hover:text-[#0858F7] transition-all duration-200 
                ease-in-out ${isDarkmode ? "text-white" : "text-[#403E57]"}`}
              />
            </NavbarButton>
            <NavbarButton isDarkmode={isDarkmode} item={"03"} hidden>
              <MdEmail
                className={` group-hover:text-[#0858F7] transition-all duration-200 
                ease-in-out ${isDarkmode ? "text-white" : "text-[#403E57]"}`}
              />
            </NavbarButton>
            <NavbarButton isDarkmode={isDarkmode} item={"04"} hidden>
              <MdNotifications
                className={` group-hover:text-[#0858F7] transition-all duration-200 
                ease-in-out ${isDarkmode ? "text-white" : "text-[#403E57]"} `}
              />
            </NavbarButton>
          </div>
          <div className="flex gap-2 items-center">
            <div
              className="sm:w-[40px] w-[30px] sm:h-[40px] h-[30px] rounded-full border-[1px] border-[#0858F7] 
          p-[2px]"
          >
              <img
                src={userImage}
                alt="profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="flex-col gap-[2px] justify-center items-start sm:flex hidden "  onClick={handleClick}  aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}>
              <a
                href="#"
                className={`font-inter font-semibold text-sm ${
                  isDarkmode ? "text-white" : " text-black"
                }`}
                >
               {user.name }
                <MdArrowDropDown size={20} className="inline" />
              </a>
              <h1
                className={`font-inter text-xs font-medium ${
                  isDarkmode ? "text-gray-200" : "text-gray-600"
                }`}
              >
                {user.email}
              </h1>
            </div>

            <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={()=>signout(()=>{
          navigate('/login')
        })}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu> 
          </div>
        </div>
      </div>

      <div
        className={`fixed top-[80px] h-[60px] w-full flex bg-[#E6EEFE] lg:hidden 
      ${showSearch ? "block" : "hidden"}`}
      >
        <input
          type="text"
          className="bg-[#E6EEFE] w-10/12 h-full border-none outline-none text-sm font-inter px-[20px]"
          placeholder="Ouick Finding..."
        />
        <button className="w-2/12 hover:text-[#0858F7] h-full flex justify-center items-center">
          <FiSearch size={20} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
