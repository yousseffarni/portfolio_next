import React from 'react';
import { Alert_Error } from '../../../Global Functions/Alerts';
import { Tab, Tabs } from 'react-bootstrap';
import Scrollable_Area from '../Scrollable_Area';
import * as FaIcons from 'react-icons/fa';
import { Experiences_Data } from '../../../Global Functions/Data'

function Experience_Window() {

    return (
        <Tabs
            defaultActiveKey="experience"
            id="uncontrolled-tab-example"
            className="BarOptions mb-3"
        >
            <Tab eventKey="experience" title="Experience">
                <Scrollable_Area>
                    <div id="row-1" className="row-1 active">
                        <div className="content">
                            <h3>Experiences</h3>
                            {Experiences_Data.map((item,index) => (
                            <div>
                              <div className="content-Date">
                                <h3>{new Date(item.DateStart).getFullYear()}</h3>
                                <p>from {new Date(item.DateStart).getMonth()}/{new Date(item.DateStart).getDate()} to {new Date(item.DateEnd).getMonth()}/{new Date(item.DateEnd).getDate()}</p>
                              </div>
                              <div className="content-text">
                                <div id="Image-1" className="contentImage"></div>
                                <div className="contentInfo">
                                    <h3> {item.Entreprise} :</h3>
                                    <h5> {item.Type}</h5>
                                    <p>{item.Details}</p>
                                </div>
                              </div>
                              <div className="box-container ">
                                <div className="box ">
                                    <h4> The tasks performed are :</h4>
                                    {item.Tasks.map((Task,index_2)=>(
                                       <p id="infobars"><span><FaIcons.FaChevronRight/> {Task}</span></p> 
                                    ))  
                                    }
                                </div>
                              </div>
                            </div>
                            ))}  
                        </div>
                    </div>
                </Scrollable_Area>
            </Tab>
            <Tab eventKey="formations" title="Formations">
                <Scrollable_Area>
                    <div id="row-2" className="row-1">
                        <div className="content">
                            <h3>Formation</h3>
                            <div className="content-Date">
                                <h3>2019-2021</h3>
                                <p></p>
                            </div>
                            <div className="content-text">
                                <div id="Image-2" className="contentImage"></div>
                                <div className="contentInfo">
                                    <h3>Technician diploma specialized in IT Development</h3>
                                    <p>
                                        delivered by Institute Specialized Technology Applied Mohamed El Fassi , Errachidia – Morocco
                                    </p>
                                </div>
                            </div>

                            <div className="content-Date">
                                <h3>2018-2019</h3>
                                <p></p>
                            </div>
                            <div className="content-text">
                                <div id="Image-3" className="contentImage"></div>
                                <div className="contentInfo">
                                    <h3>Baccalaureate</h3>
                                    <p>
                                        Baccalaureate in experimental sciences option physical sciences and chemistry.
                                        delivered by Hassan II High School, Tinejdad – Morocco
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Scrollable_Area>
            </Tab>
        </Tabs>

    )
}

export default Experience_Window;