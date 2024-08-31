import React from "react";

export default function AddCategory() {
  return (
    <>
      <div className="admin-full-details admin-details">
        <div className="admin-recentOrders">
          <div className="admin-cardHeader">
            <h2>Add Category</h2>
            <a href="category" className="admin-btn">
              Category List
            </a>
          </div>
          <div className="admin-formcard">
            <form>
              <div className="admin-row">
                <div className="admin-col-md-6">
                  <label for="exampleInputEmail1" className="admin-form-label">
                    Category Name
                  </label>
                  <input
                    name="category[name]"
                    type="text"
                    className="admin-form-control"
                    aria-describedby="emailHelp"
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
    </>
  );
}
