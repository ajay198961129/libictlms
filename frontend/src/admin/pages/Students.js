import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import { academyId, adminApiUrl } from "../../api/config";
import axios from "axios";

export default function Students() {
  const [isLoading, setLoading] = useState(false);
  const [userData, setUserData] = useState([]);
  const getUsers = async () => {
    setLoading(true);

    const sendData = {
      academyId: academyId,
    };

    try {
      const response = await axios.post(`${adminApiUrl}/users`, sendData);
      setUserData(response.data);
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="admin-full-details admin-details">
          <div className="admin-recentOrders">
            <div className="admin-cardHeader">
              <h4>LIBICT Students</h4>
              <a href="add-student" className="admin-btn">
                Add New
              </a>
            </div>

            <table>
              <thead>
                <tr>
                  <td>Sr.</td>
                  <td>Name</td>
                  <td>Email</td>
                  <td>Action</td>
                </tr>
              </thead>

              <tbody>
                {userData.map((data, index) => (
                  <tr key={data._id}>
                    <td>{index + 1}.</td>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>
                      {/* <a href="#" style={{ textDecoration: "none" }}>
                        <span className="admin-status admin-inProgress">
                          Edit
                        </span>
                      </a>
                      &nbsp; &nbsp;
                      <a href="#" style={{ textDecoration: "none" }}>
                        <span className="admin-status admin-return">
                          Delete
                        </span>
                      </a> */}
                      &nbsp; &nbsp;
                      <a href="#" style={{ textDecoration: "none" }}>
                        <span className="admin-status admin-delivered">
                          Block
                        </span>
                      </a>
                      {/* &nbsp;
                      <a href="#" style={{ textDecoration: "none" }}>
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
      )}
    </>
  );
}
