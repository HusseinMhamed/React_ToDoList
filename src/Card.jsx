import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BasicButtonGroup from './ButtonGroup';
import TextField from '@mui/material/TextField';
import Tasks from './Tasks';
import {useState , useMemo} from 'react'
import DeletPopUp from './DeletePopUp';
export default function BasicCard({task,setTask,setlayout,setmessage,setsOpen}) {
    // let [task, setTask] =useState([]);
    const [open, setOpen] = useState(false);
    let [delid,setdelid]=useState(0)
    let [completestate,setcompletestate]=useState("all")
////////////////////////////////////////////////////////////////////////////////////////
 let [taskInput, setTaskInput] = useState("");
function addnew(){
    if (taskInput==""){setsOpen(true);setmessage("fill the task field"); return 0 } 
    setmessage("Task added successfully!")
    let newid=task.length==0?1:task[task.length-1].id+1
    let newob={id:newid,title: taskInput, body:taskInput,state:"uncomplete"};
    setTask([...task,newob])
    setTaskInput("")
}

///////////////////////////////////////////////////////////////////////////////////////

function confirm(id){
setOpen(true);
setdelid(id)
}

//////////////////////////////////////////////////////////////////////////////////////
function delete_task(id){
    // console.log(id)
    setTask(task.filter((e)=>{
        return e.id!=id
    }))
}

///////////////////////////////////////////////////////////////////////////////////////
      let Tasks_list=useMemo(()=>{
       return task.map((ele)=>{
          if(completestate=="all"){
            return(
              <Tasks key={ele.id} id={ele.id} title={ele.title} body={ele.body} delete_task={confirm} task_done={Done} state={ele.state} setlayout={setlayout} setmessage={setmessage} />
            )}
            else if(completestate=="complete"){
              if(ele.state=="complete"){
                return(
                  <Tasks key={ele.id} id={ele.id} title={ele.title} body={ele.body} delete_task={confirm} task_done={Done} state={ele.state} setlayout={setlayout} setmessage={setmessage} />
                )
              }
            }
            else if(completestate=="uncomplete"){
              if(ele.state=="uncomplete"){
                return(
                  <Tasks key={ele.id} id={ele.id} title={ele.title} body={ele.body} delete_task={confirm} task_done={Done} state={ele.state} setlayout={setlayout} setmessage={setmessage} />
                )
              }
            }
          })
        },[task,completestate])
          ///////////////////////////////////////////////////////////////////////////////////////
function Done(id){
    setTask(task.map((e)=>{
        if(e.id==id){
            e.state=="uncomplete"?setmessage("✓ Done! Great job!"):setmessage(e.title+" Removed from completed tasks")
            return e.state=="uncomplete"?{...e,state:"complete"}:{...e,state:"uncomplete"}
        }
        return e
    }))
}

///////////////////////////////////////////////////////////////////////////////////////
  return (
    <Card sx={{ minWidth: 275 ,padding:"0"}}>
      <CardContent>
        <Typography variant="h3" component="div">
            My Tasks
        </Typography>

        <BasicButtonGroup setcompletestate={setcompletestate} completestate={completestate}/>
      <div style={{maxHeight:"70vh",overflow:"auto",padding:"10px"}}>
         {Tasks_list}
      </div>
         
      </CardContent>
      <CardActions>
     {/* <Box sx={{ width: "79%", maxWidth: '100%' }}> */}
      <TextField fullWidth label="Task title" id="fullWidth" value={taskInput} onChange={(e)=>{
        setTaskInput(e.target.value)
      }}/>
      {/* </Box> */}
        <Button size="larg" variant="contained" style={{height:"56px",width:"145px"}} onClick={addnew}>Add task</Button>
      </CardActions>
      <DeletPopUp open={open} setOpen={ setOpen } delid={delid} delete_task={delete_task} setmessage={setmessage}/>
    </Card>
  );
}
