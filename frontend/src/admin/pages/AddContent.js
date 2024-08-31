import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { academyId, adminApiUrl } from "../../api/config";
import Loader from "../../components/Loader";

export default function AddContent() {
  const [title, setTitle] = useState("");
  const [course, setCourse] = useState("");
  const [chapter, setChapter] = useState("");
  const [contentFile, setContentFile] = useState(null);
  const navigate = useNavigate();

  const [isLoading, setLoading] = useState(false);
  const [courseData, setCourseData] = useState([]);
  const [chapterData, setChapterData] = useState([]);

  const getSelectData = async () => {
    setLoading(true);

    const sendData = {
      academyId: academyId,
    };

    try {
      const courseResponse = await axios.post(
        `${adminApiUrl}/courses`,
        sendData
      );

      const chapterResponse = await axios.post(
        `${adminApiUrl}/chapters`,
        sendData
      );
      setChapterData(chapterResponse.data);
      setCourseData(courseResponse.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getSelectData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("course", course);
    formData.append("chapter", chapter);
    formData.append("contentFile", contentFile);
    formData.append("academyId", academyId);

    try {
      const response = await axios.post(`${adminApiUrl}/add-content`, formData);
      console.log("Course added:", response.data);
      setLoading(false);
      navigate("/admin/content");
    } catch (error) {
      setLoading(false);
      console.error("Error adding course:", error);
    }
  };
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="admin-full-details admin-details">
          <div className="admin-recentOrders">
            <div className="admin-cardHeader">
              <h2>Add Course Content</h2>
              <span>
                <Link to="/admin/content" className="admin-btn">
                  Content List
                </Link>
                <Link to="/admin/create-content" className="admin-btn">
                  Add Chapter
                </Link>
              </span>
            </div>
            <div className="admin-formcard">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Content Name
                    </label>
                    <input
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      type="text"
                      className="form-control"
                      placeholder="Enter Content Name"
                    />
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Course Name
                    </label>
                    <select
                      value={course}
                      onChange={(e) => setCourse(e.target.value)}
                      className="admin-form-select"
                    >
                      <option value="">Select Course</option>
                      {courseData.map((data) => (
                        <option key={data._id} value={data._id}>
                          {data.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Chapter Name
                    </label>
                    <select
                      value={chapter}
                      onChange={(e) => setChapter(e.target.value)}
                      className="admin-form-select"
                    >
                      <option value="">Select Chapter</option>

                      {chapterData.map((data) => (
                        <option key={data._id} value={data._id}>
                          {data.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="admin-col-md-6">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Attach Video File
                    </label>
                    <input
                      type="file"
                      onChange={(e) => setContentFile(e.target.files[0])}
                      required
                      className="form-control"
                      placeholder="File Format MP4"
                    />
                  </div>
                </div>
                <button type="submit" className="admin-cus-button">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
