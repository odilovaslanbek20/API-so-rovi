import { Routes, Route } from "react-router-dom";
import Register from "./companents/Register";
import Details from "./companents/Details";
import Developers from "./companents/Posts";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/posts" element={<Developers />} />
        <Route path="/posts/:id" element={<Details />} />
      </Routes>
    </>
  );
}
