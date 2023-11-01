import "./styles.css";
import { useEffect, useState } from "react";
import data from "../data/data";
import Folder from "./components/Folder";
export default function App() {
  const [filesData, setFileData] = useState(data);

  return (
    <div>
      <Folder filesData={filesData} />
    </div>
  );
}
