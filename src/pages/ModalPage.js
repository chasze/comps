import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
    const [showModal, setShowModal] = useState(false)

    const handleClick = () => {
        console.log('hi')
        setShowModal(true)
    };

    const handleClose = () => {
        setShowModal(false)
    }

    const actionBar =  <div> <Button onClick={handleClose} primary> I Agree</Button> </div>


    const modal = <Modal onClose={handleClose} actionBar={actionBar} >
            <p>
                This is some import text passed as children of our modal
            </p>
        </Modal>

   return ( <div className="relative"> 
    <Button onClick={handleClick} primary>Open Modal</Button>
     {showModal && modal}
    </div>
   )
    
}

export default ModalPage;