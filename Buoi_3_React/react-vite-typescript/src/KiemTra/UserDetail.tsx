import { useContext } from "react";
import { useParams, Link } from "react-router";
import { UserContext } from "./UserProvider";

const UserDetail = () => {
  const { id } = useParams();
  const userContext = useContext(UserContext);
  const users = userContext?.users || [];

  const user = users.find((u) => u.id === Number(id));

  if (!user) {
    return (
      <div className="max-w-md mx-auto text-center p-6">
        <h2 className="text-xl font-bold mb-4">User Detail</h2>
        <p>User not found.</p>
        <Link to="/users" className="text-blue-600 hover:underline">
          Back to Users
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-6 border rounded shadow">
      <h2 className="text-xl font-bold mb-4">User Detail</h2>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Age:</strong> {user.age ? user.age : "N/A"}
      </p>
      <Link to="/users" className="text-blue-600 hover:underline block mt-4">
        Back to Users
      </Link>
    </div>
  );
};

export default UserDetail;
