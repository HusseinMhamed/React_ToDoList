import { useState ,useEffect ,useRef } from 'react'
import './App.css'
import Container from '@mui/material/Container';
import BasicCard from './Card'
import Editlayout from './EditLayout'
import SimpleSnackbar from './alert'
function App() {
  let [task, setTask] =useState([]);
  let [editedtask,seteditedtask]=useState({title:"",body:""})
  let mytasks=[]
  const [open, setOpen] =useState(false);
  const [message,setmessage]=useState("")
  let firstload= useRef(true)
  useEffect(()=>{
    mytasks= localStorage.getItem("mytasks")
    if(mytasks){
      mytasks=JSON.parse(mytasks)
      setTask(mytasks)
      // console.log(mytasks)
    }
  },[])

  useEffect(()=>{
    // let newarr=JSON.stringify(task)
    // console.log(task)
      // localStorage.setItem("mytasks",newarr)
    // console.log("second");
    setTask((c) => {
      localStorage.setItem("mytasks",JSON.stringify(c));
      return c;
    })  
    setOpen(true)
    if(firstload.current){
    setmessage("Tasks loaded successfully")
    firstload.current=false
    }
  },[task])

  // console.log(1);

  let [layout,setlayout] = useState("none")
  let [currentid,setcurrentid]=useState(0)
function layoutDisplay(id,title,body){
  // console.log(title)
  seteditedtask({body:body,title:title})
//   seteditedtask({...editedtask,title:"aloekrg"})
//    seteditedtask((e)=>{
//  return {...e,title:title,body:body}
//    })
  setlayout("flex")
  setcurrentid(id)
}
function editTask(title,description){
  // console.log(task)
  let newarr=task.map((e)=>{
    if(e.id==currentid){
      return {...e,title:title,body:description}
    }
    return e
  })
  setTask(newarr)
}
  return (
    <>
     <Container maxWidth="sm">
       <BasicCard layout={layout} setlayout={layoutDisplay} task={task} setTask={setTask} style={{transition:".2s"}} setmessage={setmessage} setsOpen={setOpen}/>
       </Container>
    <Editlayout layout={layout} setlayout={setlayout} editTask={editTask} editedtask={editedtask} seteditedtask={seteditedtask} setOpen={setOpen} setmessage={setmessage}/>
    <SimpleSnackbar message={message} open={open} setOpen={setOpen}/>
    </>
  )
}

export default App
