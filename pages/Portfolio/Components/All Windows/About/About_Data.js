import * as FaIcons from'react-icons/fa';

  const SkillsList=[
   {Groupe:1,Name:'HTML5',Percentage:'90%',Icon:<FaIcons.FaHtml5/>},
   {Groupe:1,Name:'CSS3',Percentage:'80%',Icon:<FaIcons.FaCss3/>},
   {Groupe:1,Name:'Javascript',Percentage:'70%',Icon:<FaIcons.FaCode/>},
   {Groupe:1,Name:'C#',Percentage:'56%',Icon:<FaIcons.FaInfo/>},
   {Groupe:1,Name:'PHP',Percentage:'60%',Icon:<FaIcons.FaPhp/>},
   {Groupe:1,Name:'Laravel',Percentage:'55%',Icon:<FaIcons.FaLaravel/>},
   {Groupe:1,Name:'MySQL',Percentage:'65%',Icon:<FaIcons.FaSquareFull/>},
   {Groupe:1,Name:'React JS',Percentage:'60%',Icon:<FaIcons.FaReact/>},
   {Groupe:1,Name:'Next JS',Percentage:'55%',Icon:<FaIcons.FaReact/>},
   {Groupe:1,Name:'React Native',Percentage:'40%',Icon:<FaIcons.FaInfo/>},
   {Groupe:1,Name:'Node JS',Percentage:'35%',Icon:<FaIcons.FaPython/>},
   {Groupe:1,Name:'Python',Percentage:'35%',Icon:<FaIcons.FaPython/>},
   
   {Groupe:2,Name:'JAVA',Percentage:'30%',Icon:<FaIcons.FaJava/>},
   {Groupe:2,Name:'Visual Studio',Percentage:'55%',Icon:<FaIcons.FaInfo/>},
   {Groupe:2,Name:'Unity3D',Percentage:'60%',Icon:<FaIcons.FaUnity/>},
   {Groupe:2,Name:'Game Maker',Percentage:'66%',Icon:<FaIcons.FaGamepad/>},
   {Groupe:2,Name:'PhotoShop',Percentage:'70%',Icon:<FaIcons.FaPhotoVideo/>},
   {Groupe:2,Name:'Illustrator',Percentage:'50%',Icon:<FaIcons.FaPenAlt/>},
   {Groupe:2,Name:'Audition',Percentage:'25%',Icon:<FaIcons.FaFileAudio/>},
   {Groupe:2,Name:'Angular',Percentage:'20%',Icon:<FaIcons.FaAngular/>},
   {Groupe:2,Name:'WordPress',Percentage:'55%',Icon:<FaIcons.FaWordpress/>},
  ];
  
  const ProfileInfo=[
    //PersonalInfo
    {Type:'Personal',Title:'Age',Value:'23Years',Icon:<FaIcons.FaMale/>},
    {Type:'Personal',Title:'Gender',Value:'Male',Icon:<FaIcons.FaSign/>},
    {Type:'Personal',Title:'Laguages',Value:'Arabic,English,Français,Tamazight',Icon:<FaIcons.FaLanguage/>},
    {Type:'Personal',Title:'Work',Value:'Developper',Icon:<FaIcons.FaBriefcase/>},
    {Type:'Personal',Title:'Country',Value:'Morocco',Icon:<FaIcons.FaFlag/>},
    {Type:'Personal',Title:'Adresse',Value:'MediounaTitMelilCasablanca.',Icon:<FaIcons.FaMapMarkedAlt/>},
    {Type:'Personal',Title:'Diplôme',Value:'DTS-DéveloppementInformatique',Icon:<FaIcons.FaCertificate/>},
    
    //ContactInfo
    {Type:'Contact',Title:'FreeLance',Value:'Available',Icon:<FaIcons.FaGoogle/>},
    {Type:'Contact',Title:'Téléphon1',Value:'+212695406152',Icon:<FaIcons.FaPhoneAlt/>},
    {Type:'ContactLink',Title:'WhatsApp',Value:'+212767156337',Icon:<FaIcons.FaWhatsapp/>},
    {Type:'ContactLink',Title:'Email',Value:'yousseffarni98@gmail.com',Icon:<FaIcons.FaEnvelope/>},
    {Type:'ContactLink',Title:'Linkedin',Value:'linkedin.com/in/youssef-farni-9829971b5/',Icon:<FaIcons.FaLinkedin/>},
  ];

export{
  ProfileInfo,SkillsList
}