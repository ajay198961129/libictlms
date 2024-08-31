import React, { useEffect, useState } from "react";
import { academyId, adminApiUrl } from "../../api/config";
import axios from "axios";
import Loader from "../../components/Loader";
import { Link } from "react-router-dom";

export default function Content() {
  const [isLoading, setLoading] = useState(false);
  const [contentData, setContentData] = useState([]);
  const getContent = async () => {
    setLoading(true);

    const sendData = {
      academyId: academyId,
    };

    try {
      const response = await axios.post(`${adminApiUrl}/contents`, sendData);
      setContentData(response.data);
      //   console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getContent();
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="admin-full-details admin-details">
          <div className="admin-recentOrders">
            <div className="admin-cardHeader">
              <h4>LIBICT Course Content</h4>
              <Link to="/admin/add-content" className="admin-btn">
                Add Content
              </Link>
            </div>

            <table>
              <thead>
                <tr>
                  <td>Sr.</td>
                  <td>Content Name</td>
                  <td>Course Name</td>
                  <td>Chapter</td>
                  <td>Action</td>
                </tr>
              </thead>

              <tbody>
                {contentData.map((data, index) => (
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
