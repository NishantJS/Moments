import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Profile from '@material-ui/icons/PersonOutlined';
import Theme from "@material-ui/icons/BrightnessMediumOutlined";
import Switch from '@material-ui/core/Switch';
import Divider from "@material-ui/core/Divider";

const Options = () => {
  return (
    <List>
      <ListItem button>
        <ListItemIcon>
          <Profile />
        </ListItemIcon>
        <ListItemText primary="spam"></ListItemText>
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText primary="spam"></ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText primary="spam"></ListItemText>
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemIcon>
          <Theme />
        </ListItemIcon>
        <ListItemText primary="spam"></ListItemText>
        <Switch value="checkedA" inputProps={{ "aria-label": "Switch A" }} />
      </ListItem>
    </List>
  );
}

export default Options
