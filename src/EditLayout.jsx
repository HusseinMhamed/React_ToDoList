import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import TextField from '@mui/material/TextField';
import { AlertContext } from './contexts/alertcontext';
import { EditlayoutData } from './contexts/EditContext';
export default function Editlayout() {
/////////////////////////////////////////////////////////////////////////////////////////////
const { editTask,setlayout,layout,seteditedtask,editedtask } = useContext(  EditlayoutData );
const {setmessage,setOpen} = useContext(AlertContext)
function editcurrentTask(){
    if(editedtask.title==""||editedtask.body==""){
        // alert("please fill all")
        setmessage("please fill all")
        setOpen(true)
        return ;
    }else{
      setmessage("Task is Edited Successfully")
        editTask(editedtask.title,editedtask.body)
    }
    setlayout("none")
    seteditedtask({title:"",body:""})
}
//////////////////////////////////////////////////////////////////////////////////////////////
function handleoutclick(e){
    if(e.target.id=="out"){
        setlayout("none")
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////


    let obstyle ={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",
        backgroundColor: "rgba(0 ,0,0,.5)",padding: "0px",width:"100%",height:"100vh",display:layout,alignItems:"center",justifyContent:"center"
        ,zIndex:"1000"
    }
  return (
    <div style={obstyle} onClick={handleoutclick} id='out'>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom sx={{ color: 'text.secondary', fontSize: 25 }}>
          Enter Title
        </Typography>
        <Typography variant="h5" component="div">
        <Box sx={{ width: 500, maxWidth: '100%' }}>
        <TextField fullWidth label="Title" id="fullWidth" value={editedtask.title} onChange={(e)=>{seteditedtask({...editedtask,title:e.target.value})}} />
        </Box>
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 1.5, fontSize: 25  }}>Enter Description</Typography>
             <Box sx={{ width: 500, maxWidth: '100%' }}>
        <TextField fullWidth label="Description" id="fullWidth" value={editedtask.body} onChange={(e)=>{seteditedtask({...editedtask,body:e.target.value})}} />
            </Box>
      </CardContent>
      <CardActions style={{flexDirection:"row-reverse"}}>
        <Button size="small" variant="contained" style={{marginLeft:"10px"}} onClick={editcurrentTask} >Edit</Button>
        <Button size="small" variant="contained" onClick={()=>{setlayout("none")}}>close</Button>
      </CardActions>
    </Card>
    </div>
  );
}