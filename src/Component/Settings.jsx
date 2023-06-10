import React from "react";
import Modal from "react-bootstrap/Modal";
import {Form, ModalBody} from "react-bootstrap";


function Settings({active, setActive}) {
    const handleClose = () => setActive(false);
    return (
    <Modal
        show={active}
        onHide={handleClose}
        >
        <ModalBody>
            <Form>
                {['radio'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                        <Form.Check // prettier-ignore
                            type={type}
                            id={`default-${type}`}
                            label={`default ${type}`}
                        />
                    </div>
                ))}
            </Form>
        </ModalBody>
    </Modal>

    );
}

export default Settings;