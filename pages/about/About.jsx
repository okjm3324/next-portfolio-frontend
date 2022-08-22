
import Link from 'next/link'
import Footer from '../../component/molcules/footer/Footer'
import Header  from '../../component/molcules/header/Header'

import styles from "./About.module.css"

const  About = () => {
  return (
    <div className={styles.about}>
    <Header />

    <div className={styles['about-container']}>
      <div className={styles['about-item']}> 
      <h1>About Me</h1>
      <br />
      <h2>A SoftwareDevelopper</h2>
      <br />
      <p>Hello there.</p>
      <p>Thank you for checking this page.</p>
      <p>I&apos;m yuma okajima.
      I develop apps with JavaScript, React and Next.js.</p>
      <p>Now I focus on learning frontend engineerings.</p>
      <br />
      <h2>Hobby</h2>
      <br/>
      <ul className={styles['about-ul']}>
      
        
        <li>
          <p>I play the guitar , tried to play the bass ,piano and make music with my laptop.
          I learned drawing, english and Korean.</p>
         <p>I like learning something new for me.(piano was a bit of tough though)</p>
         <p>So I’m gonna keep trying and learning new stuffs through my all life.</p>
         <p>And I’m pretty sure that  this kind of attitude helps software development.</p>
         
        </li>
     
      </ul>
     </div>
     <Link  href="/">
     <a className={styles['back-link']} >
     Back
     </a>
   </Link>
    
    </div>
 
    
    <Footer />
    </div>
    
    
   
  )
}
export default About
