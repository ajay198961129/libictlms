import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { academyId, adminApiUrl } from "../../api/config";
import axios from "axios";
import Loader from "../../components/Loader";

export default function AddInstitute() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const sendData = {
      name: name,
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        `${adminApiUrl}/add-institute`,
        sendData
      );

      console.log("Institute added:", response.data);
      setLoading(false);
      navigate("/admin/institutes");
    } catch (error) {
      setLoading(false);
      console.error("Error adding institute:", error);
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
              <h2>Add Institute</h2>
            </div>
            <div className="admin-formcard">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Institute Name
                    </label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      aria-describedby="emailHelp"
                      placeholder="Enter Institute Name"
                    />
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email Address
                    </label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      aria-describedby="emailHelp"
                      placeholder="Enter Institute Email"
                    />
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Password
                    </label>
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      aria-describedby="emailHelp"
                      placeholder="Enter Password"
                    />
                  </div>
                </div>
                <button className="admin-cus-button">Submit</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
