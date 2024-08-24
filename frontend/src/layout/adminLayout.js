import "../admin/assests/css/style.css";
import Sidebar from "../admin/components/AdminSideBar";
import TopBar from "../admin/components/AdminTopBar";

export default function AdminLayout({ children }) {
  return (
    <div class="admin-cus-container">
      <Sidebar />
      <div class="admin-main">
        <TopBar />
        <main>{children}</main>
      </div>
    </div>
  );
}
