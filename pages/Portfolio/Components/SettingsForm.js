import React,{useState, useContext} from "react";
import * as FaIcons from 'react-icons/fa';
import DataContext from '../context/DataProvider';
import Link from 'next';

function SettingsForm(){

const {SettingsFormOpen,setSettingsFormOpen,NighModActive,setNighModActive} = useContext(DataContext);

const HandleSettingsForm = () =>{
    setSettingsFormOpen(!SettingsFormOpen);
}

const HandleSwitchBtn = (e) =>{
    e.persist();
    setNighModActive(!NighModActive);
    document.body.classList.toggle('darkMode');
}

const SettingsClassName = SettingsFormOpen?'SettingsForm open': 'SettingsForm';

    return(
        <div className='dropdown-menu SettingsForm' aria-labelledby="SettingsForm">
          <div className="dropdown-menu lang-menu">
              <button id="selectedLang_dropdown" type='button' data-bs-toggle="dropdown" aria-expanded="false" className="selectedLang en">
                  <a id="a_English" >English <FaIcons.FaCaretUp/></a>
                  <ul aria-labelledby="selectedLang_dropdown" className="flex-column w-100 d-none h-auto">
                      <li className='w-100'>
                          <a href="#" onClick={HandleSettingsForm} className="justify-content-start fr"  id="a_French" language='french'>Français</a>
                      </li>
                      <li className='w-100'>
                          <a href="#"  className="justify-content-start en"  id="a_English" language='english'>English</a>
                      </li>
                  </ul>
              </button>
              
          </div>

          <div className="NightMod">
              <a id="DarkMode">Dark Mode :</a>
          </div>
  
          <div className="checkbox-btn">
              <input type="checkbox" onChange={HandleSwitchBtn} className="NighMod-Switch" name=""/>
              <div>
                  <span className="slide d-flex align-items-center justify-content-center">
                      <FaIcons.FaMoon style={{fontSize:'25px'}}/>
                  </span>
              </div>
          </div>
        </div>
    );
}

export default SettingsForm;