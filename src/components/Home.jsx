import { useState } from "react";
import useData from "../hooks/useData";
import SortingBar from "./SortingBar";
import { Link } from "react-router-dom";

export default function Home() {
  const [sort, setSort] = useState("name");
  const { customers, transactions, isLoading } = useData();

  if (isLoading) return <div>Loading</div>;

  const fullCustomersInfo = transactions?.map((trans) => {
    trans.name = customers?.find((cust) => cust.id === trans.customer_id)?.name;
    return trans;
  });
  const sortingCustomer = fullCustomersInfo?.sort(
    sort === "name"
      ? function (a, b) {
          if (a?.name < b?.name) {
            return -1;
          }
          if (a?.name > b?.name) {
            return 1;
          }
          return 0;
        }
      : function (a, b) {
          return a.amount - b.amount;
        }
  );

  return (
    <div className="container ">
      <SortingBar sort={sort} setSort={setSort} />
      <table className=" mx-auto" >
        <thead >
          <tr>
            <th>Customer Id</th>
            <th>Name</th>
            <th>Amount</th>
            <th> Transaction Date</th>
            <th> Transaction Number</th>
          </tr>
        </thead>
        <tbody>
          {sortingCustomer?.map((cust, idx) => {
            return (
              <tr key={idx}>
                <th>{cust.customer_id}</th>
                <th>
                  <Link to={`/customer/${cust.customer_id}`} className="text-decoration-none text-dark-emphasis">
                    {cust?.name}
                  </Link>
                </th>
                <th >${cust.amount}</th>
                <th>{cust.date}</th>
                <th>#{cust.id}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
