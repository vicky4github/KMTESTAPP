import React from "react"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import FileUploader from "../FilePondView/FileUploader"
import "./../ModalView/Modal.css"

const ModalComponent=(props)=> {
    console.log("+++++++++++PROPS++++",props)
    console.log("+++++++++++PROPS++++",props.selected_date)
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          Make a Schedule For : <br></br> {props.selected_date.toString()}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <FileUploader  />
         
        </Modal.Body>
        
        <Modal.Footer>      
          <Button onClick={props.onHide}>Close</Button>             
        </Modal.Footer>
      </Modal>
    );
  }

  export default ModalComponent;
  
//   function App() {
//     const [modalShow, setModalShow] = React.useState(false);
  
//     return (
//       <>
//         <Button variant="primary" onClick={() => setModalShow(true)}>
//           Launch vertically centered modal
//         </Button>
  
//         <MyVerticallyCenteredModal
//           show={modalShow}
//           onHide={() => setModalShow(false)}
//         />
//       </>
//     );
//   }
  