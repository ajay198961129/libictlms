import React from "react";

export default function AddChapter() {
  return (
    <div classAdmin="admin-full-details admin-details">
      <div classAdmin="admin-recentOrders">
        <div classAdmin="admin-cardHeader">
          <h2>Add Chapter</h2>
          <a href="chapter" classAdmin="admin-btn">
            Chapter List
          </a>
        </div>
        <div classAdmin="admin-formcard">
          <form action="/chapter" method="post">
            <div classAdmin="admin-row">
              <div classAdmin="admin-col-md-6">
                <label for="exampleInputEmail1" classAdmin="admin-form-label">
                  Chapter Name
                </label>
                <input
                  name="chapter[title]"
                  type="text"
                  classAdmin="admin-form-control"
                  aria-describedby="emailHelp"
                  placeholder="Enter Chapter Name"
                />
              </div>
            </div>
            <button type="submit" classAdmin="admin-cus-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
