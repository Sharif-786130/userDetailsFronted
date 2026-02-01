
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddUserMutation } from "../Features/users/userApi";

const AddUser = () => {
  const navigate = useNavigate();
  const [addUser, { isLoading }] = useAddUserMutation();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addUser(form).unwrap();
      navigate("/users");
    } catch (err) {
      alert("Failed to add user");
    }
  };

  return (
    <div className="px-6 py-10 min-h-[calc(100vh-80px)]">
      <h2 className="text-2xl font-bold mb-6 text-center mt-6">
        Add New User
      </h2>

      <div className="max-w-md mx-auto bg-white shadow-md rounded-xl p-6">
        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
          >
            {isLoading ? "Saving..." : "Save User"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default AddUser;