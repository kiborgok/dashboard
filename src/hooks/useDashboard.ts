import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDashboardData } from "../store/dashboardSlice";
import { RootState, AppDispatch } from "../store/store";

const useDashboardData = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { users, projects, loading, error } = useSelector(
    (state: RootState) => state.dashboard
  );

  useEffect(() => {
    dispatch(getDashboardData());
  }, [dispatch]);

  return { users, projects, loading, error };
};

export default useDashboardData;