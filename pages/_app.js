import React,{ useEffect } from 'react';
import '../styles/globals.css'
import './Portfolio/Assets/css/style.css';
import './Portfolio/Assets/css/Animations.css';
import './Portfolio/Components/TaskBar_Style.css';
import './Portfolio/Components/MailForm_Style.css';
import './Portfolio/Components/All Windows/Window.css';
import './Portfolio/Assets/bootstrap/css/bootstrap.min.css';
import 'animate.css';

//import '../public/bootstrap.bundle.min.js';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    require('../public/bootstrap.bundle.min.js');
  }, [])
  
  return <Component {...pageProps} />
}

export default MyApp
