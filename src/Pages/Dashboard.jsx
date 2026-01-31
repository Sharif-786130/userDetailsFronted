import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-semibold mb-6">
        Welcome to Dashboard
      </h2>

      <Link
        to="/users"
        className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition mx-5"
      >
        View Users
      </Link>

      <Link to='/users/add'
      className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transistion">
      + Add User
      </Link>
    </div>
  );
};

export default Dashboard;