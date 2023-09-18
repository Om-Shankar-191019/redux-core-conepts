import {
  useAddAccountMutation,
  useDeleteAccountMutation,
  useGetAccountsQuery,
  useUpdateAccountMutation,
} from "../api/adminSlice";

function Admin() {
  const { data, error, isLoading, isSuccess } = useGetAccountsQuery();
  const [addAccount, response] = useAddAccountMutation();
  const [deleteAccount] = useDeleteAccountMutation();
  const [updateAccount] = useUpdateAccountMutation();
  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>admin Component</b>
        </h4>
        <h3>Total Point : $</h3>
        {isLoading && <p>Loading...</p>}
        {isSuccess &&
          data &&
          data.map((account) => (
            <p>
              {account.id} : {account.amount}{" "}
              <button onClick={() => deleteAccount(account.id)}>
                Del Acc -
              </button>
              <button
                onClick={() => updateAccount({ id: account.id, amount: 777 })}
              >
                update Acc *
              </button>
            </p>
          ))}

        <button onClick={() => addAccount(123, data.length + 1)}>
          add Account +
        </button>
      </div>
    </div>
  );
}

export default Admin;
