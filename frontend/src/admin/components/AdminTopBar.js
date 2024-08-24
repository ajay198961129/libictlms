import React from "react";

export default function TopBar() {
  return (
    <div className="admin-topbar">
      <div className="admin-toggle">
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
