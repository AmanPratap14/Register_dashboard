import React from "react";
import Typography from "@mui/material/Typography";
import "./style.scss";

const Logo = () => {
  return (
    <div className="logo">
      <img src={"/assets/logo.png"} width={20} style={{padding: "8px"}} alt="Logo"/>
      <Typography variant="h6" fontWeight={700}>Eden</Typography>
    </div>
  );
};

export default Logo;
