
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../Features/Auth/authslice";

const Layout = () => {
    const dispatch = useDispatch();

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">

            {/* Navbar */}
            <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold text-gray-800">
                    Dashboard
                </h1>

                <button
                    onClick={() => dispatch(logout())}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                >
                    Logout
                </button>
            </nav>

            {/* Centered Body */}
            <main className="flex-1 flex items-center justify-center p-6">
                {/* <div className="w-full max-w-4xl bg-white p-8 rounded-xl shadow-lg">
          <Outlet />
        </div> */}

                <div className="w-full max-w-4xl max-h-[420px] min-h-[300px]
                bg-white p-8 rounded-xl shadow-lg
                flex items-center justify-center">
                    <Outlet />
                </div>
            </main>

        </div>
    );
};

export default Layout;