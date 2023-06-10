import React, {useState} from "react";
import style from "./Library.module.css";
import Item from "./Item";

function Library(props) {

  const [modalActive, setModalActive] = useState(false)
  return (
    <div
      className={"col-4 col-sm 3 col-lg-2 d-inline-flex justify-content-center"}
    >
      <img
        src={require("../image/Armor-Piercing_Rounds.png")}
        className={style.iconItem}
        onClick={()=>setModalActive(true)}
      />
      <Item active = {modalActive} setActive={setModalActive}/>
    </div>
  );
}

export default Library;
