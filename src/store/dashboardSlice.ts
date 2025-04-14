import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { fetchUsers, fetchProjects } from "../services/api";
import { User, Project } from "../types";

interface DashboardState {
  users: User[];
  projects: Project[];
  loading: boolean;
  error: string | null;
}

const initialState: DashboardState = {
  users: [],
  projects: [],
  loading: false,
  error: null,
};

export const getDashboardData = createAsyncThunk(
  "dashboard/fetchAll",
  async () => {
    const [users, projects] = await Promise.all([
      fetchUsers(),
      fetchProjects(),
    ]);
    return { users, projects };
  }
);

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDashboardData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        getDashboardData.fulfilled,
        (
          state,
          action: PayloadAction<{ users: User[]; projects: Project[] }>
        ) => {
          state.loading = false;
          state.users = action.payload.users;
          state.projects = action.payload.projects;
        }
      )
      .addCase(getDashboardData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default dashboardSlice.reducer;
