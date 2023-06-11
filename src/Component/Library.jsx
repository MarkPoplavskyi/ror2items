    import React, {useEffect, useState} from "react";
import style from "./Library.module.css";

import Item from "./Item";


function Library(name) {

  const [modalActive, setModalActive] = useState(false)
  return (
    <div className={"col-4 col-sm 3 col-lg-2 d-inline-flex justify-content-center"}>
        <div className={style.shadowDrop2Bottom}>
      <img
        src={`item/${name.img}`}
        className={style.iconItem}
        onClick={()=>setModalActive(true)}
        alt={name.name}
      />
        <Item key={name.id} active = {modalActive} setActive={setModalActive} name={name}/>
        </div>
    </div>
  );
}

export default Library;
