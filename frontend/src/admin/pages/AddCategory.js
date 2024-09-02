import React, { useState } from "react";
import { academyId, adminApiUrl } from "../../api/config";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";

export default function AddCategory() {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const sendData = {
      academyId: academyId,
      name: name,
    };

    try {
      const response = await axios.post(
        `${adminApiUrl}/add-category`,
        sendData
      );

      console.log("Category added:", response.data);
      setLoading(false);
      navigate("/admin/category");
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
              <h2>Add Category</h2>
              <Link to="/admin/category" className="admin-btn btn">
                Category List
              </Link>
            </div>
            <div className="admin-formcard">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <label for="exampleInputEmail1" className="form-label">
                      Category Name
                    </label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      className="form-control"
                      placeholder="Enter Category Name"
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
