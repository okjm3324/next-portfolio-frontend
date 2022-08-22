

import { GitLogo,TwitterLogo,LinkedinLogo,MailLogo, ResumeLogo } from '../../atoms/Icons/Icons'
import styles from"./Header.module.css"
import Link from "next/link"
import {CgCloseO, CgMenuRound} from "react-icons/cg"

import { useState } from 'react'




const Header = () => {
  //state for hamburger
  const [isOpen,setIsOpen] = useState(false)
  const hamburgerIcon =  <CgMenuRound className={styles.hamburgerIcon} size="2.4rem" color="black" onClick={()=>setIsOpen(!isOpen)}/>
  const closeIcon =  <CgCloseO className={styles.hamburgerIcon} size="2.4rem" color="black" onClick={()=>setIsOpen(!isOpen)}/>

  return (

    
    <div className={styles.header}>
    <div className={styles['header-wrapper']}>
   
    <span className={styles['header-title']}>PORTFOLIO</span>
    {isOpen ? closeIcon : hamburgerIcon}
    {isOpen && 
      <div className={styles['mobile-menu-items']}>  
          <div className={styles['mobile-menu-item']}>
            <Link href="/" >
            <span className={styles.menu}>works</span></Link>
          </div>
          <div className={styles['mobile-menu-item']}>
            <Link href="/about/About" >
            <span className={styles.menu}>about me</span>
            </Link>
          </div>
            <div className={styles['mobile-menu-item']}>
            <span className={styles.menu}>contact</span>
          </div>
      </div>
    }
    <div className={styles['menu-items']}>  
          <div className={styles['menu-item']}>
            <Link href="/" >
            <span className={styles.menu}>works</span></Link>
          </div>
          <div className={styles['menu-item']}>
            <Link href="/about/About" >
            <span className={styles.menu}>about me</span>
            </Link>
          </div>
            <div className={styles['menu-item']}>
            <Link href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=okjm.yuma@gmail.com">
             <a target="_blank" className={styles.menu}>contact</a>
            </Link>
          </div>
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
           <a target="_blank" href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=okjm.yuma@gmail.com"><MailLogo  /></a>
        </div>
        
      </div>
      <hr  className={styles['anim-hr']}size="20"/>
    
    
</div>
    
    </div>
      



  )
}

export default Header;