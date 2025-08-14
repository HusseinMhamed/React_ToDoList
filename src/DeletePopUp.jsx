import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Fragment,useContext} from 'react'
import { ToDoList } from './contexts/ToDocontext';
import { AlertContext } from './contexts/alertcontext';
export default function DeletPopUp() {
  const {confirmopen,setconfirmOpen ,delete_task,delid}= useContext(ToDoList)
  const{setmessage}=useContext(AlertContext)
  const handleClose = () => {
    setconfirmOpen(false);
  };

  function agree(){
    setmessage("Task is Deleted Successfully")
    delete_task(delid)
    setconfirmOpen(false);
  }

  return (
    <Fragment>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
      <Dialog
        open={confirmopen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete Task?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this task?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained"  color="error">Disagree</Button>
          <Button onClick={agree} variant="contained"  color="error" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}