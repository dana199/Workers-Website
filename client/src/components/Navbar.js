import React,{useState,useEffect} from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import { useTranslation } from "react-i18next";


function Navbar() {
  const { t } = useTranslation();
    const [click,setClick] =useState(false);
    const handleClick = () =>setClick(!click);
    const closeMobileMenu = () =>setClick(false);
    const [button,setButton] = useState(true);

    const showButton = () =>{
        if(window.innerWidth <=960){
            setButton(false)
        } else{ setButton(true);
        }
    };
    useEffect(() => {
        showButton();
      }, []);
    window.addEventListener('resize', showButton);
    return (
        <>
      <nav className="navbar">
         <div className="navbar-container">
      <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>    
     {t('Home Services')}<i className="fas fa-tools"></i> 
          </Link>
          <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
         </div>
         <ul className={click ? 'nav-menu active' : 'nav-menu'}>
             <li className='nav-item'>
                 <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                   {t('Home')}
                 </Link>
             </li>
             <li className='nav-item'>
                 <Link to='/About' className='nav-links' onClick={closeMobileMenu}>
                   { t('About') }
                 </Link>
             </li>
             <li className='nav-item'>
                 <Link to='/Contact' className='nav-links' onClick={closeMobileMenu}>
                   { t('Contact') }
                 </Link>
             </li>
          
             <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
          
            </li>
        
         </ul>
         {button && <Button buttonStyle='btn--outline'>SIGN UP  </Button>}
      </div>
      </nav>
        </>
    );
}

export default Navbar
