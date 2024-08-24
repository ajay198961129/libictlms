import React from "react";

export default function Profile() {
  return <p>UserID:{localStorage.getItem("userId")}</p>;
}
