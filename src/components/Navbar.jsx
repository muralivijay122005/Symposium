//"use client"
import React from 'react'
import { VscHome, VscArchive, VscAccount, VscSettingsGear } from "react-icons/vsc";
import Dock from './Dock.jsx'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const items = [
    { icon: <VscHome size={18} />, label: 'home', onClick: () => navigate("/") },
    // { icon: <VscArchive size={18} />, label: 'About us', onClick: () => navigate("/techeve") },
    { icon: <VscAccount size={18} />, label: 'Tech event', onClick: () => navigate('/techeve') },
    { icon: <VscSettingsGear size={18} />, label: 'Non tech', onClick: () => navigate('ntecheve') },
    { icon: <VscSettingsGear size={18} />, label: 'Workshop', onClick: () => navigate('workship') },
  ];
  return (
    <div><Dock 
    
    items={items}
    panelHeight={68}
    baseItemSize={50}
    magnification={70}
    className='z-10'
  /></div>
  )
}

export default Navbar