import React, { useEffect, useState } from "react";
import { adminApiUrl } from "../../api/config";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Institutes() {
  const [isLoading, setLoading] = useState(false);
  const [instituteData, setInstituteData] = useState([]);
  const getInstitutes = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${adminApiUrl}/institutes`);
      setInstituteData(response.data);
      //   console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getInstitutes();
  }, []);
  return (
    <div className="admin-full-details admin-details">
      <div className="admin-recentOrders">
        <div className="admin-cardHeader">
          <h4>LIBICT Bussiness Partner</h4>
          <Link to="/admin/create-institute" className="admin-btn">
            Add Institute
          </Link>
        </div>

        <table>
          <thead>
            <tr>
              <td>Sr.</td>
              <td>Institute Name</td>
              <td>Email</td>
              <td>Action</td>
            </tr>
          </thead>

          <tbody>
            {instituteData.map((data, index) => (
              <tr>
                <td>{index + 1}.</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>
                  <a href="#" style={{ textDecoration: "none" }}>
                    <span className="admin-status admin-inProgress">Edit</span>
                  </a>
                  &nbsp; &nbsp;
                  <a href="#" style={{ textDecoration: "none" }}>
                    <span className="admin-status admin-delivered">Block</span>
                  </a>
                  {/* <a href="#" style={{ textDecoration: "none" }}>
                    <span className="admin-status admin-inProgress">
                      Unblock
                    </span>
                  </a> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
