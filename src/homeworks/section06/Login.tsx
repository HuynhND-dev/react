import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./styles.module.css";
import axios from "axios";

interface LoginForm {
  username: string;
  password: string;
}

const schema = yup.object({
  username: yup.string().email().required(),
  password: yup.string().required().min(3).max(35),
});

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<LoginForm> = (data) => {
    console.log(data);
    const url = "https://server.aptech.io/auth/login";
    const login = async () => {
      try {
        const response = await axios.post(url, data);
        alert("login ok");
        localStorage.setItem("access_token", response.data.access_token);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    login();
  };
  return (
    <div className="">
      <form method="post" onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-md-5">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                {...register("username")}
              />
              <p className={styles.errors}>{errors.username?.message}</p>
            </div>
          </div>
          <div className="col-md-5">
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                {...register("password")}
              />
              <p className={styles.errors}>{errors.password?.message}</p>
            </div>
          </div>
          <div className="col-md-2">
            <div className="form-group mt-4">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
