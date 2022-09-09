import { TextField, Typography, InputLabel, Button } from "@mui/material";
import React from "react";
import "./style.scss";

const Screen1 = ({ next, userDetails, setUserDetails }) => {
  const handleSubmit = () => {
    next();
  };

  return (
    <div className="form-container screen-1">
      <Typography variant="h4" gutterBottom fontWeight={700}>
        Welcome! First things first...
      </Typography>
      <Typography variant="p">You can always change them later.</Typography>
      <form className="form" onSubmit={handleSubmit}>
        <InputLabel className="label">Full Name</InputLabel>
        <TextField
          required
          value={userDetails.fullName}
          onChange={(e) => setUserDetails({ fullName: e.target.value })}
          placeholder="Steve Jobs"
          fullWidth
        />

        <InputLabel className="label">Display Name</InputLabel>
        <TextField
          required
          value={userDetails.displayName}
          onChange={(e) => setUserDetails({ displayName: e.target.value })}
          placeholder="Steve"
          fullWidth
        />

        <Button type="submit" className="label" variant="contained" fullWidth>
          Create Workspace
        </Button>
      </form>
    </div>
  );
};

export default Screen1;
