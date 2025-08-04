import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {useState} from 'react';
export default function BasicButtonGroup({setcompletestate, completestate}) {
  return (
    <ButtonGroup variant="contained" aria-label="Basic button group" style={{margin:"15px"}}>
      <Button onClick={()=>{
        setcompletestate("all")
      }} style={completestate=="all"?{background:"#002884"}:{}} >All</Button>
      <Button onClick={()=>{
        setcompletestate("complete")
      }} style={completestate=="complete"?{background:"#002884"}:{}} >Completed</Button>
      <Button onClick={()=>{
        setcompletestate("uncomplete")
      }} style={completestate=="uncomplete"?{background:"#002884"}:{}} >uncompleted</Button>
      {/* <Button>Completed</Button>
      <Button>uncompleted</Button> */}
    </ButtonGroup>
  );
}