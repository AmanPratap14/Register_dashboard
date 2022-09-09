import { Typography, Button, Card, CardContent } from "@mui/material";
import React from "react";
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import { USER_TYPE } from "../constants";
import "./style.scss";

const Screen3 = ({ next, userDetails, setUserDetails }) => {
  const handleSubmit = () => {
    next();
  };

  return (
    <div className="form-container screen-3">
      <Typography variant="h4" gutterBottom fontWeight={700}>
        How are you planning to use Eden?
      </Typography>
      <Typography variant="p">
        We'll streamline your setup experience accordingly.
      </Typography>
      <form className="form" onSubmit={handleSubmit}>
        <div className="card-input">
          <Card
            variant="outlined"
            style={{
              border:
                userDetails.userType === USER_TYPE.ME
                  ? "1px solid #664DE5"
                  : "1px solid #ddd",
            }}
            onClick={() => {
              setUserDetails({
                userType: USER_TYPE.ME,
              });
            }}
          >
            <CardContent className={"card-content"}>
              <Typography
                gutterBottom
              >
                <PersonIcon color={userDetails.userType === USER_TYPE.ME ? "primary" : undefined}/>
              </Typography>
              <Typography sx={{ mb: 1 }} variant="body" fontWeight={700} component="div">
                For myself
              </Typography>
              <Typography variant="body2">
              Write better. Think more clearly. Stay organized
              </Typography>
            </CardContent>
          </Card>
          <Card
            variant="outlined"
            style={{
              border:
                userDetails.userType === USER_TYPE.GROUP
                  ? "1px solid #664DE5"
                  : "1px solid #ddd",
            }}
            onClick={() => {
              setUserDetails({
                userType: USER_TYPE.GROUP,
              });
            }}
          >
            <CardContent className={"card-content"}>
              <Typography
                gutterBottom
              >
                <GroupsIcon color={userDetails.userType === USER_TYPE.GROUP ? "primary" : undefined} />
              </Typography>
              <Typography sx={{ mb: 1 }} variant="body" fontWeight={700} component="div">
                With my team
              </Typography>
              <Typography variant="body2">
                Wikis, docs, tasks &amp; projects, all in one place.
              </Typography>
            </CardContent>
          </Card>
        </div>

        <Button type="submit" className="label" variant="contained" fullWidth>
          Create Workspace
        </Button>
      </form>
    </div>
  );
};

export default Screen3;
