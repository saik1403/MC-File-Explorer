import { useState } from "react";

const Folder = ({ filesData }) => {
  const [hideFolder, setHideFOlder] = useState(true);
  const [showInput, setShowInput] = useState({
    show: false,
    isFOlder: false
  });

  return (
    <div>
      {filesData.type === "folder" ? (
        <div
          onClick={() => {
            setHideFOlder(!hideFolder);
          }}
        >
          📁 {filesData.name}
          <span>🧻</span>
        </div>
      ) : (
        <div>📃 {filesData.name}</div>
      )}
      {!hideFolder && (
        <div
          style={{
            marginLeft: 40
          }}
        >
          {showInput.show && <input type="text" />}
          {filesData?.folders?.map((item, index) => {
            return <Folder filesData={item} key={index} />;
          })}
        </div>
      )}
    </div>
  );
};
export default Folder;
