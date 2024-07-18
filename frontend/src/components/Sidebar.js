// Sidebar.js
import React, { useRef } from 'react';
import '../App.css'; 
import { useNavigate } from 'react-router-dom';
import sidebarData from './sidebarData';

const Sidebar = () => {
  const navigate = useNavigate();
  const links = useRef(sidebarData);

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="sidebar">
      <h2 >Python</h2>
      <ul className="sidebar-list">
        {links.current.map((link) => (
          <li className="row" key={link.path} onClick={() => handleNavigate(link.path)}>
            {link.icon}
            {link.name}
          </li>
        ))}
      </ul>
    </div>
  );
};


export default Sidebar;
