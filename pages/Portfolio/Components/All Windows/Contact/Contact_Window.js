import React from 'react';
import { Alert_Error } from '../../../Global Functions/Alerts';
import { Tab, Tabs } from 'react-bootstrap';
import Scrollable_Area from '../Scrollable_Area';
import * as FaIcons from 'react-icons/fa';
import { CountryList } from "../../../Global Functions/Data";

function Contact_Window() {

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

    return (
        <Scrollable_Area>
            <div id="row-1" className="row-1 active">
                <div className="Contact_Panels_Container">
                    <ul className="Contact_Panels">
                      <li>
                        <div className="icon" id="Email_panel" onclick="window.open('mailto:yousseffarni98@gmail.com',' _self');">
                          <FaIcons.FaEnvelopeOpenText/>
                          <h3>Email Adresse</h3>
                          <p>yousseffarni98@gmail.com</p>
                          <p>yousseffarni@gmail.com</p>
                        </div>
                      </li>
                    <li>
                      <div className="icon" id="phone_panel">
                        <FaIcons.FaPhoneAlt/>
                        <h3>Phone Number</h3>
                        <p>+212 767156337</p>
                        <p>+212 695406152</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon" id="linkedin_panel" onclick="window.open('linkedin.com/youssef-farni-9829971b5',' _self');">
                        <FaIcons.FaLinkedin/>
                        <h3>Linkedin</h3>
                        <p>Linkedin.com/in/youssef-farni-9829971b5/</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon" id="whatsapp_panel" onclick="window.open('https://web.whatsapp.com/send?phone=%2B212767156337&text&app_absent=0',' _self');">
                        <FaIcons.FaWhatsapp/>
                        <h3>Whatsapp Number</h3>
                        <p>+212 767156337</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon" id="Adresse_panel" onclick="window.open('',' _self');">
                        <FaIcons.FaLocationArrow/>
                        <h3>Adresse</h3>
                        <p>Mediouna Tit Melil Casablanca</p>
                      </div>
                    </li>
                </ul>
            </div>
            <div className="Contact_Form">
                <input type="text" placeholder="Name" value="" className="box InputText" required=""/>
                <input type="email" placeholder="Email" value="" className="box InputText" required=""/>
                <div className="phoneSection">
                    <select type="text" name="" id="" value="" className="box CountyCode">
                    {CountryList.map((item, index) => (
                        item.Name === 'Morocco'?
                        <option key={index} data-countrycode={item.DataCountrycode} value={item.value} selected>{item.Name}      ( +{item.value} )</option>:
                        <option key={index} data-countrycode={item.DataCountrycode} value={item.value}>{item.Name}      ( +{item.value} )</option>
                    ))
                    }
                    </select>
                    <input type="number" value="" placeholder="Phone Number" className="box InputText"/>
                </div>
                <textarea name="" placeholder="Message" value="" id="" cols="30" rows="30" required=""></textarea>
                <button type="submit" className="btnSendMail"><i className="bx-fw bx bxl-telegram " id="Button_SendMessage"></i>Send Message</button>
            </div>
            </div>
        </Scrollable_Area>
    )
}

export default Contact_Window;