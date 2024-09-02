import React, { useEffect, useState } from "react";
import { academyId, adminApiUrl } from "../../api/config";
import Loader from "../../components/Loader";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Courses() {
  const [isLoading, setLoading] = useState(false);
  const [courseData, setCourseData] = useState([]);
  const getCourses = async () => {
    setLoading(true);

    const sendData = {
      academyId: academyId,
    };

    try {
      const response = await axios.post(`${adminApiUrl}/courses`, sendData);
      setCourseData(response.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const deleteCourse = async (id) => {
    setLoading(true);

    try {
      const response = await axios.delete(`${adminApiUrl}/delete-course/${id}`);
      console.log(response.data);
      getCourses();
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="admin-full-details admin-details">
          <div className="admin-recentOrders">
            <div className="admin-cardHeader">
              <h4>LIBICT Course</h4>
              <Link to="/admin/create-course" className="admin-btn">
                Add New
              </Link>
            </div>

            <table>
              <thead>
                <tr>
                  <td>Sr.</td>
                  <td>Course Name</td>
                  <td>Category</td>
                  <td>Price</td>
                  <td>Action</td>
                </tr>
              </thead>

              <tbody>
                {courseData.map((data, index) => (
                  <tr key={data._id}>
                    <td>{index + 1}.</td>
                    <td>{data.title}</td>
                    <td>{data.category.name}</td>
                    <td>${data.price}</td>
                    <td>
                      <a href="#" style={{ textDecoration: "none" }}>
                        <span className="admin-status admin-inProgress">
                          Edit
                        </span>
                      </a>
                      &nbsp;&nbsp;
                      <div
                        style={{ display: "inline-block", cursor: "pointer" }}
                        onClick={() => deleteCourse(data._id)}
                      >
                        <span className="admin-status admin-return">
                          Delete
                        </span>
                      </div>
                      &nbsp;&nbsp;
                      {/* <a href="#" style={{ textDecoration: "none" }}>
                        <span className="admin-status admin-pending">
                          Details
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
