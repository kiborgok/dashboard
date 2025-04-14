import { useState, useEffect } from "react";
import useDashboardData from "../hooks/useDashboard";
import Table from "./Table";

const Dashboard = () => {
  const { users, projects, loading, error } = useDashboardData();
  const [userSearch, setUserSearch] = useState("");
  const [projectSearch, setProjectSearch] = useState("");
  const [userPage, setUserPage] = useState(1);
  const [projectPage, setProjectPage] = useState(1);

  useEffect(() => setUserPage(1), [userSearch]);
  useEffect(() => setProjectPage(1), [projectSearch]);

  if (loading)
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-primary" />
      </div>
    );
  if (error)
    return (
      <div className="alert alert-danger text-center mt-4">Error: {error}</div>
    );

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-start">Dashboard</h2>

      <Table
        data={users}
        columns={[
          { header: "Id", accessor: "id" },
          { header: "Name", accessor: "name" },
          { header: "Date Created", accessor: "createdAt" },
        ]}
        search={userSearch}
        onSearchChange={setUserSearch}
        currentPage={userPage}
        setPage={setUserPage}
        title="Users"
      />

      <Table
        data={projects}
        columns={[
          { header: "Id", accessor: "id" },
          { header: "Name", accessor: "name" },
          { header: "Date Created", accessor: "createdAt" },
        ]}
        search={projectSearch}
        onSearchChange={setProjectSearch}
        currentPage={projectPage}
        setPage={setProjectPage}
        title="Projects"
      />
    </div>
  );
};

export default Dashboard;
