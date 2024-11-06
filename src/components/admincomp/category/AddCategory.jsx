import React, { useState } from "react";
import { isAuthenticated } from "../../../auth";
import { addCategory } from "../../../admin/apiIndex";

const AddCategory = () => {
  const [category_name, setCategory] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  // destructure token from the localStorage
  const { token } = isAuthenticated() || {}; // fallback to empty object

  if (!token) {
    setError("Authentication failed. Please log in.");
    return null; // Early return if no token
  }

  const handleChange = (e) => {
    setError('');
    setCategory(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    // make request to add category
    addCategory(token, { category_name })
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setError('');
          setSuccess(true);
          setCategory('');
        }
      })
      .catch((err) => {
        setError("Something went wrong.");
      });
  };

  // to show error message
  const showError = () => {
    return (
      <div
        className="bg-red-100 text-red-800 p-4 rounded-lg"
        style={{ display: error ? "" : "none" }}
        role="alert"
      >
        <strong className="font-bold text-sm mr-4">Error!</strong>
        <span className="block text-sm sm:inline max-sm:mt-2">{error}</span>
      </div>
    );
  };

  // to show success message
  const showSuccess = () => {
    return (
      <div
        className="bg-green-100 text-green-800 p-4 rounded-lg"
        role="alert"
        style={{ display: success ? "" : "none" }}
      >
        <strong className="font-bold text-sm mr-4">Success!</strong>
        <span className="block text-sm sm:inline max-sm:mt-2">New Category Added </span>
      </div>
    );
  };

  return (
    <>
      <div className="flex flex-wrap justify-center">
        <div className="w-full xl:w-12/12">
          <div className="bg-white shadow-md rounded-lg mb-4 p-6">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-semibold">Add Category</h3>
              <ul className="flex space-x-4">
                <li>
                  <a href="/product-upload" className="text-blue-600">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/product-upload" className="text-blue-600">
                    Category
                  </a>
                </li>
                <li className="text-gray-600">Add Category</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full xl:w-1/2 p-4">
          <form>
            <div className="bg-white shadow-md rounded-lg mb-4">
              <div className="flex justify-between items-center p-4 border-b">
                <h4 className="text-xl font-medium">Category Form</h4>
                <button className="bg-blue-600 text-white p-2 rounded">
                  <i className="material-icons"></i>
                </button>
                {showError()}
                {showSuccess()}
              </div>
              <div className="p-4">
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2" htmlFor="category">
                    Category Name
                  </label>
                  <input
                    type="text"
                    id="category"
                    placeholder="Type here"
                    className="w-full px-4 py-2 border rounded-md"
                    onChange={handleChange}
                    value={category_name}
                  />
                  <button
                    className="mt-2 bg-blue-600 text-white px-4 py-2 rounded"
                    onClick={handleSubmit}
                  >
                    Add Category
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddCategory;
