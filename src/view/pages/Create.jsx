import Fab from "@material-ui/core/Fab"
import Zoom from "@material-ui/core/Zoom"
import Add from "@material-ui/icons/Add.js"

import Calendar from '../components/Calendar'

const styles = {
  margin: 0,
  top: "auto",
  right: 10,
  bottom: 60,
  left: "auto",
  position: "fixed",
};

const Create = () => {
  return (
    <>
      create
      <Calendar />
      <Zoom in={true}
        timeout={{ enter: 500, exit: 500 }}
      >
        <Fab style={styles} size="medium" color="primary" enterDelay={500}><Add /></Fab>
      </Zoom>
    </>
  );
}

export default Create
