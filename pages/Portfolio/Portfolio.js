import Head from 'next/head';
import react,{useContext, useEffect,useState} from 'react';
import Desktop from './Components/Desktop';
import TaskBar from './Components/TaskBar';
import MailForm from './Components/MailForm';
import * as FaIcons from 'react-icons/fa';
import { Modal,Tab,Tabs} from 'react-bootstrap';

//import Modal from '@mui/material/Modal';
// Windows :
import About_Window from './Components/All Windows/About/About_Window';
import Contact_Window from './Components/All Windows/Contact/Contact_Window';
import Experience_Window from './Components/All Windows/Experience/Experience_Window';
import Projects_Window from './Components/All Windows/Projects/Projects_Window';
import Services_Window from './Components/All Windows/Services/Services_Window';

import DataContext from './context/DataProvider';

export default function index() {
    
  const {WindowName,setWindowOpen,WindowOpen,NighModActive} = useContext(DataContext);
  
  const handleWindowModal = () =>{ setWindowOpen(!WindowOpen);}
  const [MaximizeWindow,SetMaximizeWindow] = useState(false);
  
  const HandleMaximizeWindow = () => {
    SetMaximizeWindow(!MaximizeWindow);
  }
  
  let Window_Title = {
    FirstText: WindowName=='About'?'About':WindowName=='Services'?'Our':
    WindowName=='Experinces'?'Professional':WindowName=='Projects'?'My':
    WindowName=='Contact'?'Contact':'',
    SecondText: WindowName=='About'?'Me':WindowName=='Services'?'Services':
    WindowName=='Experinces'?'Experinces':WindowName=='Projects'?'Projects':
    WindowName=='Contact'?'Us':''
  };
    

 
 const CloseFormStyle = {
  width: '30px',
  height: '30px',
  padding: '0px',
  margin: '0px',
  alignItems: 'center',
  justifyContent: 'center'
 }
 
 function GetWindow(){
   switch(WindowName){
     case '': return 
     
   }
 }
 
 
 function Window_Modal(props) {
    return (
      <Modal 
        {...props} size="lg" 
        aria-labelledby="contained-modal-title-vcenter" 
        centered 
        draggable={true}
        id={WindowName+'Form'}
        
        className={WindowOpen? (MaximizeWindow?'Window_Form Form open FullScreen':'Window_Form Form open') : 'Window_Form Form'}
      >
        <div className="headingTitle">
          <span className="SVG_Icons Section" id={WindowName+'_icon'}></span>
          <h1 className="heading m-0" id="aboutMe"> 
           {Window_Title.FirstText} 
           <span> {Window_Title.SecondText} </span>
          </h1>
          <div className="FormButtons d-flex justify-content-center gap-2 align-items-center mx-1">
            <button id="MaximizeForm" type='button' onClick={HandleMaximizeWindow} style={CloseFormStyle} className="btn btn-primary">{MaximizeWindow?<FaIcons.FaWindowMinimize/>:<FaIcons.FaWindowMaximize/>}</button>
            <button id="CloseForm" type='button' onClick={props.onHide} style={CloseFormStyle} className="btn btn-danger"><FaIcons.FaTimes/></button>
          </div>
        </div>
        {
          WindowName=='About'?<About_Window/>:WindowName=='Services'?<Services_Window/>:
          WindowName=='Experinces'?<Experience_Window/>:WindowName=='Projects'?<Projects_Window/>:
          WindowName=='Contact'?<Contact_Window/>:<h1>No Window Selected</h1>
        }
        <div className="BarOptionsBottom">
          <ul>
              <li className="BtnPrevious active">
                  <a>
                      <FaIcons.FaArrowLeft/> &nbsp; Previous
                  </a>
              </li>
              <li className="BtnNext">
                  <a>
                      Next &nbsp; <FaIcons.FaArrowRight/>
                  </a>
              </li>
          </ul>
        </div>
      </Modal>
    );
  }
  
  return (
    <div className='container'>
      <Head>
        <title>Youssef Farni - Portflio</title>
        <meta name="description" content="Developer Youssef Farni Portfolio" />
        <link rel="icon" href="/favicon-32x32.ico" />
      </Head>
      <Desktop/>
      <TaskBar/>
      <MailForm/>
      <Window_Modal show={WindowOpen} onHide={handleWindowModal} />
    </div>
  )
}
