
import { useNavigate } from "react-router-dom";
import { useGetUsersQuery } from "../Features/users/userApi";

const UserList =()=>{
    const {data = [],isLoading,error} = useGetUsersQuery();
    const navigate = useNavigate();

    if(isLoading) return <p>Loading...</p>;
    if(error) return <p>Access denied or failed to load users</p>

   return (
    <div className="px-6 py-10 min-h-[calc(100vh-80px)] w-500">
      {/* Page Title */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center mt-6 ">
        Users
      </h2>

      {/* Users List */}
      <div className="max-w-md mx-auto bg-white shadow-md rounded-xl divide-y">
        {data.map((user) => (
          <div
            key={user.id}
            onClick={() => navigate(`/users/${user.id}`)}
            className="px-6 py-4 cursor-pointer hover:bg-gray-50 transition"
          >
            <p className="font-medium text-gray-800">{user.name}</p>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserList;