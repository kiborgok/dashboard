import { useMemo } from "react";
import { TableProps } from "../types";

const Table = <T extends { id: string | number }>({
  data,
  columns,
  search,
  onSearchChange,
  currentPage,
  setPage,
  itemsPerPage = 5,
  title,
}: TableProps<T>) => {
  const filtered = useMemo(() => {
    const loweredSearch = search.toLowerCase();
    return data.filter((item) =>
      columns.some((col) =>
        String(item[col.accessor]).toLowerCase().includes(loweredSearch)
      )
    );
  }, [data, columns, search]);

  const totalPages = Math.ceil(filtered.length / itemsPerPage);


  const paginated = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filtered.slice(start, start + itemsPerPage);
  }, [filtered, currentPage, itemsPerPage]);

  return (
    <div className="mb-5">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h4>{title}</h4>
        <input
          type="text"
          className="form-control w-50"
          placeholder={`Search ${title.toLowerCase()}...`}
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      <div className="table-responsive rounded">
        <table className="table table-striped table-hover table-bordered">
          <thead className="table-dark">
            <tr>
              {columns.map((col) => (
                <th key={String(col.accessor)}>{col.header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginated.length > 0 ? (
              paginated.map((item) => (
                <tr key={item.id}>
                  {columns.map((col) => (
                    <td key={String(col.accessor)}>
                      {col.accessor === "createdAt"
                        ? new Date(String(item[col.accessor]))
                            .toISOString()
                            .slice(0, 10)
                        : String(item[col.accessor])}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} className="text-center">
                  No data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <nav>
          <ul className="pagination justify-content-center mt-3">
            {Array.from({ length: totalPages }, (_, i) => (
              <li
                key={i}
                className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
              >
                <button className="page-link" onClick={() => setPage(i + 1)}>
                  {i + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Table;
