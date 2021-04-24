import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useState} from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const Popup = ({ isOpen = false, successHandler, cancelHandler, date, formatedDate, _title="", _moment="", _mood = 2 }) => {
  
  let [title, setTitle] = useState({
    value: _title,
    error: _title.length > 3 && _title.length < 50 ? false : true
  });
  
  let [moment, setMoment] = useState({
    value: _moment,
    error: _moment.length > 20 && _moment.length < 255 ? false : true,
  });
  
  const updateTitle = (event) => {
    let { value } = event.target;
    if (value.length > 3 && value.length < 50) setTitle({value, error: false})
    else setTitle({ value, error: true })
  }
  
  const updateMoment = (event) => {
    let { value } = event.target;
    if (value.length > 20 && value.length < 255)
      setMoment({ value, error: false });
    else setMoment({ value, error: true });
  };
  
  const submitForm = () => {
    if (!title.error && !moment.error) {
      const formData = { title: title.value, moment: moment.value, date: formatedDate, mood};
      successHandler({ formData, _date: date });
    }
  }
  
  let mood = "";

  const moodEmoji = (index=2) => {
    switch (index) {
      case 0:
      mood = "😔";
      return "😔";
      case 1:
      mood = "😊";
      return "😊";
      case 2:
      mood = "😁";
      return "😁";
      default:
      break;
    }
  }
          
  mood = moodEmoji(_mood);
  
  return (
    <Dialog
      open={isOpen}
      onClose={cancelHandler}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Add a Moment</DialogTitle>
      <form noValidate autoComplete="off">
        <DialogContent>
          <TextField
            id="date"
            type="date"
            defaultValue={formatedDate}
            disabled={true}
          />
          <Typography id="mood-slider" gutterBottom>
            How are you feeling?
          </Typography>
          <Slider
            defaultValue={2}
            aria-labelledby="mood-slider"
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={2}
            valueLabelFormat={moodEmoji}
          />
          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            label="Title"
            type="text"
            fullWidth
            multiline={false}
            value={title.value}
            required
            error={title.error}
            onChange={(e) => updateTitle(e)}
          />
          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            label="Moment"
            type="text"
            fullWidth
            multiline={true}
            rows={4}
            value={moment.value}
            required
            error={moment.error}
            onChange={(e) => updateMoment(e)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={cancelHandler} color="primary">
            Cancel
          </Button>
          <Button
            onClick={submitForm}
            color="primary"
            disabled={title.error || moment.error}
          >
            Create
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default Popup
