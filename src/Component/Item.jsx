import  React from "react";
import Modal from 'react-bootstrap/Modal';
import {Container, ModalFooter} from "react-bootstrap";


function Item({active, setActive, name}) {

        return (
            <>
                <Modal
                    show={active}
                    onHide={() => setActive(false)}
                    dialogClassName="modal-90w, modal-dialog-canter"
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            {name.name}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>
                            {name.desc}
                        </p>
                        <h5>Тип стакання: {name.stack}</h5>
                    </Modal.Body>
                        <ModalFooter>
                            <img src={`item/${name.img}`}/>
                        </ModalFooter>
                </Modal>
            </>
        );
}

export default Item;
