import axiosInstance from "./axios";

export const signupUser = async (userData) => {
  console.log(userData);

  let jsonUserData = JSON.stringify(userData);

  try {
    const response = await axiosInstance.post("/signup", jsonUserData);
    return response.data;
  } catch (error) {
    throw error.response
      ? error.response.data
      : new Error("Something went wrong");
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await axiosInstance.post("/login", userData);
    return response.data;
  } catch (error) {
    throw error.response
      ? error.response.data
      : new Error("Something went wrong");
  }
};
