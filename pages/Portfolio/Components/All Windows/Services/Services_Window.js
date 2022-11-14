import React from 'react';
import { Alert_Error } from '../../../Global Functions/Alerts';
import {Tab,Tabs} from 'react-bootstrap';
import Scrollable_Area from '../Scrollable_Area';
import * as FaIcons from 'react-icons/fa';

function Services_Window() {

    const HandleContact_Links = (e,Title,Value) =>{
        e.preventDefault();
        let Link = '';
        switch(Title){
            case 'Email': Link = `mailto:${Value}`; break;
            case 'Linkedin': Link = `https://${Value}`; break;
            case 'WhatsApp': Link = `https://web.whatsapp.com/send?phone=%2B${Value}&text&app_absent=0`; break;
            default: Alert_Error('Can\'t Identify the Link To Open',null); break;
        }
        window.open(Link,' _self');
    }

  return (
    <Scrollable_Area>
        <div id="row-1" className="row-1 active">
            <div className="Panels_Container">
                <ul className="Services_Panels p-0">
                    <li>
                        <div className="icon" id='Web_Design'>
                            <FaIcons.FaReact/>
                            <h3>Web Design</h3>
                            <p>Designing web sites with CSS and other Library Like Bootsrap ,Tailwind CSS...</p>
                        </div>
                    </li>
                    <li>
                        <div className="icon" id='Web_Developpement'>
                            <FaIcons.FaLaravel/>
                            <h3>Web Developpement</h3>
                            <p>Making Amazing Responsive web sites with HTML ,CSS , JS and other Library Like ReactJS, Angular...</p>
                        </div>
                    </li>
                    <li>
                        <div className="icon" id='Game_Developpement'>
                            <FaIcons.FaUnity/>
                            <h3>Game Developpement</h3>
                            <p>Déveloping 2D or 3D High Graphics Games in Unity for Android,PC,IOS .</p>
                        </div>
                    </li>
                </ul>
                <ul className="Services_Panels p-0">
                    <li>
                        <div className="icon" id='3D_Models'>
                            <FaIcons.FaCube/>
                            <h3>3D Models</h3>
                            <p>Making Amazing 3D Models in Blender such as : Buildings, Bodys, Auto, Lands ....</p>
                        </div>
                    </li>
                    <li>
                        <div className="icon" id='Software_Developpement'>
                            <FaIcons.FaCode/>
                            <h3>Software Developpement</h3>
                            <p>Dévelope Amazing Application And Softwares for Android,PC,IOS .</p>
                        </div>
                    </li>
                    <li>
                        <div className="icon" id='Graphic_Design'>
                            <FaIcons.FaBrush/>
                            <h3>Graphic Design</h3>
                            <p>Making High Guality graphic and visual content in photoshop , and UX-UI Layouts in Luncy.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </Scrollable_Area> 
  )
}

export default Services_Window;