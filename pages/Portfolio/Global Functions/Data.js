import { Projects } from '../../../public/images';

const CountryList=[
    {DataCountrycode:"DZ"    ,value:"213"     ,Name:'Algeria'},
    {DataCountrycode:"AD"    ,value:"376"     ,Name:'Andorra'},
    {DataCountrycode:"AO"    ,value:"244"     ,Name:'Angola'},
    {DataCountrycode:"AI"    ,value:"1264"    ,Name:'Anguilla'},
    {DataCountrycode:"AG"    ,value:"1268"    ,Name:'AntiguaBarbuda'},
    {DataCountrycode:"AR"    ,value:"54"      ,Name:'Argentina'},
    {DataCountrycode:"AM"    ,value:"374"     ,Name:'Armenia'},
    {DataCountrycode:"AW"    ,value:"297"     ,Name:'Aruba'},
    {DataCountrycode:"AU"    ,value:"61"      ,Name:'Australia'},
    {DataCountrycode:"AT"    ,value:"43"      ,Name:'Austria'},
    {DataCountrycode:"AZ"    ,value:"994"     ,Name:'Azerbaijan'},
    {DataCountrycode:"BS"    ,value:"1242"    ,Name:'Bahamas'},
    {DataCountrycode:"BH"    ,value:"973"     ,Name:'Bahrain'},
    {DataCountrycode:"BD"    ,value:"880"     ,Name:'Bangladesh'},
    {DataCountrycode:"BB"    ,value:"1246"    ,Name:'Barbados'},
    {DataCountrycode:"BY"    ,value:"375"     ,Name:'Belarus'},
    {DataCountrycode:"BE"    ,value:"32"      ,Name:'Belgium'},
    {DataCountrycode:"BZ"    ,value:"501"     ,Name:'Belize'},
    {DataCountrycode:"BJ"    ,value:"229"     ,Name:'Benin'},
    {DataCountrycode:"BM"    ,value:"1441"    ,Name:'Bermuda'},
    {DataCountrycode:"BT"    ,value:"975"     ,Name:'Bhutan'},
    {DataCountrycode:"BO"    ,value:"591"     ,Name:'Bolivia'},
    {DataCountrycode:"BA"    ,value:"387"     ,Name:'BosniaHerzegovina'},
    {DataCountrycode:"BW"    ,value:"267"     ,Name:'Botswana'},
    {DataCountrycode:"BR"    ,value:"55"      ,Name:'Brazil'},
    {DataCountrycode:"BN"    ,value:"673"     ,Name:'Brunei'},
    {DataCountrycode:"BG"    ,value:"359"     ,Name:'Bulgaria'},
    {DataCountrycode:"BF"    ,value:"226"     ,Name:'BurkinaFaso'},
    {DataCountrycode:"BI"    ,value:"257"     ,Name:'Burundi'},
    {DataCountrycode:"KH"    ,value:"855"     ,Name:'Cambodia'},
    {DataCountrycode:"CM"    ,value:"237"     ,Name:'Cameroon'},
    {DataCountrycode:"CA"    ,value:"1"       ,Name:'Canada'},
    {DataCountrycode:"CV"    ,value:"238"     ,Name:'CapeVerdeIslands'},
    {DataCountrycode:"KY"    ,value:"1345"    ,Name:'CaymanIslands'},
    {DataCountrycode:"CF"    ,value:"236"     ,Name:'CentralAfricanRepublic'},
    {DataCountrycode:"CL"    ,value:"56"      ,Name:'Chile'},
    {DataCountrycode:"CN"    ,value:"86"      ,Name:'China'},
    {DataCountrycode:"CO"    ,value:"57"      ,Name:'Colombia'},
    {DataCountrycode:"KM"    ,value:"269"     ,Name:'Comoros'},
    {DataCountrycode:"CG"    ,value:"242"     ,Name:'Congo'},
    {DataCountrycode:"CK"    ,value:"682"     ,Name:'CookIslands'},
    {DataCountrycode:"CR"    ,value:"506"     ,Name:'CostaRica'},
    {DataCountrycode:"HR"    ,value:"385"     ,Name:'Croatia'},
    {DataCountrycode:"CU"    ,value:"53"      ,Name:'Cuba'},
    {DataCountrycode:"CY"    ,value:"90392"   ,Name:'CyprusNorth'},
    {DataCountrycode:"CY"    ,value:"357"     ,Name:'CyprusSouth'},
    {DataCountrycode:"CZ"    ,value:"42"      ,Name:'CzechRepublic'},
    {DataCountrycode:"DK"    ,value:"45"      ,Name:'Denmark'},
    {DataCountrycode:"DJ"    ,value:"253"     ,Name:'Djibouti'},
    {DataCountrycode:"DM"    ,value:"1809"    ,Name:'Dominica'},
    {DataCountrycode:"DO"    ,value:"1809"    ,Name:'DominicanRepublic'},
    {DataCountrycode:"EC"    ,value:"593"     ,Name:'Ecuador'},
    {DataCountrycode:"EG"    ,value:"20"      ,Name:'Egypt'},
    {DataCountrycode:"SV"    ,value:"503"     ,Name:'ElSalvador'},
    {DataCountrycode:"GQ"    ,value:"240"     ,Name:'EquatorialGuinea'},
    {DataCountrycode:"ER"    ,value:"291"     ,Name:'Eritrea'},
    {DataCountrycode:"EE"    ,value:"372"     ,Name:'Estonia'},
    {DataCountrycode:"ET"    ,value:"251"     ,Name:'Ethiopia'},
    {DataCountrycode:"FK"    ,value:"500"     ,Name:'FalklandIslands'},
    {DataCountrycode:"FO"    ,value:"298"     ,Name:'FaroeIslands'},
    {DataCountrycode:"FJ"    ,value:"679"     ,Name:'Fiji'},
    {DataCountrycode:"FI"    ,value:"358"     ,Name:'Finland'},
    {DataCountrycode:"FR"    ,value:"33"      ,Name:'France'},
    {DataCountrycode:"GF"    ,value:"594"     ,Name:'FrenchGuiana'},
    {DataCountrycode:"PF"    ,value:"689"     ,Name:'FrenchPolynesia'},
    {DataCountrycode:"GA"    ,value:"241"     ,Name:'Gabon'},
    {DataCountrycode:"GM"    ,value:"220"     ,Name:'Gambia'},
    {DataCountrycode:"GE"    ,value:"7880"    ,Name:'Georgia'},
    {DataCountrycode:"DE"    ,value:"49"      ,Name:'Germany'},
    {DataCountrycode:"GH"    ,value:"233"     ,Name:'Ghana'},
    {DataCountrycode:"GI"    ,value:"350"     ,Name:'Gibraltar'},
    {DataCountrycode:"GR"    ,value:"30"      ,Name:'Greece'},
    {DataCountrycode:"GL"    ,value:"299"     ,Name:'Greenland'},
    {DataCountrycode:"GD"    ,value:"1473"    ,Name:'Grenada'},
    {DataCountrycode:"GP"    ,value:"590"     ,Name:'Guadeloupe'},
    {DataCountrycode:"GU"    ,value:"671"     ,Name:'Guam'},
    {DataCountrycode:"GT"    ,value:"502"     ,Name:'Guatemala'},
    {DataCountrycode:"GN"    ,value:"224"     ,Name:'Guinea'},
    {DataCountrycode:"GW"    ,value:"245"     ,Name:'Guinea-Bissau'},
    {DataCountrycode:"GY"    ,value:"592"     ,Name:'Guyana'},
    {DataCountrycode:"HT"    ,value:"509"     ,Name:'Haiti'},
    {DataCountrycode:"HN"    ,value:"504"     ,Name:'Honduras'},
    {DataCountrycode:"HK"    ,value:"852"     ,Name:'HongKong'},
    {DataCountrycode:"HU"    ,value:"36"      ,Name:'Hungary'},
    {DataCountrycode:"IS"    ,value:"354"     ,Name:'Iceland'},
    {DataCountrycode:"IN"    ,value:"91"      ,Name:'India'},
    {DataCountrycode:"ID"    ,value:"62"      ,Name:'Indonesia'},
    {DataCountrycode:"IR"    ,value:"98"      ,Name:'Iran'},
    {DataCountrycode:"IQ"    ,value:"964"     ,Name:'Iraq'},
    {DataCountrycode:"IE"    ,value:"353"     ,Name:'Ireland'},
    {DataCountrycode:"IL"    ,value:"972"     ,Name:'Israel'},
    {DataCountrycode:"IT"    ,value:"39"      ,Name:'Italy'},
    {DataCountrycode:"JM"    ,value:"1876"    ,Name:'Jamaica'},
    {DataCountrycode:"JP"    ,value:"81"      ,Name:'Japan'},
    {DataCountrycode:"JO"    ,value:"962"     ,Name:'Jordan'},
    {DataCountrycode:"KZ"    ,value:"7"       ,Name:'Kazakhstan'},
    {DataCountrycode:"KE"    ,value:"254"     ,Name:'Kenya'},
    {DataCountrycode:"KI"    ,value:"686"     ,Name:'Kiribati'},
    {DataCountrycode:"KP"    ,value:"850"     ,Name:'KoreaNorth'},
    {DataCountrycode:"KR"    ,value:"82"      ,Name:'KoreaSouth'},
    {DataCountrycode:"KW"    ,value:"965"     ,Name:'Kuwait'},
    {DataCountrycode:"KG"    ,value:"996"     ,Name:'Kyrgyzstan'},
    {DataCountrycode:"LA"    ,value:"856"     ,Name:'Laos'},
    {DataCountrycode:"LV"    ,value:"371"     ,Name:'Latvia'},
    {DataCountrycode:"LB"    ,value:"961"     ,Name:'Lebanon'},
    {DataCountrycode:"LS"    ,value:"266"     ,Name:'Lesotho'},
    {DataCountrycode:"LR"    ,value:"231"     ,Name:'Liberia'},
    {DataCountrycode:"LY"    ,value:"218"     ,Name:'Libya'},
    {DataCountrycode:"LI"    ,value:"417"     ,Name:'Liechtenstein'},
    {DataCountrycode:"LT"    ,value:"370"     ,Name:'Lithuania'},
    {DataCountrycode:"LU"    ,value:"352"     ,Name:'Luxembourg'},
    {DataCountrycode:"MO"    ,value:"853"     ,Name:'Macao'},
    {DataCountrycode:"MK"    ,value:"389"     ,Name:'Macedonia'},
    {DataCountrycode:"MG"    ,value:"261"     ,Name:'Madagascar'},
    {DataCountrycode:"MW"    ,value:"265"     ,Name:'Malawi'},
    {DataCountrycode:"MY"    ,value:"60"      ,Name:'Malaysia'},
    {DataCountrycode:"MV"    ,value:"960"     ,Name:'Maldives'},
    {DataCountrycode:"ML"    ,value:"223"     ,Name:'Mali'},
    {DataCountrycode:"MT"    ,value:"356"     ,Name:'Malta'},
    {DataCountrycode:"MH"    ,value:"692"     ,Name:'MarshallIslands'},
    {DataCountrycode:"MQ"    ,value:"596"     ,Name:'Martinique'},
    {DataCountrycode:"MR"    ,value:"222"     ,Name:'Mauritania'},
    {DataCountrycode:"YT"    ,value:"269"     ,Name:'Mayotte'},
    {DataCountrycode:"MX"    ,value:"52"      ,Name:'Mexico'},
    {DataCountrycode:"FM"    ,value:"691"     ,Name:'Micronesia'},
    {DataCountrycode:"MD"    ,value:"373"     ,Name:'Moldova'},
    {DataCountrycode:"MC"    ,value:"377"     ,Name:'Monaco'},
    {DataCountrycode:"MN"    ,value:"976"     ,Name:'Mongolia'},
    {DataCountrycode:"MS"    ,value:"1664"    ,Name:'Montserrat'},
    {DataCountrycode:"MA"    ,value:"212"     ,Name:'Morocco'},
    {DataCountrycode:"MZ"    ,value:"258"     ,Name:'Mozambique'},
    {DataCountrycode:"MN"    ,value:"95"      ,Name:'Myanmar'},
    {DataCountrycode:"NA"    ,value:"264"     ,Name:'Namibia'},
    {DataCountrycode:"NR"    ,value:"674"     ,Name:'Nauru'},
    {DataCountrycode:"NP"    ,value:"977"     ,Name:'Nepal'},
    {DataCountrycode:"NL"    ,value:"31"      ,Name:'Netherlands'},
    {DataCountrycode:"NC"    ,value:"687"     ,Name:'NewCaledonia'},
    {DataCountrycode:"NZ"    ,value:"64"      ,Name:'NewZealand'},
    {DataCountrycode:"NI"    ,value:"505"     ,Name:'Nicaragua'},
    {DataCountrycode:"NE"    ,value:"227"     ,Name:'Niger'},
    {DataCountrycode:"NG"    ,value:"234"     ,Name:'Nigeria'},
    {DataCountrycode:"NU"    ,value:"683"     ,Name:'Niue'},
    {DataCountrycode:"NF"    ,value:"672"     ,Name:'NorfolkIslands'},
    {DataCountrycode:"NP"    ,value:"670"     ,Name:'NorthernMarianas'},
    {DataCountrycode:"NO"    ,value:"47"      ,Name:'Norway'},
    {DataCountrycode:"OM"    ,value:"968"     ,Name:'Oman'},
    {DataCountrycode:"PW"    ,value:"680"     ,Name:'Palau'},
    {DataCountrycode:"PA"    ,value:"507"     ,Name:'Panama'},
    {DataCountrycode:"PG"    ,value:"675"     ,Name:'PapuaNewGuinea'},
    {DataCountrycode:"PY"    ,value:"595"     ,Name:'Paraguay'},
    {DataCountrycode:"PE"    ,value:"51"      ,Name:'Peru'},
    {DataCountrycode:"PH"    ,value:"63"      ,Name:'Philippines'},
    {DataCountrycode:"PL"    ,value:"48"      ,Name:'Poland'},
    {DataCountrycode:"PT"    ,value:"351"     ,Name:'Portugal'},
    {DataCountrycode:"PR"    ,value:"1787"    ,Name:'PuertoRico'},
    {DataCountrycode:"QA"    ,value:"974"     ,Name:'Qatar'},
    {DataCountrycode:"RE"    ,value:"262"     ,Name:'Reunion'},
    {DataCountrycode:"RO"    ,value:"40"      ,Name:'Romania'},
    {DataCountrycode:"RU"    ,value:"7"       ,Name:'Russia'},
    {DataCountrycode:"RW"    ,value:"250"     ,Name:'Rwanda'},
    {DataCountrycode:"SM"    ,value:"378"     ,Name:'SanMarino'},
    {DataCountrycode:"ST"    ,value:"239"     ,Name:'SaoTome&amp;Principe'},
    {DataCountrycode:"SA"    ,value:"966"     ,Name:'SaudiArabia'},
    {DataCountrycode:"SN"    ,value:"221"     ,Name:'Senegal'},
    {DataCountrycode:"CS"    ,value:"381"     ,Name:'Serbia'},
    {DataCountrycode:"SC"    ,value:"248"     ,Name:'Seychelles'},
    {DataCountrycode:"SL"    ,value:"232"     ,Name:'SierraLeone'},
    {DataCountrycode:"SG"    ,value:"65"      ,Name:'Singapore'},
    {DataCountrycode:"SK"    ,value:"421"     ,Name:'SlovakRepublic'},
    {DataCountrycode:"SI"    ,value:"386"     ,Name:'Slovenia'},
    {DataCountrycode:"SB"    ,value:"677"     ,Name:'SolomonIslands'},
    {DataCountrycode:"SO"    ,value:"252"     ,Name:'Somalia'},
    {DataCountrycode:"ZA"    ,value:"27"      ,Name:'SouthAfrica'},
    {DataCountrycode:"ES"    ,value:"34"      ,Name:'Spain'},
    {DataCountrycode:"LK"    ,value:"94"      ,Name:'SriLanka'},
    {DataCountrycode:"SH"    ,value:"290"     ,Name:'St.Helena'},
    {DataCountrycode:"KN"    ,value:"1869"    ,Name:'St.Kitts'},
    {DataCountrycode:"SC"    ,value:"1758"    ,Name:'St.Lucia'},
    {DataCountrycode:"SD"    ,value:"249"     ,Name:'Sudan'},
    {DataCountrycode:"SR"    ,value:"597"     ,Name:'Suriname'},
    {DataCountrycode:"SZ"    ,value:"268"     ,Name:'Swaziland'},
    {DataCountrycode:"SE"    ,value:"46"      ,Name:'Sweden'},
    {DataCountrycode:"CH"    ,value:"41"      ,Name:'Switzerland'},
    {DataCountrycode:"SI"    ,value:"963"     ,Name:'Syria'},
    {DataCountrycode:"TW"    ,value:"886"     ,Name:'Taiwan'},
    {DataCountrycode:"TJ"    ,value:"7"       ,Name:'Tajikstan'},
    {DataCountrycode:"TH"    ,value:"66"      ,Name:'Thailand'},
    {DataCountrycode:"TG"    ,value:"228"     ,Name:'Togo'},
    {DataCountrycode:"TO"    ,value:"676"     ,Name:'Tonga'},
    {DataCountrycode:"TT"    ,value:"1868"    ,Name:'Trinidad&amp;Tobago'},
    {DataCountrycode:"TN"    ,value:"216"     ,Name:'Tunisia'},
    {DataCountrycode:"TR"    ,value:"90"      ,Name:'Turkey'},
    {DataCountrycode:"TM"    ,value:"7"       ,Name:'Turkmenistan'},
    {DataCountrycode:"TM"    ,value:"993"     ,Name:'Turkmenistan'},
    {DataCountrycode:"TC"    ,value:"1649"    ,Name:'Turks&amp;CaicosIslands'},
    {DataCountrycode:"TV"    ,value:"688"     ,Name:'Tuvalu'},
    {DataCountrycode:"UG"    ,value:"256"     ,Name:'Uganda'},
    {DataCountrycode:"GB"    ,value:"44"      ,Name:'UK'},
    {DataCountrycode:"UA"    ,value:"380"     ,Name:'Ukraine'},
    {DataCountrycode:"AE"    ,value:"971"     ,Name:'UnitedArabEmirates'},
    {DataCountrycode:"UY"    ,value:"598"     ,Name:'Uruguay'},
    {DataCountrycode:"US"    ,value:"1"       ,Name:'USA'},
    {DataCountrycode:"UZ"    ,value:"7"       ,Name:'Uzbekistan'},
    {DataCountrycode:"VU"    ,value:"678"     ,Name:'Vanuatu'},
    {DataCountrycode:"VA"    ,value:"379"     ,Name:'VaticanCity'},
    {DataCountrycode:"VE"    ,value:"58"      ,Name:'Venezuela'},
    {DataCountrycode:"VN"    ,value:"84"      ,Name:'Vietnam'},
    {DataCountrycode:"VG"    ,value:"84"      ,Name:'VirginIslands-British'},
    {DataCountrycode:"VI"    ,value:"84"      ,Name:'VirginIslands-US'},
    {DataCountrycode:"WF"    ,value:"681"     ,Name:'Wallis Futuna'},
    {DataCountrycode:"YE"    ,value:"969"     ,Name:'Yemen'},
    {DataCountrycode:"YE"    ,value:"967"     ,Name:'Yemen'},
    {DataCountrycode:"ZM"    ,value:"260"     ,Name:'Zambia'},
    {DataCountrycode:"ZW"    ,value:"263"     ,Name:'Zimbabwe'},
  ];

  
  
  
const ProjectsTaps = [
    {
        Title: 'Web',
        Key:'web',
        WindowTitle: 'Web Developpement Projects',
        projects:[
            {Title:'Youssef Farni Déveloper Portfolio',Image:Projects.WebApps.Portfolio,Technologies:['HTML', 'CSS', 'Next JS', 'Bootstrap','Jquery UI'],Link:'',Link:'https://',version:2,DateCreation:'11/10/2022'},
            {Title:'Netflix Web Application Clone',Image:Projects.WebApps.NetflixSite,Technologies:['HTML', 'CSS', 'Json', 'Bootstrap'],Link:'https://',version:1.0,DateCreation:'11/10/2022'},
            {Title:'Hummain Resources Management App',Image:Projects.WebApps.HR_Management_App,Technologies:['HTML', 'CSS', 'React JS','Laravel' ,'Bootstrap','Material UI'],Link:'https://',version:1.0,DateCreation:'11/10/2022'},
            {Title:'E-commerce Web site',Image:Projects.WebApps.EcommerceSite,Technologies:['HTML', 'CSS', 'Javascript','PHP', 'Bootstrap'],Link:'https://',version:1.0,DateCreation:'11/10/2022'},
        ],
    },
    {
        Title: 'Apps',
        Key:'apps',
        WindowTitle: 'Andorid Apps Projects',
        projects:[
            {Title:'How to Pray 5 Prayers',Image:Projects.Apps.PrayerApp,Technologies:['Game Maker Studio', 'GML'],Link:'https://',version:1.0,DateCreation:'11/10/2022'},
            {Title:'Netflix App',Image:Projects.Apps.NetflixApp,Technologies:['HTML', 'CSS', 'Javascript', 'Bootstrap'],Link:'https://',version:1.0,DateCreation:'11/10/2022'}, 
            {Title:'Quiz App',Image:Projects.Apps.QuizApp,Technologies:['React Native CLI', 'Javascript', 'CSS', 'JSX'],Link:'https://',version:1.0,DateCreation:'11/10/2022'},
        ]
    },
    {
        Title: 'Games',
        Key:'games',
        WindowTitle: 'Andorid & PC Games Projects',
        projects:[
            {Title:'Asrir Na3no Run',Image:Projects.Games.AsrirNa3noRun,Technologies:['Unity 3D', 'C#', 'Mixamo', 'Blender 3D'],Link:'https://',version:2.0,DateCreation:'11/10/2022'},
            {Title:'Match Masters 2',Image:Projects.Games.MatchMaster,Technologies:['React Native CLI', 'Javascript', 'CSS', 'JSX'],Link:'https://',version:1.0,DateCreation:'11/10/2022'},
        ]
    },
    {
        Title: 'Softwares',
        Key:'softwares',
        WindowTitle: 'Softwares For PC Projects',
        projects:[
            {Title:'How to Pray 5 Prayers',Image:Projects.Softwares.PrayerDisktopApp,Technologies:['Game Maker Studio', 'GML', 'Photoshop CC'],Link:'https://',version:2.0,DateCreation:'11/10/2022'},
            {Title:'Documents Management App',Image:Projects.Softwares.Gestion_Docs_App,Technologies:['Visual Studio', 'C#', 'Ado.Net'],Link:'https://',version:1.0,DateCreation:'11/10/2022'},
        ]
    },
    {
        Title: '3D Models',
        Key:'3d_models',
        WindowTitle: '3D Models Projects',
        projects:[
            {Title:'Ertugrul House 3D',Image:Projects.Models.Ertugrul_House,Technologies:['Blender 3D'],Link:'https://',version:1,DateCreation:'11/10/2022'},
            {Title:'Jet Man 3D',Image:Projects.Models.JetMan,Technologies:['Blender 3D'],Link:'https://',version:1,DateCreation:'11/10/2022'},
        ]
    },

];

const Experiences_Data = [
    {  
        Entreprise:'Sapilog',
        Image:'',
        Type:'Emploi',
        DateStart:'2022-03-14',
        DateEnd:'2022-03-14',
        Details:'dévélopement des nouvelle fonctionalités dans l\'application de gestion commerical en utilisant les language PHP ,HTML, CSS, Javacript,Jquery,Jquery UI',
        Tasks:[
            'Dévélopement des aplication web de gestion commerical',
            'Help disk , maintenence et installation des logicels et des system d\'exploitation',
        ]  
    }, 
    {  
       Entreprise:'Univers Acier',
       Image:'',
       Type:'internship',
       DateStart:'2022-03-14',
       DateEnd:'2022-03-14',
       Details:'Performed at the Univers Acier Entreprise from 05/29/2022 to now, sub-theme: “Creation of a Human Resources Management Web Application using this Languages : ( HTML , CSS , Boostrap 5 ,React JS , Material UI , Laravel 8 , Mysql...).',
       Tasks:[
           'Creation of a Human Resources Management Web Application using this Languages : ( HTML , CSS , Boostrap 5 ,React JS , Material UI , Laravel 8 , Mysql...).',
       ]  
    },
    {  
       Entreprise:'Tabtel.ma',
       Image:'',
       Type:'internship',
       DateStart:'2022-02-14',
       DateEnd:'2022-02-14',
       Details:'Performed at the Tabtel.ma Entreprise from 25/02/2022 to 30/04/2022, sub-theme: “Creation of a dynamic e-commerce website using this Languages :(HTML, CSS, JS , Boostrap 5 , php).',
       Tasks:[
           'Creation of a dynamic e-commerce website using this Languages : (HTML, CSS, JS , Boostrap 5 , php).',
       ]  
    },
    {  
       Entreprise:'La Cour d\'appelle Errachidia',
       Image:'',
       Type:'internship',
       DateStart:'2021-03-14',
       DateEnd:'2021-03-14',
       Details:'Performed at the Court of Appeal Errachidia from 05/29/2021 to 06/30/2021, sub-theme: “Development of the Client-Server application,Programming and designing of a Desktop application using C# , Ado.Net and SQL Server Database.',
       Tasks:[
           'Creation of a Client-Server application.',
           'Programming and designing of a Desktop application using C# , Ado.Net and SQL Server Database.',
       ]  
    }
];

export {
    CountryList,
    ProjectsTaps,
    Experiences_Data
}