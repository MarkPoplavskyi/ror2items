import React from "react";
import Modal from 'react-bootstrap/Modal';
import {Container, ModalFooter} from "react-bootstrap";


function Item({active, setActive}) {

        return (
            <>
                <Modal
                    show={active}
                    onHide={() => setActive(false)}
                    dialogClassName = "modal-style"
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Container className={"modalstyle"}>
                    <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            13213
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>
                            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
                            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
                            ipsam atque a dolores quisquam quisquam adipisci possimus
                            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
                            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
                            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
                            deleniti rem!
                        </p>
                    </Modal.Body>
                        <ModalFooter>
                            <img src={require("../image/Armor-Piercing_Rounds.png")}/>
                        </ModalFooter>
                    </Container>
                </Modal>
            </>
        );
}

export default Item;
