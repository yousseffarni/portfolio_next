import next from "next";
import React,{useState, useContext} from "react";
import * as FaIcons from 'react-icons/fa';
import DataContext from '../context/DataProvider';
import { GetCurrentDate, GetCurrentDateName, GetCurrentTime } from "../Global Functions/GetFullDateName";
import Swal from "sweetalert2";
import { Modal,Button } from 'react-bootstrap';
//import Modal from '@mui/material/Modal';
import SettingsForm from './SettingsForm';

// Windows :
import About_Window from './All Windows/About/About_Window';


function TaskBar(){

  const {MailFormOpen,
        setMailFormOpen,
        setWindowName,
        WindowName,setWindowOpen,WindowOpen,
        SettingsFormOpen,setSettingsFormOpen,
    } = useContext(DataContext);
  
  const HandleMailForm = () =>{
      setMailFormOpen(!MailFormOpen);
      setWindowOpen(false);
  }
  
  const HandleSettingsForm = () =>{
    setSettingsFormOpen(!SettingsFormOpen);
  }
  
  
  const HandleOpenWindow = (e,W_Name) =>{
    e.preventDefault();
    setMailFormOpen(false);
    
    if(W_Name!==WindowName){
        if(WindowOpen!==true){
          setWindowOpen(!WindowOpen);   
        }
       setWindowName(W_Name);  
    }else{
       setWindowOpen(!WindowOpen);   
    }

  //
  //const Toast = Swal.mixin({
  //    toast: true,
  //    position: 'center',
  //    timerProgressBar: true,
  //    showCancelButton: false,
  //    showConfirmButton: false,
  //    timer: 1000,
  //    didOpen:() =>{
  //       setWindowOpen(!WindowOpen); 
  //    }
  // });
  // Toast.fire('', '', '');
}
  
  const pathname = '';
  // get The Last item in the pathname ^^
  const getLastItem = thePath => thePath.substring(thePath.lastIndexOf('/') + 1)
  const path = getLastItem(pathname);
  
  
  const Current = new Date();
  let Day = Current.getDate();
  let Month = Current.getMonth()+1;
  let Year = Current.getFullYear();

  let monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
                    "Juillet", "Août", "Septembre", "Octobre", "Novembre", 
                    "Décembre"
                   ];
  
  let days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
  
  // Get The Current Date :
  if(path=='fr'){ // path.includes('fr')
    monthNames =["Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
                  "Juillet", "Août", "Septembre", "Octobre", "Novembre",
                  "Décembre"
                ];
    days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
  }


  const CurrentDateName = ( 
     days[Current.getDay()]+', '+monthNames[Month-1]+' '+(Day<10? '0'+Day: Day) + ', ' + Year
  );
  
  const CurrentDate = (Day<10? '0'+Day: Day)+'/'+Month + '/' + Year ;
  
  
  let Time = Current.toLocaleTimeString('en-US',{ hour12: false });
  const CurrentTime = (Time.split(':',1)=='24'?'00':Time.split(':',1)) +':'+Time.split(':',2)[1];
  
  const style_Active_Window = {
    borderBottom: '2px solid #69a1de',
    background: '#ffffff1a',
    transition:'all 0.5s ease'
  }
  
   const TaskBar_Taps = ['About','Services','Experinces','Projects','Contact'];

    return(
    <div className="TaskBar_Section">
        <div className="TaskBar">
            <ul className="nav-list">
                <li className="HomeButton">
                    <button type='button' onClick={(e)=>setWindowOpen(false)} className="TaskBar_buttons" href="#home" id="btnHome">
                     <FaIcons.FaHome/>
                     <span className="tooltrip" id="Span_Home">Home</span>
                    </button>
                </li>
                {
                TaskBar_Taps.map((Tap,index) =>(
                   <li key={index} className="appsbar" style={WindowName==Tap&&WindowOpen?style_Active_Window:{}}>
                       <button type='button' onClick={(e)=>HandleOpenWindow(e,Tap)} className="TaskBar_buttons" id={"btn"+Tap}>
                           <span className="SVG_Icons" id={Tap+"_icon"}></span>
                           <span className="tooltrip" id={"Span_"+Tap}>{Tap}</span>
                       </button>
                   </li> 
                ))
                }
            </ul>

            <ul className="nav-options">
                <li className="btnEmailForm">
                    <button type='button' className="TaskBar_buttons" onClick={HandleMailForm} href="#MailForm" id="btnEmailForm">
                        <span className="SVG_Icons" id="ContactMe_icon"></span>
                        <span className="tooltrip" id="Span_ContactMe">Contact Me</span>
                    </button>
                </li>
                <li className="dropdown btnSettings">
                    <button type='button' data-bs-offset="10,20" id="SettingsForm" data-bs-toggle="dropdown" aria-expanded="false" className="TaskBar_buttons" onClick={HandleSettingsForm}>
                        <span className="SVG_Icons" id="Settings_icon"></span>
                        <span className="tooltrip" id="Span_Settings">Settings</span>
                    </button>
                    <SettingsForm/>
                </li>

                <li className="btnDateTime">
                    <a className="TaskBar_buttons" id="btnDateTime">
                        <span id="RealTime">{CurrentTime}</span>
                        <span id="RealDate">{CurrentDate}</span>
                        <span className="tooltrip" id="RealDateNames">{CurrentDateName}</span>
                    </a>
                </li>
            </ul>

        </div>
    </div>
    );
}

export default TaskBar;