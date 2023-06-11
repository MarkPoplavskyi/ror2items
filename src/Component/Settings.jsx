import React, {useEffect, useState} from "react";
import Modal from "react-bootstrap/Modal";
import {Button, Form, ModalBody} from "react-bootstrap";
import darkmode from "../App.css"


function Settings({active, setActive}) {

    const body= document.body
    const wasDarkmode = localStorage.getItem(darkmode) ==='true'
    const switchDarkTheme = ()=>{
        localStorage.setItem('switchDarkTheme', !wasDarkmode)
        body.classList.toggle("darkMode",!wasDarkmode)};
    const switchLightTheme = ()=>{

        localStorage.setItem('switchLightTheme', !wasDarkmode)
        body.classList.toggle("lightMode",!wasDarkmode)
    };
    const handleClose = () => setActive(false);

    return (
    <Modal
        show={active}
        onHide={handleClose}
        >
        <ModalBody>
                <h3 className="text-center">Тема</h3>
            <div className="d-grid gap-2">
            <Button variant={"dark"} onClick={switchDarkTheme}>Темна тема</Button>
            <Button variant={"secondary"} onClick={switchLightTheme}>Світла тема</Button>
            </div>
        </ModalBody>
    </Modal>

    );
}

export default Settings;