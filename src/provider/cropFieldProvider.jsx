import CropField from "../models/CropFieldDto";

export const getCropFields = async () => {
  const userId = localStorage.getItem("user_id");
  const response = await axiosInstance.get(`/cropfield/user/${userId}`);//.update 
  return response.data.map((cropField) => CropField.fromJson(cropField));
};

//update cropfield - .put