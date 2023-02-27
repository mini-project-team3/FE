import React from "react";

const Bgm = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <audio src="/Bgm.mp3" controls loop autoPlay style={{ height: "20px", width: "290px", marginBottom: "20px" }} />
    </div>
  );
};

export default Bgm;
