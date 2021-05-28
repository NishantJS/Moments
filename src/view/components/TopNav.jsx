import { Toolbar, AppBar, Typography } from "@material-ui/core";

const TopNav = () => {
  return (
    <AppBar position="static" className="top_nav">
      <Toolbar>
        <Typography variant="h6" component="h2">
          Moments
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopNav;
