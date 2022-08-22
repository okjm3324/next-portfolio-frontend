

import { GitLogo,TwitterLogo,LinkedinLogo,MailLogo, ResumeLogo } from '../../atoms/Icons/Icons'
import styles from"./MobileHeader.module.css"
import Link from "next/link"
import Head from "next/head"


import {BurgerMenuBtn} from '../../atoms/burgerMenuBtn/BurgerMenuBtn';





const MobileHeader = () => {
  return (


 
    <div className={styles.header} id="outer-container">
   

    <div className={styles['header-wrapper']}>
      <div className={styles.burgerIcon}>
      <BurgerMenuBtn />
      </div>
    
    <span className={styles['header-title']}>PORTFOLIO</span>
    
     
    <div className={styles['menu-items']}>  
  
  
  </div>

      <div className={styles['snslogo-items']}>
        
        <div  className={styles['snslogo-item']}>
         <a href='https://github.com/okjm3324' target="_blank" rel="noopener noreferrer">
           <GitLogo  />
           </a>
        </div>
        <div  className={styles['snslogo-item']}>
          <a href='https://twitter.com/hO0BjMfQOjrl0in' target="_blank" rel="noopener noreferrer">
          <TwitterLogo  />
          </a>
        </div>
        <div  className={styles['snslogo-item']}>
           <LinkedinLogo   />
        </div>
        <div  className={styles['snslogo-item']}>
          <ResumeLogo />
        </div>
        <div  className={styles['snslogo-item']}>
           <MailLogo  />
        </div>
       
        
      
        
      </div>
      <hr  className={styles['anim-hr']}size="20"/>
    
    
    </div>
    
    </div>
      

  )
}

export default MobileHeader;