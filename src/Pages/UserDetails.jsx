// import { useParams } from "react-router-dom"
// import {     useGetUserByIdQuery
//  } from "../Features/users/userApi";

// const UserDetails =() => {
//     const {id} = useParams();
//     const {data,isLoading,error} = useGetUserByIdQuery(id);

//     if(isLoading) return <p>Loading...</p>
//     if(error) return <p>Error loading user</p>
//     if(!data) return <p>No user found</p>

//     return(
//         <>
//         <h2>{data.name}</h2>
//         <p>Email: {data.email}</p>
//         </>
//     )
// }

// export default UserDetails;


import { useParams } from "react-router-dom";
import { useGetUserByIdQuery } from "../Features/users/userApi";

const UserDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetUserByIdQuery(id);

  if (isLoading) {
    return <p className="text-center mt-10">Loading user details...</p>;
  }

  if (error || !data) {
    return (
      <p className="text-center mt-10 text-red-500">
        ❌ User not found
      </p>
    );
  }

  return (
    <div className="px-6 py-10 min-h-[calc(100vh-80px)]">
      {/* Page title */}
      <h1 className="text-2xl font-bold mb-6 mt-6 text-center">
        User Details
      </h1>

      {/* Card */}
      <div className="max-w-md mx-auto bg-white shadow-md rounded-xl p-6">
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="font-semibold text-gray-600">Name:</span>
            <span className="text-gray-800">{data.name}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold text-gray-600">Email:</span>
            <span className="text-gray-800">{data.email}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold text-gray-600">Phone:</span>
            <span className="text-gray-800">{data.phone}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;