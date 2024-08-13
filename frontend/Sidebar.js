import React from 'react';
import { Link } from 'react-router-dom';
import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsMenuButtonWideFill, BsFillGearFill, BsCreditCard } from 'react-icons/bs';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <BsCart3 className='icon_header' /> Toys Store
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <BsGrid1X2Fill className='icon' /> <Link to="/admin">Dashboard</Link>
        </li>
        <li className='sidebar-list-item'>
          <BsFillArchiveFill className='icon' /><Link to="/products">Products</Link>
        </li>
        <li className='sidebar-list-item'>
          <BsFillGrid3X3GapFill className='icon' /><Link to="/categories">Categories</Link>
        </li>
        <li className='sidebar-list-item'>
          <BsPeopleFill className='icon' /> <Link to="/customers">Customers</Link>
        </li>
        <li className='sidebar-list-item'>
          <BsMenuButtonWideFill className='icon' /><Link to="/reports">Reports</Link>
        </li>
        <li className='sidebar-list-item'>
          <BsFillGearFill className='icon' /><Link to="/settings">Settings</Link>
        </li>
        <li className='sidebar-list-item'>
          <BsCreditCard className='icon' /><Link to="/payment">Show Payment</Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
