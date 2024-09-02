import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { academyId, adminApiUrl } from "../../api/config";
import axios from "axios";
import Loader from "../../components/Loader";

export default function AddChapter() {
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const sendData = {
      academyId: academyId,
      title: title,
    };

    try {
      const response = await axios.post(`${adminApiUrl}/add-chapter`, sendData);

      console.log("Category added:", response.data);
      setLoading(false);
      navigate("/admin/chapter");
    } catch (error) {
      setLoading(false);
      console.error("Error adding category:", error);
    }
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="admin-full-details admin-details">
          <div className="admin-recentOrders">
            <div className="admin-cardHeader">
              <h2>Add Chapter</h2>
              <Link to="/admin/chapter" className="admin-btn">
                Chapter List
              </Link>
            </div>
            <div className="admin-formcard">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <label for="exampleInputEmail1" className="form-label">
                      Chapter Name
                    </label>
                    <input
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      type="text"
                      className="form-control"
                      aria-describedby="emailHelp"
                      placeholder="Enter Chapter Name"
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
