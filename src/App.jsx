import './App.css'
import Container from '@mui/material/Container';
import BasicCard from './Card'
import Editlayout from './EditLayout'
import SimpleSnackbar from './alert'
import DeletPopUp from './DeletePopUp';
function App() {
  return (
    <>
     <Container maxWidth="sm">
       <BasicCard style={{transition:".2s"}}/>
       </Container>
    <Editlayout />
    <SimpleSnackbar/>
    <DeletPopUp/>
    </>
  )
}

export default App
