import adminInstance from "./adminAxios";

export const loginAdmin = async (userData) => {
  try {
    const response = await adminInstance.post("/login", userData);
    return response.data;
  } catch (error) {
    throw error.response
      ? error.response.data
      : new Error("Something went wrong");
  }
};
