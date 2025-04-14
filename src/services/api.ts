import axios, { AxiosError } from "axios";
import { User, Project } from "../types";

const BASE_API_URL = "https://67fcda071f8b41c81687cad3.mockapi.io";

// Re-useable handler function
export const handleAxiosError = (error: unknown): never => {
  const axiosError = error as AxiosError;

  if (axiosError.response) {
    throw new Error(`${axiosError.response.statusText}`);
  } else if (axiosError.request) {
    throw new Error("No response received from server.");
  } else {
    throw new Error(`${axiosError.message}`);
  }
};

// Get all users
export const fetchUsers = async (): Promise<User[]> => {
  try {
      const response = await axios.get<User[]>(`${BASE_API_URL}/api/v1/users`);
    return response.data;
  } catch (error) {
    return handleAxiosError(error);
  }
};

//Get all projects
export const fetchProjects = async (): Promise<Project[]> => {
  try {
      const response = await axios.get<User[]>(
        `${BASE_API_URL}/api/v1/projects`
      );
    return response.data;
  } catch (error) {
    return handleAxiosError(error);
  }
};
