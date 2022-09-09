import {
  TextField,
  Typography,
  InputLabel,
  Button,
  InputAdornment,
} from "@mui/material";
import React from "react";
import "./style.scss";

const Screen2 = ({ next, userDetails, setUserDetails }) => {
  const handleSubmit = () => {
    next();
  };

  return (
    <div className="form-container screen-2">
      <Typography variant="h4" gutterBottom>
        Let's setup a home for all your work
      </Typography>
      <Typography variant="p">
        You can always create another workspace later.
      </Typography>
      <form className="form" onSubmit={handleSubmit}>
        <InputLabel className="label">Workspace Name</InputLabel>
        <TextField
          required
          value={userDetails.workspaceName}
          onChange={(e) => setUserDetails({ workspaceName: e.target.value })}
          placeholder="Eden"
          fullWidth
        />

        <InputLabel className="label">
          Workspace URL <span className="greyed">(Optional)</span>
        </InputLabel>
        <TextField
          value={userDetails.workspaceUrl}
          onChange={(e) => setUserDetails({ workspaceUrl: e.target.value })}
          InputProps={{
            startAdornment: (
              <InputAdornment
                position="start"
                className="adornment"
              >
                <b>www.eden.com/</b>
              </InputAdornment>
            ),
            style: { padding: 0 },
          }}
          placeholder="Example"
          fullWidth
        />

        <Button type="submit" className="label" variant="contained" fullWidth>
          Create Workspace
        </Button>
      </form>
    </div>
  );
};

export default Screen2;
