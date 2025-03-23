import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Details = () => {
  const [developer, setDev] = useState({});

  const { id } = useParams();
  
  useEffect(() => {
    let token = localStorage.getItem("token");
    axios
      .get(`https://nt-devconnector.onrender.com/api/profile/${id}`, {
        headers: { "x-auth-token": token },
      })
      .then((res) =>  setDev(res.data));
  }, [id]);

  console.log(developer);
  

  return (
    <div className="p-[20px]">
        <div key={developer._id} className="border rounded p-[20px] mb-[10px]">
          <h2>{developer.name}</h2>
          <h2>{developer.location}</h2>
        </div>
    </div>
  );
};

export default Details;
