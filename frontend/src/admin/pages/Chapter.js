import React, { useEffect, useState } from "react";
import { academyId, adminApiUrl } from "../../api/config";
import axios from "axios";
import Loader from "../../components/Loader";
import { Link } from "react-router-dom";

export default function Chapter() {
  const [isLoading, setLoading] = useState(false);
  const [chapterData, setChapterData] = useState([]);
  const getChapter = async () => {
    setLoading(true);

    const sendData = {
      academyId: academyId,
    };

    try {
      const response = await axios.post(`${adminApiUrl}/chapters`, sendData);
      setChapterData(response.data);
      //   console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const deleteChapter = async (id) => {
    setLoading(true);

    try {
      const response = await axios.delete(
        `${adminApiUrl}/delete-chapter/${id}`
      );
      console.log(response.data);
      getChapter();
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getChapter();
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="admin-full-details admin-details">
          <div className="admin-recentOrders">
            <div className="admin-cardHeader">
              <h4>LIBICT Courses Chapter</h4>
              <span>
                <Link to="/admin/create-chapter" className="btn admin-btn">
                  Add Chapter
                </Link>
              </span>
            </div>
            <table>
              <thead>
                <tr>
                  <td>Sr.</td>
                  <td>Chapter Name</td>
                  <td>Action</td>
                </tr>
              </thead>

              <tbody>
                {chapterData.map((data, index) => (
                  <tr key={data._id}>
                    <td>{index + 1}.</td>
                    <td>{data.title}</td>
                    <td>
                      <a href="#" style={{ textDecoration: "none" }}>
                        <span className="admin-status admin-inProgress">
                          Edit
                        </span>
                      </a>
                      &nbsp; &nbsp;
                      <div
                        style={{ display: "inline-block", cursor: "pointer" }}
                        onClick={(e) => deleteChapter(data._id)}
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
