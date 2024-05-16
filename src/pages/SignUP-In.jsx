"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";


function SignUpIn() {
  const [signIn, setSignIn] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: value.trim()
        ? ""
        : `${name.charAt(0).toUpperCase() + name.slice(1)} is required`,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formValid = true;
    const newErrors = { ...errors };

    // validate name
    newErrors.name = formData.name.trim() ? "" : "Name is required";

    // validate email
    newErrors.email = formData.email.trim()
      ? /^\S+@\S+\.\S+$/.test(formData.email)
        ? ""
        : "Invalid Format"
      : "Email is required";

    // validate password
    newErrors.password = formData.password.trim()
      ? formData.password.length >= 8
        ? ""
        : "Must be 8 or more characters"
      : "Password is required";

    setErrors(newErrors);

    // If all values are falsy no errors
    if (Object.values(newErrors).every((error) => !error)) {
      let users = localStorage.getItem("users");
      if (!users) {
        users = [];
      } else {
        users = JSON.parse(users); //return it to normal object
      }

      users.push(formData);
      localStorage.setItem("users", JSON.stringify(users));
       localStorage.setItem("isLoggedIn", "true");
      router.push("/Home");
      console.log("Form submitted successfully!");
    } else {
      console.log("Form has errors, please fix them.");
    }
    };
    
  function handleSignIn() {
    let users = localStorage.getItem("users");
    if (!users) {
      setErrors(true);
      setErrorMessage("No users registered");
      return;
    }
    users = JSON.parse(users);
    const user = users.find(
      (u) => u.email === formData.email && u.password === formData.password
    );

    if (!user) {
      setErrors(true);
      setErrorMessage("Invalid email or password!");
      return;
    }
   localStorage.setItem("isLoggedIn", "true");
    router.push("/Home");
    console.log("User logged in successfully!");
  }

  return (
    <div className="w-full sm:w-[30vw] mt-[3rem] sm:ml-[31rem] border-2 border-gray-100 flex items-center justify-center shadow-xl rounded-[1.5rem] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="text-left text-2xl font-bold text-slate-700">
            {signIn ? "Sign in" : "Sign up"}
          </h2>
        </div>
        {errorMessage && (
          <p className=" rounded-xl bg-red-100 font-[550] p-3 text-center text-[1rem] text-red-500">
            {errorMessage}
          </p>
        )}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {/* name field */}
          {!signIn && (
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-slate-700"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="off"
                placeholder="Enter Your Name"
                className="mt-1 p-2 w-full rounded-md border
                 border-gray-300 focus:outline-none focus:ring-1 focus:ring-sky-300"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <p className="text-sm text-red-400">{errors.name}</p>
              )}
            </div>
          )}
          {/* email field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-slate-700"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="text"
              autoComplete="off"
              placeholder="Enter Your Email"
              className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-sky-300"
              value={formData.email}
              onChange={handleChange}
            />
            {!signIn && (
              <div>
                {errors.email && (
                  <p className="text-sm text-red-400">{errors.email}</p>
                )}
              </div>
            )}
          </div>
          {/* pass field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-slate-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="off"
              placeholder="Enter Your Password"
              className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-sky-300"
              value={formData.password}
              onChange={handleChange}
            />
            {!signIn && (
              <div>
                {errors.password && (
                  <p className="text-sm text-red-400">{errors.password}</p>
                )}
              </div>
            )}
          </div>
          <div>
            {!signIn && (
              <button
                type="submit"
                className="w-full px-2 py-3 bg-sky-500 text-white rounded-md shadow-md hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-opacity-50"
              >
                Submit
              </button>
            )}
            {signIn && (
              <button
                onClick={(id) => handleSignIn(id)}
                type="submit"
                className="w-full px-2 py-3 bg-sky-500 text-white rounded-md shadow-md hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-opacity-50"
              >
                Submit
              </button>
            )}
          </div>
          <div className="flex items-center justify-center">
            <div className="border-t border-gray-300 flex-grow"></div>
            <p className="mx-4 text-sm text-gray-500">OR</p>
            <div className="border-t border-gray-300 flex-grow"></div>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">
              {signIn ? "Don’t have an account?" : "Already have an account?"}
              <button
                className="text-sky-500 underline focus:outline-none focus:ring-2 focus:ring-sky-500"
                onClick={(e) => {
                  e.preventDefault();
                  setSignIn(!signIn);
                }}
              >
                {signIn ? "Sign up" : "Sign In"}
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpIn;
