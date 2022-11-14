const FrontDropFilterControl = (Status) =>{

    let FrontDropFilter = document.getElementById('FrontDropFilter');

    if(Status === true){  // Activate Front Drop Filter
      if(FrontDropFilter.classList.contains('d-none')){
        FrontDropFilter.classList.remove('d-none');
      }
    }else{ // Diactivate Front Drop Filter
      if(!FrontDropFilter.classList.contains('d-none')){
        FrontDropFilter.classList.add('d-none');
      }  
    }
}

export {
  FrontDropFilterControl
}