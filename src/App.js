import "./App.css";
import "./Component/Navbar";
import Library from "./Component/Library";
import React, {useEffect, useState} from "react";
import Navbar from "./Component/Navbar";


function App() {
  const [item, setItem] =useState([])
  const [searchTerms,setsearchTerms]=useState('')

  console.log(searchTerms)

  useEffect(()=> {
    fetch('https://648480a5ee799e321626c2f7.mockapi.io/Item')
        .then((res)=>res.json()).then((arr) =>{setItem(arr)});
  },[])

  return (
      <>
        <Navbar searchTerms={searchTerms} setsearchTerms={setsearchTerms}/>
        <div className={"App"}>
          <div className="container LibraryBackground mt-5">
        <div className="row justify-content-center">
          <div className={"col text-center text-white"}>
            <h2 className={"mb-2"}>Risk of Rain 2</h2>
          </div>
          <div className="row">
              {
                item.filter(obj =>{
                  if (obj.desc.toLowerCase().includes(searchTerms.toLowerCase())||obj.name.toLowerCase().includes(searchTerms.toLowerCase()))
                  {
                     return true;
                  }
                  return false;
                }).map((obj) =>(
                  <Library  key={obj.id} {...obj}/>
              ))}
          </div>
        </div>
      </div>
    </div>
      </>
  );
}

export default App;
