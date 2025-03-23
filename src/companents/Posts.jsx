import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Posts = () => {
  const [developer, setDev] = useState([]);

  useEffect(() => {
    let token = localStorage.getItem("token");
    axios
      .get(`https://nt-devconnector.onrender.com/api/profile`, {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((res) => setDev(res.data)
      );
  }, []);
  
  console.log(developer);
  

  return (
    <div className="p-[20px]">
      {developer?.map((dev) => {
        if (!dev._id) return null;
        return (
          <div key={dev._id} className="border rounded p-[20px] mb-[10px]">
            <h2>{dev.name}</h2>
            <h2>{dev.location}</h2>
            <h2>{dev.company}</h2>
            <h2>{dev.date}</h2>
            <h2>{dev.status}</h2>

           <Link to={`/posts/${dev.user._id}`}>Details</Link>

          </div>
        );
      })}
    </div>
  );
};

export default Posts;
