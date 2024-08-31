import React, { useEffect, useState } from "react";
import { academyId, adminApiUrl } from "../../api/config";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "../../components/Loader";

export default function AddCourse() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [instructor, setInstructor] = useState("");
  const [whyCourse, setWhyCourse] = useState("");
  const [certification, setCertification] = useState("");
  const [category, setCategory] = useState("");
  const [courseImage, setCourseImage] = useState(null);
  const navigate = useNavigate();

  const [isLoading, setLoading] = useState(false);
  const [categoryData, setCategoryData] = useState([]);
  const getCategory = async () => {
    setLoading(true);

    const sendData = {
      academyId: academyId,
    };

    try {
      const response = await axios.post(`${adminApiUrl}/categories`, sendData);
      setCategoryData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getCategory();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("instructor", instructor);
    formData.append("whyCourse", whyCourse);
    formData.append("certification", certification);
    formData.append("price", price);
    formData.append("category", category);
    formData.append("courseImage", courseImage);
    formData.append("academyId", academyId);

    try {
      const response = await axios.post(`${adminApiUrl}/add-course`, formData);
      console.log("Course added:", response.data);
      setLoading(false);
      navigate("/admin/courses");
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
              <h2>Add Course</h2>
              <Link to="/admin/category" className="admin-btn">
                Add Category
              </Link>
            </div>
            <div className="admin-formcard">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Course Name
                    </label>
                    <input
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      type="text"
                      className="form-control"
                      aria-describedby="emailHelp"
                      placeholder="Enter Course Name"
                      required
                    />
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Course Category
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="admin-form-select"
                      aria-label="Default select example"
                      required
                    >
                      {categoryData.map((data) => (
                        <option key={data._id} value={data._id}>
                          {data.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Price
                    </label>
                    <input
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      type="number"
                      className="form-control"
                      placeholder="Enter Price"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Instructor
                    </label>
                    <input
                      value={instructor}
                      onChange={(e) => setInstructor(e.target.value)}
                      type="text"
                      className="form-control"
                      placeholder="Enter Instructor Name"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-9">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Description
                    </label>
                    <textarea
                      className="form-control"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Enter Description"
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-9">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Why Course
                    </label>
                    <textarea
                      className="form-control"
                      value={whyCourse}
                      onChange={(e) => setWhyCourse(e.target.value)}
                      placeholder="Enter Description"
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-9">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Certification
                    </label>
                    <textarea
                      className="form-control"
                      value={certification}
                      onChange={(e) => setCertification(e.target.value)}
                      placeholder="Enter Description"
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Course Banner
                    </label>
                    <input
                      onChange={(e) => setCourseImage(e.target.files[0])}
                      type="file"
                      className="form-control"
                      required
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
