import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import './tasks.css'
export default function Tasks(props){
    return(
        <>
        <div className="task_container">


            <div className="task_body" style={{color:"white",textDecoration:props.state=="complete"?"line-through":"none"}}>
                <div className="task_title">
                    <h2>{props.title}</h2>
                </div>
                <div className="task_discription">
                    <p>{props.body}</p>
                </div>
            </div>

            <div className="task_buttonGroup">
                <DeleteForeverIcon style={{color:"#f44336"}} onClick={()=>{props.delete_task(props.id)}}/>
                <EditIcon style={{color:"#3f50b5"}} onClick={()=>{props.setlayout(props.id,props.title,props.body)}}/>
                <DoneIcon style={props.state=="uncomplete"?{color:"#1d9100ff",marginRight:"0",transition:".2s"}:{color:"white", backgroundColor:"#1d9100ff",marginRight:"0",transition:".2s"}} onClick={()=>{
                    // props.setmessage("✓ Done! Great job!")
                    props.task_done(props.id)
                }} />
            </div>

        </div>
        </>
    )
}