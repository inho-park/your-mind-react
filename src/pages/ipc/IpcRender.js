// import IpcComponent from "./components/IpcComponent";
import { useState } from "react";
const electron = window.require('electron');
const { ipcRenderer } = electron;


const file_path = {
  webm : "./python_src/video/test4.webm",
  mp4 : "./python_src/video/test4.mp4"
}

export default function IpcRenderer() {
  const [message, setMessage] = useState('');
  
  ipcRenderer.send("convert script", JSON.stringify(file_path));
  ipcRenderer.on("convert success",(event, arg) => {
      setMessage(arg);
  });
  return (
      <div>
        {/* <IpcComponent
          webm = {file_path.webm}
          mp4 = {file_path.mp4}/> */}
        
        <h1>{message}</h1>
      </div>
    );
}
  