import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const [developer, setDev] = useState({});

  const { id } = useParams();
  console.log(id);
  

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) {
      console.log("Token topilmadi!");
      return;
    }
    axios
      .get(`https://nt-devconnector.onrender.com/profile/${id}`, {
        headers: { "x-auth-token": token },
      })
      .then((res) => setDev(res.data))
      .catch((error) => console.log("Xatoilik yuz berdi", error.response?.data || error.mesage));
  }, []);

  console.log(developer);

  return (
    <div className="p-[20px]">
      <div key={developer._id} className="border rounded p-[20px] mb-[10px]">
        <h2>{developer?.name}</h2>
        <h2>{developer?.location}</h2>
      </div>
    </div>
  );
};

export default Details;