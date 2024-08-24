import React { useRef } from "react";

export default function TopBar() {
   const listItems = useRef([]);
  const toggleMenu = () => {
    const navigation = document.querySelector('.admin-navigation');
    const main = document.querySelector('.admin-main');

    navigation.classList.toggle('active');
    main.classList.toggle('active');
  };
  return (
    <div className="admin-topbar">
      <div className="admin-toggle" onClick={toggleMenu}>
        <ion-icon name="menu-outline"></ion-icon>
      </div>

      <div className="admin-search">
        <label>
          <input type="text" placeholder="Search here" />
          <ion-icon name="search-outline"></ion-icon>
        </label>
      </div>

      <div className="admin-user">
        <img src="imgs/customer01.jpg" alt="" />
      </div>
    </div>
  );
}
