

import { GitLogo,TwitterLogo,LinkedinLogo,MailLogo, ResumeLogo } from '../../atoms/Icons/Icons'
import styles from"./Header.module.css"
import Link from "next/link"




const Header = () => {
  return (

    
    <div className={styles.header}>
    <div className={styles['header-wrapper']}>
    <span className={styles['header-title']}>PORTFOLIO</span>
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
          <span className={styles.menu}>contact</span>
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
           <MailLogo  />
        </div>
        
      </div>
      <hr  className={styles['anim-hr']}size="20"/>
    
    
</div>
    
    </div>
      



  )
}

export default Header;