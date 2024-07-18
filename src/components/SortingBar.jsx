export default function SortingBar({ sort, setSort }) {
  return (
    <div className="d-flex justify-content-center py-3">
      <div className="btn-group " role="group" aria-label="Basic example">
        <button
          type="button"
          className={`btn bg-success-subtle ${sort === "name" && "active"}`}
          onClick={() => {
            setSort("name");
          }}
        >
          Name
        </button>
        <button
          type="button"
          className={`btn bg-success-subtle ${sort === "amount" && "active"}`}
          onClick={() => {
            setSort("amount");
          }}
        >
          Amount
        </button>
      </div>
    </div>
  );
}
