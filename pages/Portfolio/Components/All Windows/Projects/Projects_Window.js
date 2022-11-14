import React from 'react';
import { Alert_Error } from '../../../Global Functions/Alerts';
import { Tab, Tabs } from 'react-bootstrap';
import Scrollable_Area from '../Scrollable_Area';
import * as FaIcons from 'react-icons/fa';
import { ProjectsTaps } from '../../../Global Functions/Data';

function Projects_Window() {

    const HandleContact_Links = (e, Title, Value) => {
        e.preventDefault();
        let Link = '';
        switch (Title) {
            case 'Email': Link = `mailto:${Value}`; break;
            case 'Linkedin': Link = `https://${Value}`; break;
            case 'WhatsApp': Link = `https://web.whatsapp.com/send?phone=%2B${Value}&text&app_absent=0`; break;
            default: Alert_Error('Can\'t Identify the Link To Open', null); break;
        }
        window.open(Link, ' _self');
    }
    
    const Styles = {
        Title:{
            fontSize: '20px',
            textTransform: 'capitalize',
            fontWeight: 'bold',
            letterSpacing: '1px',
            color: '#3e89b6'
        },
        Skills:{
            background: '#21a4f463',
            borderRadius: '50px',
            color: 'white',
            padding: '2px 10px',
        }
    };
    
    return (
        <Tabs
            defaultActiveKey="web"
            id="uncontrolled-tab-example"
            className="BarOptions mb-3"
        >
            {ProjectsTaps.map((Tab) =>( 
             <Tab key={Tab.Key} eventKey={Tab.Key} title={Tab.Title}>
                <Scrollable_Area>
                    <div id="row-1" className="row-1 active">
                        <div className="projects" id="projects">
                            <h3 className="projects_Title">{Tab.WindowTitle}</h3>
                            <div className="row w-100 m-auto projects-container justify-content-start">
                                {Tab.projects.map((project,index) =>(
                                  <div className='col-md-6 p-2'key={index}>
                                   <div className="project-card">
                                    <a className="Card" href="#">
                                        <img src={project.Image} alt="expense-tracker" loading="lazy" className="project-pic" />
                                    </a>
                                    <div className='Project_Details row' onClick={()=>{window.open(project.Link,' _blank')}}>
                                        <h1 className='title text-center m-auto pb-2' style={Styles.Title}>{project.Title}</h1>
                                        <ul className='d-flex mx-2 flex-column' style={{textAlign: 'start'}}>
                                            <li className='row d-flex'>
                                                <div className='col-md-4' style={{fontWeight: 'bold',letterSpacing: '1px'}}>Technologies </div>
                                                <div className='d-flex flex-wrap col-md-8'>
                                                 {project.Technologies.map((item,index_2) =>(
                                                  <span className='mx-1 my-1' style={Styles.Skills} key={index_2}>{item}</span>
                                                 ))}
                                                </div>
                                            </li>
                                            <li className='row d-flex'>
                                                <div className='col-md-4' style={{fontWeight: 'bold',letterSpacing: '1px'}}>Version </div>
                                                <div className='col-md-8'>{project.version}</div>
                                            </li>
                                            <li className='row d-flex'>
                                                <div className='col-md-4' style={{fontWeight: 'bold',letterSpacing: '1px'}}>Date </div>
                                                <div className='col-md-8'>{project.DateCreation}</div>
                                            </li>
                                        </ul>
                                    </div>
                                   </div>  
                                  </div>  
                                ))
                                }
                            </div>
                        </div>
                    </div>
                </Scrollable_Area>
             </Tab>
            )) 
            }
        </Tabs>
    )
}

export default Projects_Window;