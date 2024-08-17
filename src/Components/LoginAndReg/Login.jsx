import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../FirbaseProv/FirebaseProvider";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const naviget = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";
  const { loginUser, googleLogin } = useContext(AuthContext);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    loginUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        if (result.user) {
          naviget(from);
        }
      })
      .catch((error) => {
        console.log(error);
      })

      .catch((error) => {
        seterror(error.message);
      });
  };
  const handelSocalLoig = (socalprov) => {
    socalprov().then((result) => {
      console.log(result.user);
      if (result.user) {
        naviget(from);
      }
    });
  };
  return (
    <div className="mt-10">
      <div className=" w-full md:w-[50%] mx-auto p-5 border-2 rounded-md shadow-sm">
        <h2 className=" text-2xl font-bold text-center my-5">Pleace login</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" space-y-5"
          action=""
        >
          <div>
            <input
              placeholder="enter your email"
              className="w-full rounded-md border-2 p-2"
              type="email"
              name=""
              id=""
              required
              {...register("email")}
            />
          </div>

          <div>
            <input
              placeholder="enter your password"
              className="w-full rounded-md border-2 p-2"
              type="password"
              name=""
              id=""
              required
              {...register("password")}
            />
          </div>
          <input
            className=" border-2 w-full bg-blue-600 p-2 text-xl font-bold rounded-md"
            type="submit"
            value="login"
          />
        </form>
        <p className="mt-5 font-bold">
          {" "}
          Don't have an account yet?{" "}
          <Link to="/reg" className=" text-green-600">
            Sign up
          </Link>{" "}
          .
        </p>
        <h5 className=" divider text-lg my-4 font-bold">Continue with</h5>
        <div>
          <button onClick={() => handelSocalLoig(googleLogin)} className=" btn">
            <FaGoogle /> Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
