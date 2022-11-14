import React,{useEffect} from 'react';
import { Alert_Error } from '../../../Global Functions/Alerts';
import { ProfileInfo ,SkillsList} from './About_Data';
import {Tab,Tabs} from 'react-bootstrap';
import Scrollable_Area from '../Scrollable_Area';
import * as FaIcons from 'react-icons/fa';
function About_Window() {

  const HandleContact_Links = (e,Title,Value) =>{
      e.preventDefault();
      let Link = '';
      switch(Title){
        case 'Email': Link = 'mailto:'+Value; break;
        case 'Linkedin': Link = 'https://'+Value; break;
        case 'WhatsApp': Link = 'https://web.whatsapp.com/send?phone=%2B'+Value+'&text&app_absent=0'; break;
        default: Alert_Error("Can't Identify the Link To Open",null); break;
      }
      window.open(Link,' _self');
  } 

  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="BarOptions mb-3"
    >
      <Tab eventKey="profile" title="Profile">
        <Scrollable_Area>
          <div id="row-1" className="row-1 active">
                <div className="content">
                    <div className="ProfileInfo">
                        <div className="image">
                            <img src='./images/YOUSSEF FARNI PROFILE .png' alt="YOUSSEF_FARNI"/>
                        </div>
                        <div className="ProfileText">
                            <h3 id="h3_Proile">PROFIL :</h3>
                            <p id="p_Proile">Technician specialized in computer and software development. I have a baccalaureate in physical sciences and I master software that makes 3D graphic design, I develope games and mobile applications and websites
                                as well as create and manage Databases.
                            </p>
                            <div className="AboutButtons">
                                <div id="button" className="button px-3">
                                    <div className="text-icon">
                                        <FaIcons.FaDownload/>
                                        <span className="text">Download CV</span>
                                    </div>
                                </div>
                                <p className="pdf_download_Link hide" style={{fontSize:'15px'}}>
                                    if download doesn't start <a href="https://www.youssef-farni.com/Assets/YOUSSEF FARNI CV.pdf">Click here</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="box-container">
                        <div className="box ">
                            <h4 id="h4_Proile1">Personal Informations:</h4>
                            {ProfileInfo.map((item,index) =>(
                                item.Type=='Personal'?
                                <p key={index} id='infobars'><span>{item.Icon} {item.Title} :</span> {item.Value}</p>:''
                            ))}
                        </div>
                        <div className="box ">
                            <h4 id="h4_Proile2">Contact Informations:</h4>
                            {ProfileInfo.map((item,index) =>(
                                item.Type=='Contact'?
                                <p key={index} id='infobars'><span>{item.Icon} {item.Title} :</span> {item.Value}</p>:
                                item.Type=='ContactLink'?
                                <p key={index} id='infobars'><span>{item.Icon} {item.Title} :</span> 
                                   <button type='button' style={{color:'#fff'}} onClick={(e) => HandleContact_Links(e,item.Title,item.Value)} className='m-0'>{item.Value}</button>
                                </p>:''
                            ))}
                        </div>
                    </div>
                </div>
          </div>  
        </Scrollable_Area> 
      </Tab>
      <Tab eventKey="skills" title="Skills">
        <Scrollable_Area>
         <div id="row-2" className="row-2">
            <div className="content">
                <h3> SKILLS :</h3>
                <div className="office_text">
                    <p>OPERATING SYSTEM OFFICE TOOLS:</p>
                    <div className="office_icons">(
                        <span className="SVG_Icons" id="Word_icon"></span>-
                        <span className="SVG_Icons" id="Excel_icon"></span>-
                        <span className="SVG_Icons" id="PowerPoint_icon"></span>-
                        <span className="SVG_Icons" id="Access_icon"></span> ) 80%
                    </div>
                </div>
                <div className="box-container">
                    <div className="box" id="box-1">
                    {SkillsList.map((item,index) =>{
                        for (let i=0; i<Math.round(SkillsList.length/2); i++) {
                            if(SkillsList[i] == item) {
                                return(
                                  <div key={index} className="progress">
                                     <div className="bar"><span style={{width: item.Percentage}}></span></div>
                                     <h3> {item.Percentage}</h3>
                                  </div>  
                                )
                            }
                        }
                     })
                    }
                    </div>
                    <div className="box" id="box-2">
                    {SkillsList.map((item,index) =>{
                        for (let i=Math.round(SkillsList.length/2); i<SkillsList.length; i++) {
                            if(SkillsList[i] == item) {
                                return(
                                  <div key={index} className="progress">
                                     <div className="bar"><span style={{width: item.Percentage}}></span></div>
                                     <h3> {item.Percentage}</h3>
                                  </div>  
                                )
                            }
                        }
                     })
                    }
                    </div>
                </div>
            </div>
         </div>
        </Scrollable_Area> 
      </Tab>
      <Tab eventKey="languages" title="Languages">
        <Scrollable_Area>
          <div id="row-3" className="row-3">
            <div className="content">
                <div className="box-container">
                    <div className="box">
                        <h3><i class='bx-fw bx bx-conversation'></i> LANGUAGES :</h3>
                        <p>The languages I speak and understand :</p>
                        <p id="infobars" className="image EN"><span> English  :</span> Excellent</p>
                        <p id="infobars" className="image FR"><span> French  :</span> Medium</p>
                        <p id="infobars" className="image AR"><span> Arabic  :</span> Excellent</p>
                        <p id="infobars" className="image AR"><span> Tamazight  :</span> Native</p>
                    </div>
                    <div className="box">
                        <h3><i class='bx-fw bx bx-tennis-ball'></i> Interests:</h3>
                        <p>Activities I do in my spare time :</p>
                        <p id="infobars"><span><FaIcons.FaCode/> Programming</span></p>
                        <p id="infobars"><span><FaIcons.FaSearch/> WEB search</span></p>
                        <p id="infobars"><span><FaIcons.FaCube/> 3D drawing  </span></p>
                        <p id="infobars"><span><FaIcons.FaDribbble/> Sport</span></p>
                    </div>
                </div>
            </div>
          </div> 
        </Scrollable_Area> 
      </Tab>
    </Tabs>
    
  )
}

export default About_Window;