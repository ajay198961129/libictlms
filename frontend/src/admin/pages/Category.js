import React, { useEffect, useState } from "react";
import { academyId, adminApiUrl } from "../../api/config";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader";

export default function Category() {
  const [isLoading, setLoading] = useState(false);
  const [categoriesData, setCategoriesData] = useState([]);
  const getCategory = async () => {
    setLoading(true);

    const sendData = {
      academyId: academyId,
    };

    try {
      const response = await axios.post(`${adminApiUrl}/categories`, sendData);
      setCategoriesData(response.data);
      //   console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const deleteCategory = async (id) => {
    setLoading(true);

    try {
      const response = await axios.delete(
        `${adminApiUrl}/delete-category/${id}`
      );
      console.log(response.data);
      getCategory();
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getCategory();
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="admin-full-details admin-details">
          <div className="admin-recentOrders">
            <div className="admin-cardHeader">
              <h4>LIBICT Courses Category</h4>
              <span>
                <Link to="/admin/create-category" className="btn admin-btn">
                  Add Category
                </Link>
              </span>
            </div>
            <table>
              <thead>
                <tr>
                  <td>Sr.</td>
                  <td>Category Name</td>
                  <td>Action</td>
                </tr>
              </thead>

              <tbody>
                {categoriesData.map((data, index) => (
                  <tr key={data._id}>
                    <td>{index + 1}.</td>
                    <td>{data.name}</td>
                    <td>
                      <a href="#" style={{ textDecoration: "none" }}>
                        <span className="admin-status admin-inProgress">
                          Edit
                        </span>
                      </a>
                      &nbsp; &nbsp;
                      <div
                        onClick={() => deleteCategory(data._id)}
                        style={{ display: "inline-block", cursor: "pointer" }}
                      >
                        <span className="admin-status admin-return">
                          Delete
                        </span>
                      </div>
                      &nbsp;
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
