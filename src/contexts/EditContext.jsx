import { createContext,useState,useContext } from "react";

export const EditlayoutData = createContext();
import { ToDoList } from "./ToDocontext"; 

export function EditLayoutContext({children}) {
    let [editedtask,seteditedtask]=useState({title:"",body:""})
    let [layout,setlayout] = useState("none");
    let [currentid,setcurrentid]=useState(0);
    const {task,setTask}=useContext(ToDoList)
////////////////////////////////////////////////////////
    function editTask(title,description){
    let newarr=task.map((e)=>{
        if(e.id==currentid){
        return {...e,title:title,body:description}
        }
        return e
    })
    setTask(newarr)
    }
///////////////////////////////////////////////////////////
    function layoutDisplay(id,title,body){
        seteditedtask({body:body,title:title})
        setlayout("flex")
        setcurrentid(id)
        }
////////////////////////////////////////////////////////
    return(
    <EditlayoutData.Provider value={{editedtask,seteditedtask,layout,setlayout,currentid,setcurrentid,editTask,layoutDisplay}}>
        {children}
    </EditlayoutData.Provider>
    );
}