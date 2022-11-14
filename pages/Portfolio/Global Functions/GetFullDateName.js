const GetMyDateName = (String_Date,getTime) => {

  const MyDate = String_Date? new Date(String_Date) : '';
  let Result = '0';

  if(MyDate){
    let Day = MyDate.getDate();
    let Month = MyDate.getMonth() + 1;
    let Year = MyDate.getFullYear();

    let Time = MyDate.toLocaleTimeString('en-US',{ hour12: false })

    // Get The Current Date :
    const monthNames = ["","Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
                      "Juillet", "Août", "Septembre", "Octobre", "Novembre", 
                      "Décembre"];     


     let RemoveSeconds = Time.split(':',1) +':'+Time.split(':',2)[1]; // Exemple = 12:50   >--<  Time = 12:50:00
     
     

  Result = ( 
     (Day<10? '0'+Day: Day)+' '+(monthNames[Month]?monthNames[Month]:'/ '+Month+' /') + ' ' + Year + (getTime? (' - '+ RemoveSeconds) : '')
   );
  }

  return Result;

}

const GetMyDate = (String_Date,getTime) => {

  const MyDate = String_Date? (new Date(String_Date)) : '';
  let Result = '0';

  if(MyDate){
    let Day = MyDate.getDate();
    let Month = MyDate.getMonth() + 1;
    let Year = MyDate.getFullYear();

    let Time = MyDate.toLocaleTimeString('en-US',{ hour12: false })

    let RemoveSeconds = Time.split(':',1) +':'+Time.split(':',2)[1]; // Exemple = 12:50   >--<  Time = 12:50:00
     
    Result = ( 
       Year +'-'+ Month + '-' + (Day<10? '0'+Day: Day) + (getTime? ' '+RemoveSeconds : '')
    );
  }

  return Result;

}

const GetCurrentDateName = () => {

    const Current = new Date();
    let Day = Current.getDate();
    let Month = Current.getMonth();
    let Year = Current.getFullYear();

    // Get The Current Date :
    const monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
                      "Juillet", "Août", "Septembre", "Octobre", "Novembre", 
                      "Décembre"];

   let Result = ( 
     (Day<10? '0'+Day: Day)+' '+monthNames[Month] + ' ' + Year
   );

  return Result;

}

const GetCurrentDate = () => {

  const Current = new Date();
  let Day = Current.getDate();
  let Month = Current.getMonth()+1;
  let Year = Current.getFullYear();

 let Result = ( 
   (Day<10? '0'+Day: Day)+'-'+Month + '-' + Year
 );

return Result;

}

const GetCurrentTime = () => {

  const Current = new Date();
  let Result='';

  let Time = Current.toLocaleTimeString('en-US',{ hour12: false });
  Result = Time.split(':',1) +':'+Time.split(':',2)[1]; // Exemple = 12:50   >--<  Time = 12:50:00
  
  return Result;
}


const JustDateNoTime = (String_Date) => {

  const MyDate = String_Date? new Date(String_Date) : '';
  let Result = '';
  if(MyDate){

    let Day = MyDate.getDate();
    let Month = MyDate.getMonth() + 1;
    let Year = MyDate.getFullYear();

    Result = ( 
      Year +'-'+(Month<10? '0'+Month: Month) + '-' + (Day<10? '0'+Day: Day)
    );
  }
  
return Result;

}

export {
  GetMyDateName,GetMyDate,GetCurrentDateName,GetCurrentDate,GetCurrentTime,JustDateNoTime
}

