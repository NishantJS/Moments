import { Toolbar, AppBar, Avatar } from "@material-ui/core";

const TopNav = () => {
  return (
    <AppBar position="static" className="top_nav">
      <Toolbar>
        <Avatar>G</Avatar>
      </Toolbar>
    </AppBar>
  )
}

export default TopNav
