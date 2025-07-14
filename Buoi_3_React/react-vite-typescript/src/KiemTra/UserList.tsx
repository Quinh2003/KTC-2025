import { useContext } from "react";
import { Link } from "react-router";
import { UserContext } from "./UserProvider";

const UserList = ({ showLinks = false }) => {
  const context = useContext(UserContext);
  if (!context) {
    return <div>Context not available.</div>;
  }
  const { users } = context;

  return (
    <div className="max-w-md mx-auto p-6 border rounded shadow">
      <h2 className="text-xl font-bold mb-4">User List</h2>
      {users.length === 0 ? (
        <p>No users available.</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id} className="border p-2 mb-2 rounded">
              <p>
                <strong>Name:</strong> {user.name}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Age:</strong> {user.age ? user.age : "N/A"}
              </p>
              {showLinks && (
                <p>
                  <Link
                    to={`/users/${user.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    View Details
                  </Link>
                </p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
