import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BasicButtonGroup from './ButtonGroup';
import TextField from '@mui/material/TextField';
import Tasks from './Tasks';
import {useState , useMemo,useContext} from 'react'
import { ToDoList } from './contexts/ToDocontext';
import { AlertContext } from './contexts/alertcontext';
export default function BasicCard() {
  const {task , setTask} = useContext(ToDoList)
  const { setmessage,setOpen }= useContext(AlertContext)
    let [completestate,setcompletestate]=useState("all")
////////////////////////////////////////////////////////////////////////////////////////
 let [taskInput, setTaskInput] = useState("");
function addnew(){
    if (taskInput==""){setOpen(true);setmessage("fill the task field"); return 0 } 
    setmessage("Task added successfully!")
    let newid=task.length==0?1:task[task.length-1].id+1
    let newob={id:newid,title: taskInput, body:taskInput,state:"uncomplete"};
    setTask([...task,newob])
    setTaskInput("")
}

      let Tasks_list=useMemo(()=>{
       return task.map((ele)=>{
          if(completestate=="all"){
            return(
              <Tasks key={ele.id} id={ele.id} title={ele.title} body={ele.body} state={ele.state} />
            )}
            else if(completestate=="complete"){
              if(ele.state=="complete"){
                return(
                  <Tasks key={ele.id} id={ele.id} title={ele.title} body={ele.body} state={ele.state} />
                )
              }
            }
            else if(completestate=="uncomplete"){
              if(ele.state=="uncomplete"){
                return(
                  <Tasks key={ele.id} id={ele.id} title={ele.title} body={ele.body} state={ele.state} />
                )
              }
            }
          })
        },[task,completestate])

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
      <TextField fullWidth label="Task title" id="fullWidth" value={taskInput} onChange={(e)=>{
        setTaskInput(e.target.value)
      }}/>
        <Button size="larg" variant="contained" style={{height:"56px",width:"145px"}} onClick={addnew}>Add task</Button>
      </CardActions>
    </Card>
  );
}