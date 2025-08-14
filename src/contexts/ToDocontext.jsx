import { createContext, useState,useEffect,useRef,useContext } from "react";
import { AlertContext } from "./alertcontext";
export const ToDoList = createContext([])

export function ToDoListProvider({ children }) {
    const {setOpen,setmessage}=useContext(AlertContext)
    let [task, setTask] =useState([]);
    const [confirmopen, setconfirmOpen] = useState(false);
    let [delid,setdelid]=useState(0)
      let mytasks=[]
  let firstload= useRef(true)
function confirm(id){
setconfirmOpen(true);
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
  useEffect(()=>{
    mytasks= localStorage.getItem("mytasks")
    if(mytasks){
      mytasks=JSON.parse(mytasks)
      setTask(mytasks)
    }
  },[])


  useEffect(()=>{
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
//////////////////////////////////////////////////////////////////////////////////////
    return (
        <>
        <ToDoList.Provider value={{task,setTask,confirm,delete_task,confirmopen,
            setconfirmOpen,delid,setdelid,Done }}>
            {children}
        </ToDoList.Provider>
        </>
    );
}