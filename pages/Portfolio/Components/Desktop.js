import React,{useState, useContext} from "react";
import DataContext from '../context/DataProvider';
import * as FaIcons from 'react-icons/fa';

function Desktop(){

  const {MailFormOpen,
    setMailFormOpen,
    setWindowName,
    WindowName,setWindowOpen,WindowOpen,
} = useContext(DataContext);

const [open, setOpen] = useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


    const pathname = '';
    // get The Last item in the pathname ^^
    const getLastItem = thePath => thePath.substring(thePath.lastIndexOf('/') + 1)
    const path = getLastItem(pathname);
    
  
    let Welcome = 'Bonjour';
    const Today = new Date();
    const Time = Today.toLocaleTimeString('en-US',{ hour12: false });

    if(parseInt(Time.split(':',1)) >= 0 && parseInt(Time.split(':',1)) <= 19)
    {
      Welcome = path=='fr'?'Bonjour':'Hello';
    }else{
      Welcome = path=='fr'?'Bonsoir':'Good Afternoon';
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

    return(
    <section className="home_content" id="home">
       <div className="content">
         <span className="hi">{Welcome}...</span>
         <div className="YoussefTitle">
           <h3>I'm</h3>
           <ul className="YoussefName">
               <li className="Nameletters">
                   <a className="YoussefText FirstName">
                       <span>YOUSSEF</span>
                   </a>
               </li>
           </ul>
         </div>
         <p className="info">I'm a Full-Stack Web Developer</p>
         <p className="text">I'm a technician specialized in computer and software development. I have a baccalaureate in physical sciences and I master software that makes 3D graphic design, I develope games and mobile applications and websites as well as create and
             manage Databases.
         </p>
         <a className="btnAboutDisktop" onClick={(e)=>HandleOpenWindow(e,'About')}> <span className="SVG_Icons" id='About_icon'></span>About Me</a>
       </div>
       <div className="image">
           <img src='./images/Youssef-Farni.png' alt="YOUSSEF_FARNI"/>
       </div>
       
       <div className="Social_icons">
       <a className="fb" href="https://www.facebook.com/farni.youssef">
           <span>Facebook</span>
           <FaIcons.FaFacebook/>
       </a>
       <a className="in" href="https://www.linkedin.com/in/youssef-farni-9829971b5">
           <span>Facebook</span>
           <FaIcons.FaLinkedin/>
       </a>
       <a className="wp" href="https://www.facebook.com/farni.youssef">
           <span>Facebook</span>
           <FaIcons.FaWhatsapp/>
       </a>
       <a className="yb" href="https://www.youtube.com/channel/UC-FtP4Ha7NB6s9VPqApmi5g">
           <span>Facebook</span>
           <FaIcons.FaYoutube/>
       </a>
       <a className="tw" href="https://www.twitter.com/farni.youssef">
           <span>Facebook</span>
           <FaIcons.FaTwitter/>
       </a>
     </div>
    </section>
    );
    
}

export default Desktop;