import React, { useEffect, useState } from "react";
import { academyId, adminApiUrl } from "../../api/config";
import axios from "axios";
import Loader from "../../components/Loader";

export default function Assesments() {
  const [isLoading, setLoading] = useState(false);
  const [assesmentData, setAssesmentData] = useState([]);
  const getAssesments = async () => {
    setLoading(true);

    const sendData = {
      academyId: academyId,
    };

    try {
      const response = await axios.post(`${adminApiUrl}/contents`, sendData);
      setAssesmentData(response.data);
      //   console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getAssesments();
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="admin-full-details admin-details">
          <div className="admin-recentOrders">
            <div className="admin-cardHeader">
              <h4>LIBICT Course Assesments</h4>
              <a href="add-assesment" className="admin-btn">
                Add Assesment
              </a>
            </div>

            <table>
              <thead>
                <tr>
                  <td>Sr.</td>
                  <td>Assesment Name</td>
                  <td>Course Name</td>
                  <td>Chapter</td>
                  <td>Action</td>
                </tr>
              </thead>

              <tbody>
                {assesmentData.map((data, index) => (
                  <tr key={data._id}>
                    <td>{index + 1}.</td>
                    <td>{data.title}</td>
                    <td>{data.course.title}</td>
                    <td>{data.chapter.title}</td>
                    <td>
                      <a href="#" style={{ textDecoration: "none" }}>
                        <span className="admin-status admin-inProgress">
                          Edit
                        </span>
                      </a>
                      &nbsp; &nbsp;
                      <a href="#" style={{ textDecoration: "none" }}>
                        <span className="admin-status admin-return">
                          Delete
                        </span>
                      </a>
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
