import React from "react";

function Dashboard() {
  return (
    <>
      <div className="admin-cardBox">
        <div className="admin-cus-card">
          <a href="student">
            <div>
              <div className="admin-numbers">1,504</div>
              <div className="admin-cardName">Total Student</div>
            </div>

            <div className="admin-iconBx">
              <ion-icon name="person-outline"></ion-icon>
            </div>
          </a>
        </div>

        <div className="admin-cus-card">
          <a href="course">
            <div>
              <div className="admin-numbers">80</div>
              <div className="admin-cardName">Course</div>
            </div>

            <div className="admin-iconBx">
              <ion-icon name="cart-outline"></ion-icon>
            </div>
          </a>
        </div>

        <div className="admin-cus-card">
          <a href="/institute">
            <div>
              <div className="admin-numbers">284</div>
              <div className="admin-cardName">Institute</div>
            </div>

            <div className="admin-iconBx">
              <ion-icon name="business-outline"></ion-icon>
            </div>
          </a>
        </div>

        <div className="admin-cus-card">
          <a href="#">
            <div>
              <div className="admin-numbers">₹7,842</div>
              <div className="admin-cardName">Sales</div>
            </div>

            <div className="admin-iconBx">
              <ion-icon name="cash-outline"></ion-icon>
            </div>
          </a>
        </div>
      </div>

      {/* <!-- ================ Order Details List ================= --> */}
      <div className="admin-details">
        <div className="admin-recentOrders">
          <div className="admin-cardHeader">
            <h4>Recent Orders</h4>
            <a href="#" className="admin-btn">
              View All
            </a>
          </div>

          <table>
            <thead>
              <tr>
                <td>Name</td>
                <td>Price</td>
                <td>Payment</td>
                <td>Status</td>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Soniya Sharma</td>
                <td>₹1200</td>
                <td>Paid</td>
                <td>
                  <span className="admin-status admin-delivered">
                    Completed
                  </span>
                </td>
              </tr>

              <tr>
                <td>Rohit Kumar</td>
                <td>₹1110</td>
                <td>Due</td>
                <td>
                  <span className="admin-status admin-pending">Pending</span>
                </td>
              </tr>

              <tr>
                <td>Kalam</td>
                <td>₹1200</td>
                <td>Paid</td>
                <td>
                  <span className="admin-status admin-return">Refund</span>
                </td>
              </tr>

              <tr>
                <td>Sanju Dhiman</td>
                <td>₹620</td>
                <td>Due</td>
                <td>
                  <span className="admin-status admin-inProgress">
                    In Progress
                  </span>
                </td>
              </tr>

              <tr>
                <td>Arjun Roa</td>
                <td>₹1200</td>
                <td>Paid</td>
                <td>
                  <span className="admin-status admin-delivered">
                    Completed
                  </span>
                </td>
              </tr>

              <tr>
                <td>Sagar Choudhary</td>
                <td>₹110</td>
                <td>Due</td>
                <td>
                  <span className="admin-status admin-pending">Pending</span>
                </td>
              </tr>

              <tr>
                <td>Ankit Dhiman</td>
                <td>₹1200</td>
                <td>Paid</td>
                <td>
                  <span className="admin-status return">Refund</span>
                </td>
              </tr>

              <tr>
                <td>Nonu Kumar</td>
                <td>₹620</td>
                <td>Due</td>
                <td>
                  <span className="admin-status admin-inProgress">
                    In Progress
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* <!-- ================= New Customers ================ --> */}
        <div className="admin-recentCustomers">
          <div className="admin-cardHeader">
            <h4>Recent Student</h4>
          </div>

          <table>
            <tr>
              <td width="60px">
                <div className="admin-imgBx">
                  <img src="imgs/customer02.jpg" alt="" />
                </div>
              </td>
              <td>
                <h4>
                  David <br />
                  <span>Italy</span>
                </h4>
              </td>
            </tr>

            <tr>
              <td width="60px">
                <div className="admin-imgBx">
                  <img src="imgs/customer01.jpg" alt="" />
                </div>
              </td>
              <td>
                <h4>
                  Amit Kumar
                  <br />
                  <span>India</span>
                </h4>
              </td>
            </tr>

            <tr>
              <td width="60px">
                <div className="admin-imgBx">
                  <img src="imgs/customer02.jpg" alt="" />
                </div>
              </td>
              <td>
                <h4>
                  Echo <br />
                  <span>Italy</span>
                </h4>
              </td>
            </tr>

            <tr>
              <td width="60px">
                <div className="admin-imgBx">
                  <img src="imgs/customer01.jpg" alt="" />
                </div>
              </td>
              <td>
                <h4>
                  Rahul <br />
                  <span>India</span>
                </h4>
              </td>
            </tr>

            <tr>
              <td width="60px">
                <div className="admin-imgBx">
                  <img src="imgs/customer02.jpg" alt="" />
                </div>
              </td>
              <td>
                <h4>
                  Davis <br />
                  <span>Italy</span>
                </h4>
              </td>
            </tr>

            <tr>
              <td width="60px">
                <div className="admin-imgBx">
                  <img src="imgs/customer01.jpg" alt="" />
                </div>
              </td>
              <td>
                <h4>
                  Sanju kumar <br />
                  <span>India</span>
                </h4>
              </td>
            </tr>

            <tr>
              <td width="60px">
                <div className="admin-imgBx">
                  <img src="imgs/customer01.jpg" alt="" />
                </div>
              </td>
              <td>
                <h4>
                  Bruce <br />
                  <span>Italy</span>
                </h4>
              </td>
            </tr>

            <tr>
              <td width="60px">
                <div className="admin-imgBx">
                  <img src="imgs/customer02.jpg" alt="" />
                </div>
              </td>
              <td>
                <h4>
                  Nandu Roa <br />
                  <span>India</span>
                </h4>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
