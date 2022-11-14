import swal from "sweetalert2";
import { FrontDropFilterControl } from './FrontDropFilterControl';




export function Alert_Success(message) {

  FrontDropFilterControl();
  
    swal.fire({ 
        position: 'center', 
        icon: 'success', 
        title: 'Succès', 
        text: message, 
        timerProgressBar: false,
        showConfirmButton: false, 
        allowOutsideClick:false, 
        cancelButtonColor: 'gray', 
        confirmButtonColor: '#0062bcd9', 
        timer: 3500
       });
}

export function Alert_Warning(message) {

  FrontDropFilterControl();
    swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'Avertissement',
        text: message,
        showConfirmButton: true,
        allowOutsideClick:false,
        showCloseButton:true,
        timerProgressBar: false,
        cancelButtonColor: 'gray',
        confirmButtonColor: '#0062bcd9',
      });
}


export function Alert_Error(message,ErrorsList) {

  FrontDropFilterControl();

    if(ErrorsList!=null && message==null){
         
        let i = 1;
  
        swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Erreur',
          text: message? message:'Les Champs (*) et Obligatoir',
          html: "<ul style='list-style: none; color:#fff;  text-align: start; margin:0;'>"+
                   ErrorsList.map((item) =>(
                      "<li style='color:red;'>"+ i++ + " - " +  item +"</li>"
                   ))
                 +"</ul>",
          showConfirmButton: true,
          allowOutsideClick:false,
          showCloseButton:true,
          timerProgressBar: false,
          cancelButtonColor: 'gray',
          confirmButtonColor: '#0062bcd9',
        });
    }
    else{
      FrontDropFilterControl();
      swal.fire({ 
        position: 'center', 
        icon: 'error', 
        title: 'Erreur', 
        text: message? message:'Les Champs (*) et Obligatoir', 
        showConfirmButton: true, 
        allowOutsideClick:false, 
        timerProgressBar: false,
        cancelButtonColor: 'gray', 
        confirmButtonColor: '#0062bcd9', 
       });  
    }
    
}


export function ActionProcesse(Title,Comment,position) {

  const Toast = swal.mixin({
    toast: true,
    position: position?position:'center',
    timerProgressBar: true,
    cancelButtonColor: 'gray',
    confirmButtonColor: '#0062bcd9',
    showCancelButton: false,
    allowOutsideClick:false,
    allowEnterKey:false,
    allowEscapeKey:false,
    showConfirmButton: false,
    didOpen: () => {
     swal.showLoading()
     FrontDropFilterControl(true);
    },
 });
 Toast.fire(Title? Title:'', Comment=''||Comment?  Comment: 'Chargement en cours...', '');
}


export function ConfirmCRUD(e,id,Type,Link,Question,Data,ActionName){

    swal.fire({ 
      position: 'center', 
      icon: 'warning', 
      title: 'Avertissement', 
      text: Question, 
      confirmButtonText: 'Oui', 
      cancelButtonText: 'Non', 
      showConfirmButton: true,
      showCancelButton: true,  
      showCloseButton:true,
      allowOutsideClick:false, 
      cancelButtonColor: 'gray', 
      confirmButtonColor: '#0062bcd9', 
     }).then((result) => {
      if (result.isDismissed == true) {
        
      }
      else if (result.isConfirmed == true) {
        switch(Type)
        {
            case 'View' : case 'Edit': case 'Print' :
                ActionProcesse((ActionName?ActionName:'Récupération des données'));
                window.location.pathname = Link;
            break;

            default :
              //HandleCRUD(e,id,Type,Link,Data,ActionName); 
            break;
        }
      }
      })
}
