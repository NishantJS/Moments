import {useState} from 'react';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import EditIcon from "@material-ui/icons/Edit";
import ShareIcon from "@material-ui/icons/Share";
import DeleteIcon from "@material-ui/icons/Delete";
import MenuIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
  paper: {
    position:"relative",
    padding: '6px 16px',
    width: "60vw",
    maxWidth: "400px"
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  timelineOppositeContent: {
    wordWrap: "wrap",
    overflow: "hidden",
    display: "flex",
    padding: "0",
  },
  desc: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  },
  descHover: {
    whiteSpace: "wrap"
  },
  menu: {
    position: "absolute",
    top: "10px",
    right: "5px"
  }
}));

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function Moments() {
  let moments = JSON.parse(localStorage.getItem("moments"));

  let toRender = moments ? <MomentsContent moments={moments}/> : <MomentsEmpty/>
  
  return (
    <div>
      {toRender}
    </div>
  );
}

const MomentsContent = ({ moments }) => {
  const sortReverse = (a, b) => b - a;
  
  return (
    <div style={{overflow: "auto"}}>
      <Timeline align="left">
        {Object.keys(moments).sort().map((year) => {
          return Object.keys(moments[year])
            .sort(sortReverse)
            .map((month) => {
              return Object.keys(moments[year][month])
                .sort()
                .map((day) => (
                  <TimeLineItem content={moments[year][month][day]} key={ `${day}_${month}_${year}`}/>
                ));
            });
        })}
      </Timeline>
    </div>
  );
};

const MomentsEmpty = () => {
  return <>Empty</>;
};

const TimeLineItem = ({content: {title, moment, date, mood}}) => {
  
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();
  const [isSelected, setSelected] = useState(false);
  let [year, month, day] = date.split("-");
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <TimelineItem>
      <TimelineOppositeContent className={classes.timelineOppositeContent}>
        <Typography variant="body2" color="textSecondary">
          {year} <br /> {month} -{" "}
          <span style={{ fontWeight: "bold" }}>{day}</span>
        </Typography>
      </TimelineOppositeContent>

      <TimelineSeparator>
        <TimelineDot
          color={`${mood === "😔" ? "secondary" : "primary"}`}
          variant="outlined"
          style={{
            width: "30px",
            height: "30px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {mood}
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>

      <TimelineContent>
        <Paper elevation={3} className={classes.paper}>
          <Typography variant="h6" component="h1">
            {title}
          </Typography>
          <Typography
            className={`${isSelected ? classes.descHover : classes.desc}`}
            onClick={() => setSelected((p) => !p)}
          >
            {moment}
          </Typography>
          <MenuIcon
            className={classes.menu}
            aria-controls="options"
            aria-haspopup="true"
            onClick={handleClick}
          />
          <StyledMenu
            id="options"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <StyledMenuItem>
              <ListItemIcon>
                <EditIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Edit" />
            </StyledMenuItem>
            <StyledMenuItem>
              <ListItemIcon>
                <ShareIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Share" />
            </StyledMenuItem>
            <StyledMenuItem>
              <ListItemIcon>
                <DeleteIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Delete" />
            </StyledMenuItem>
          </StyledMenu>
        </Paper>
      </TimelineContent>
    </TimelineItem>
  );
}