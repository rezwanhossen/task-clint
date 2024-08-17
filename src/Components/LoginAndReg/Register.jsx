// import React from "react";

import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../FirbaseProv/FirebaseProvider";

const Register = () => {
  const naviget = useNavigate();

  const from = "/";
  const { creatUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password, fullname, img } = data;
    creatUser(email, password).then((res) => {
      naviget(from);
      console.log(res);
    });
  };
  return (
    <div>
      <div className="mt-10">
        <div className=" w-full md:w-[50%] mx-auto p-5 border-2 rounded-md shadow-sm">
          <h2 className=" text-2xl font-bold text-center my-5">
            Pleace register
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" space-y-5"
            action=""
          >
            <div>
              <input
                className="w-full rounded-md border-2 p-2"
                type="text"
                placeholder="Full name"
                name=""
                id=""
                {...register("fullname")}
                required
              />
            </div>
            <div>
              <input
                className="w-full rounded-md border-2 p-2"
                type="text"
                placeholder=" Photo url"
                name=""
                id=""
                {...register("img")}
              />
            </div>
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
              value="register"
            />
          </form>
          <p className="mt-5 font-bold">
            {" "}
            have an account yet?{" "}
            <Link to="/login" className=" text-green-600">
              Login{" "}
            </Link>{" "}
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
