import React from "react";
import {
  useAddAccountMutation,
  useDeleteAccountMutation,
  useGetAccountQuery,
  useUpdateAccountMutation,
} from "../api/adminSlice";

const Admin = () => {
  const { data, error, isLoading } = useGetAccountQuery();
  const [addAccount] = useAddAccountMutation();
  const [deleteAccount] = useDeleteAccountMutation();
  const [updateAccount] = useUpdateAccountMutation();
  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>ADMIN</b>
        </h4>
        {data &&
          data.map((account) => (
            <p>
              {account.id} : {account.amount}
              <button onClick={() => deleteAccount(account.id)}>Del</button>
              <button
                onClick={() => updateAccount({ id: account.id, amount: 888 })}
              >
                patch
              </button>
            </p>
          ))}

        <button onClick={() => addAccount(1200, data.length + 1)}>
          add Account
        </button>
      </div>
    </div>
  );
};

export default Admin;
