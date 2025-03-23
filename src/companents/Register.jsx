import axios from "axios";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(`https://nt-devconnector.onrender.com/api/users`, {
        name,
        email,
        password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token)
        navigate("/posts");
      });
  }

  return (
    <div className="flex items-center justify-center mt-[50px]">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          className="w-[280px] h-[42px] outline mb-[14px] border border-[#A7A7A7] rounded pl-[13px] text-[14px] text-[#8A8A8A]"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="w-[280px] h-[42px] outline mb-[14px] border border-[#A7A7A7] rounded pl-[13px] text-[14px] text-[#8A8A8A]"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-[280px] h-[42px] outline mb-[34px] border border-[#A7A7A7] rounded pl-[13px] text-[14px] text-[#8A8A8A]"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
            type="submit"
            className="w-[280px] h-[42px] bg-[#2d88d4] rounded text-[14px] text-[#fff]">
            Submit
        </button>
      </form>
    </div>
  );
}

export default Register;
