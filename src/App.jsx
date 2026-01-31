// import { BrowserRouter, Route, Routes } from "react-router-dom"
// import Login from "./Pages/Login"
// import ProtectedRoute from "./Components/protectedRoute"
// import Dashboard from "./Pages/Dashboard"
// import UserList from "./Pages/UserList"
// import UserDetails from "./Pages/UserDetails"

// const App =() =>{
//   return(
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element ={<Login/>}/>

//         <Route
//           path="/dashboard"
//           element={
//             <ProtectedRoute>
//               <Dashboard/>
//             </ProtectedRoute>
//           }/>

//           <Route
//             path="/users"
//             element={
//               <ProtectedRoute>
//                 <UserList/>
//               </ProtectedRoute>
//             }/>

//             <Route
//               path="/users/:id"
//               element={
//                 <ProtectedRoute>
//                   <UserDetails/>
//                 </ProtectedRoute>
//               }/>
//       </Routes>
//     </BrowserRouter>
//   )
// }
// export default App;


import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import ProtectedRoute from "./Components/protectedRoute";

import Dashboard from "./Pages/Dashboard";
import UserList from "./Pages/UserList";
import UserDetails from "./Pages/UserDetails";
import Layout from "./Layout/Layout";
import AddUser from "./Pages/AddUser";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Route */}
        <Route path="/" element={<Login />} />

        {/* Protected Layout */}
        <Route
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/users/add" element={<AddUser/>} />
          <Route path="/users/:id" element={<UserDetails />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;