import CropField from "../models/CropFieldDto";
import axiosInstance from "./axiosConfig";

export const getCropFields = async () => {
  const userId = localStorage.getItem("user_id");
  const response = await axiosInstance.get(`/cropfield/user/${userId}`);
  return response.data.map((cropField) => CropField.fromJson(cropField));
};

export const getCropFieldById = async (cropFieldId) => {
  const response = await axiosInstance.get(`/cropfield/${cropFieldId}`);
  return CropField.fromJson(response.data);
}

export const updateCropField = async (cropField) => {
  const userId = localStorage.getItem("user_id");
  const response = await axiosInstance.post(`/cropfield/user/${userId}`, cropField);
  return CropField.fromJson(response.data);
}