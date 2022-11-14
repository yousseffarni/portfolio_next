import React,{useState, useContext,useRef} from "react";
import * as FaIcons from 'react-icons/fa';
import DataContext from '../context/DataProvider';
import { ActionProcesse, Alert_Error, Alert_Success } from "../Global Functions/Alerts";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
import { CountryList } from "../Global Functions/Data";


function MailForm(){

  const {MailFormOpen,setMailFormOpen,MailFormMinimize,setMailFormMinimize} = useContext(DataContext);
  
  const form = useRef();

  const [MailFormData, setMailFormData] = useState({
  	UserName: '',
  	email:'',
  	PhoneNumber:'',
    CountryCode:'212',
  	Message:'',
	  File: [], 
  });

  let error_list = [{
	  UserName:'',
    email:'',
    PhoneNumber:'',
    CountryCode:'',
    Message:''
	}];


  const HandleInput = (e) => {
	e.persist();
	setMailFormData({...MailFormData, [e.target.name]: e.target.value});
  }

  const HandleFile = (event) => {
	setMailFormData({...MailFormData, [event.target.name]: event.target.files[0]});
  };

  const HandleMailForm = () =>{
    setMailFormOpen(!MailFormOpen);
  }

  const CloseMailForm = () =>{
    setMailFormOpen(false);
    setMailFormMinimize(false);
  }

  const HandleMailFormMinimize = () =>{
    switch(MailFormMinimize){
      case true : setMailFormMinimize(false); setMailFormOpen(true); break;
      case false : setMailFormMinimize(true); setMailFormOpen(false); break;
    }
  }

  const MailFormSubmit = (e) =>{
    e.preventDefault();

	const Data = [
	  {Name: 'Nom et Prenom', VarName:'UserName',value:MailFormData.UserName},
    {Name: 'Adresse Email', VarName:'email',value:MailFormData.email},
    {Name: 'Numéro de Téléphone', VarName:'PhoneNumber',value:MailFormData.PhoneNumber},
    {Name: 'CountryCode', VarName:'CountryCode',value:MailFormData.CountryCode},
    {Name: 'Message', VarName:'Message',value:MailFormData.Message},
	];	


let ErrorsList = [];
let ErrorsListArray = [];
if(MailFormData.UserName==''||MailFormData.email==''||MailFormData.Message==''){

  for(let i=0; i<Data.length; i++){
    if(Data[i].value==''||Data[i].value==null){
      let Value = `Le Champ ${Data[i].Name} et Obligatoir`;
      //error_list[Data[i].VarName] = Value

      //error_list.push({id:i,[Data[i].VarName]:Value});
      
      ErrorsListArray.push({[Data[i].VarName]:Value});

      //error_list[0][Data[i].VarName] = Value;

      //error_list.push({[Data[i].VarName]:Value});

      document.getElementById(`ValidationErrors_${Data[i].VarName}`).innerHTML = Value;

      console.log('Value = '+Value);
      console.log('error_list[0][Data['+i+'].'+Data[i].VarName+'] = '+error_list[0][Data[i].VarName]);
      ErrorsList.push(Value);
    }else{
      error_list[0][Data[i].VarName] = '';
      document.getElementById(`ValidationErrors_${Data[i].VarName}`).innerHTML = '';
    }
  }

  console.log(ErrorsListArray);

  let i = 1;
  
  Swal.fire({
    position: 'center',
    icon: 'error',
    title: 'Erreur',
    text: 'Les Champs suivant (*) et Obligatoir',
    html: "<ul style='list-style: none; color:#fff; text-align: start; margin:0;'>"+
            "<li class='pb-2' style='font-size:18px; color:gray; font-weight:bold; letter-spacing:1px;'>"+
             'Les Champs suivant (*) et Obligatoir'+
            "</li>"+
             ErrorsList.map((item) =>{
                return ("<li style='color:red;'>"+ i++ + " - " +  item +"</li>"); 
             })
           +"</ul>",
    showConfirmButton: true,
    allowOutsideClick:false,
    showCloseButton:true,
    timerProgressBar: false,
    cancelButtonColor: 'gray',
    confirmButtonColor: '#0062bcd9',
  });

}else{
  // Send Email Here
  for(let i=0; i<Data.length; i++){
    document.getElementById(`ValidationErrors_${Data[i].VarName}`).innerHTML = '';
  }
  sendEmail(e);
}

}

  const sendEmail = (e) => {

    ActionProcesse('Envoyie Votre Email','');

    emailjs.sendForm('gmail', 'PortFolio_FormMail', form.current, 'MBPpP-DXhEQrNKEvY')
      .then((result) => {
          Alert_Success(result.text);
      }, (error) => {
        Alert_Error(error.text,'');
      });
  };

  const MailClassName = MailFormOpen?'MailForm open': MailFormMinimize? 'MailForm minimize':'MailForm';

  //document.body.style.cssText = MailFormOpen?'overflow: hidden;':'overflow: auto;'; 


    return(
        <div className={MailClassName} id='MailForm'>
        <div className="EmailSection">
          <div className="headingTitle px-1">
          <span className="SVG_Icons" style={{paddingLeft:'5px'}} id='ContactMe_icon'></span>
          <h1 className="heading m-0" id="ContactMe"> Contact <span> me </span></h1>
          <div className="FormButtons" style={{paddingRight:'5px'}}>
            <a href="#home" id="MinimizeBtn" onClick={HandleMailFormMinimize} className="CloseForm">
					  {MailFormMinimize?
					   <FaIcons.FaWindowMaximize style={{fontSize:'17px', color:'#fff'}}/>:
					   <FaIcons.FaMinus style={{fontSize:'17px', color:'#fff'}}/>
					  }
				    </a>
            <a href="#home" id="CloseMailForm" onClick={CloseMailForm} className="CloseForm"><FaIcons.FaTimes style={{fontSize: '17px', color: '#fff'}}/></a>
          </div>
          </div>
          <form ref={form} onSubmit={MailFormSubmit} className="ContactContent">
			      <div className="row w-100">
            <div className="col">
              <label htmlFor="inputUserName" className="form-label mb-1 mt-2">Nom et Prénom    <small style={{color:'#ff8f8f'}}>  ( * ) </small> </label>
              <div className="input-group">
                <span className="input-group-text"><FaIcons.FaUserAlt/></span>
                <input type="text" name="UserName" onChange={HandleInput} value={MailFormData.UserName} className="form-control m-0 py-2" placeholder="Nom et Prénom" id="inputUserName"/>
              </div>
              <span className="ValidationErrors" id='ValidationErrors_UserName'>{error_list[0].UserName}</span>
            </div>
            </div>
			      <div className="row w-100">
              <div className="col">
                 <label htmlFor="inputEmail" className="form-label mb-1 mt-2"> Adresse Email    <small style={{color:'#ff8f8f'}}>  ( * ) </small> </label>
                 <div className="input-group">
                   <span className="input-group-text"><FaIcons.FaMailBulk/></span>
                   <input type="email" name="email" onChange={HandleInput} value={MailFormData.email} className="form-control m-0 py-2" placeholder="Adresse Email" id="inputEmail" />
                 </div>
                 <span className="ValidationErrors" id='ValidationErrors_email'>{error_list[0].email}</span>
              </div>
            </div>
			      <div className="row w-100">
              <label htmlFor="inputPhoneNumber" className="form-label mb-1 mt-2">Numéro de Téléphone  </label>
              <div className="col-md-3" style={{paddingRight:'0'}}>
               <div className="input-group">
                 <input type='text' list='CountrysCode' className="form-control m-0 py-2 px-2 text-end" value={MailFormData.CountryCode} name='CountryCode' id='CountryCode' onChange={HandleInput}/>
                 <datalist id='CountrysCode'>
                   {CountryList.map((item, index) => (
                      <option key={index} data-countrycode={item.DataCountrycode} value={item.value}>{item.Name}( +{item.value} )</option>
                   ))
                   }
                 </datalist>
               </div>
              </div>
              <div className="col-md-9">
               <div className="input-group">
                  <span className="input-group-text"><FaIcons.FaPhoneAlt/></span>
                  <input type="text" name="PhoneNumber" onChange={HandleInput} value={MailFormData.PhoneNumber} className="form-control m-0 py-2" placeholder="Numéro de Téléphone" id="inputPhoneNumber"/>
               </div>
              </div> 
              <span className="ValidationErrors" id='ValidationErrors_PhoneNumber'>{error_list[0].CountryCode}</span> 
              <span className="ValidationErrors" id='ValidationErrors_PhoneNumber'>{error_list[0].PhoneNumber}</span>      
            </div>
			      <div className="row w-100">
              <div className="col">
                 <label htmlFor="inputMessage" className="form-label mb-1 mt-2"> Message    <small style={{color:'#ff8f8f'}}>  ( * ) </small> </label>
                 <div className="input-group">
			           <textarea name="Message" placeholder="Message" value={MailFormData.Message} className="form-control m-0 py-2" onChange={HandleInput} cols="30" rows="30" id="inputMessage"></textarea>
                 </div>
                 <span className="ValidationErrors" id='ValidationErrors_Message'>{error_list[0].Message}</span>
              </div>
            </div>
            {false==true?
            <div className="row w-100">
              <div className="col">
               <label htmlFor="File" className="form-label mb-1 mt-2">Montrér Un Ficher  </label>
               <div className="input-group">
                  <span className="input-group-text"><FaIcons.FaFileAlt/></span>
			            <input type="file" name="File" onChange={HandleFile} className="form-control m-0 py-2" placeholder='Montrér Un Ficher' id="File" style={{lineHeight:'36px'}}/>
               </div>
               <span className="ValidationErrors" id='ValidationErrors_File'>{error_list[0].File}</span>
              </div>
            </div>:''
            }
            <button type="submit" className="btnSendMail">
			       <FaIcons.FaTelegram/> Send Message
			      </button>
          </form>
        </div>
    </div>
    );

}

export default MailForm;