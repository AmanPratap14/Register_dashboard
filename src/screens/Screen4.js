import { Typography, Button } from "@mui/material";
import React from "react";
import DoneIcon from "@mui/icons-material/Done";
import "./style.scss";

const Screen4 = ({ userDetails }) => {
  return (
    <div className="form-container screen-4">
      <div className="success-icon">
        <div className="round">
          <DoneIcon />
        </div>
      </div>
      <Typography variant="h4" gutterBottom>
        Congratulations, {userDetails?.displayName}!
      </Typography>
      <Typography variant="p">
        You have completed onboarding, you can start using the Eden!
      </Typography>
      <Button type="submit" className="label" variant="contained" fullWidth>
        Launch Eden
      </Button>
    </div>
  );
};

export default Screen4;
