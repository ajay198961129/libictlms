import "../admin/assests/css/style.css";
import "../admin/assests/css/bootstrap.min.css";
import Sidebar from "../admin/components/AdminSideBar";

export default function AdminLayout({ children }) {
  return (
    <div class="admin-cus-container">
      <Sidebar />
      <div class="admin-main">
        {/* <TopBar /> */}
        <main>{children}</main>
      </div>
    </div>
  );
}
