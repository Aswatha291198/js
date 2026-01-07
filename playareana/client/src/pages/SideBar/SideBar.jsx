import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { CiBookmark } from "react-icons/ci";

import { MdOutlineStadium } from "react-icons/md";
import { FaCity, FaRegEdit } from "react-icons/fa";
import { IoGameControllerOutline } from "react-icons/io5";
import { RiFeedbackLine } from "react-icons/ri";

const SideBar = () => {
  const { user } = useSelector(store => store.users);
  const navigate = useNavigate();
  const location=useLocation()

  const menuConfig = {
    profile: [
      { key: 'turf', label: 'Turfs', icon: MdOutlineStadium, route: 'turfs' },
      { key: 'city', label: 'City', icon: FaCity, route: 'city' },
      { key: 'game', label: 'Game', icon: IoGameControllerOutline, route: 'game' },
      { key: 'edit', label: 'Edit Profile', icon: FaRegEdit, route: 'edit-profile' }
    ],
    player: [
      { key: 'bookings', label: 'Bookings', icon: CiBookmark, route: 'bookings' },
      { key: 'feedback', label: 'FeedBack', icon: RiFeedbackLine, route: 'feedback' },
      { key: 'edit', label: 'Edit Profile', icon: FaRegEdit, route: 'edit-profile' }
    ]
  };

  const menuItems = menuConfig[user?.role] || [];

  const getDefaultActive = (role) => {
    if (role === 'profile') return 'turf';
    if (role === 'player') return 'bookings';
    return '';
  };

  const [active, setActive] = useState(getDefaultActive(user?.role));

  // Auto navigate to default page on load
  useEffect(() => {
    if (!user?.role) return;

    const defaultRoute = user.role === 'profile' ? '/profile/turfs' : '/profile/bookings';
    setActive(getDefaultActive(user.role));
    navigate(defaultRoute);
  }, [location.pathname]);

  return (
    <div className="profile-left">
      <div className="profile-profile">
        <div className="profile-detail">
          <div className="profile-img">
            <i
              className="fa-solid fa-user"
              style={{ fontSize: '25px', color: 'rgb(0, 181,98)' }}
            ></i>
          </div>
          <span className="font-poppins">{user?.name || "Guest"}</span>
          <span className="font-poppins text-xs opacity-70">{user?.email}</span>
        </div>
      </div>

      <div className="profile-info">
        {menuItems.map(item => (
          <div
            key={item.key}
            className={`profile-manage cursor-pointer ${active === item.key ? 'active' : ''}`}
            onClick={() => {
              setActive(item.key);
              console.log(location.pathname);
              
              navigate(`/profile/${item.route}`); // absolute path
            }}
          >
            <item.icon className="profile-icon" />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
