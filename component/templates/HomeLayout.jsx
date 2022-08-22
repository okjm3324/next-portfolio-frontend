
import Footer from '../molcules/footer/Footer'
import Header from '../molcules/header/Header'
import styles from "./HomeLayout.module.css"


import MediaQuery from "react-responsive";
import Head from 'next/head';
import MobileHeader from '../molcules/mobileHeader/MobileHeader';

const HomeLayout = ({children}) => {
  return (
    <div>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
   
    <div className={styles['home-layout']}>
    
    
    <Header/>

      <div className={styles['works-container']}>
      {children}
      
      </div>
      <Footer className={styles.homeFooter} />
    </div>
    </div>
  )
}

export default HomeLayout
