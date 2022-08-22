import { slide as Menu } from 'react-burger-menu'
import Link from 'next/link'
import styles from './BurgerMenuBtn.module.css'
import { HamburgerIcon, ResumeLogo } from '../Icons/Icons'

export const Links = () => {
  return(
    <div>
    <Link href="/"><a className='font-bold p-4'>Works</a></Link>
    <Link href="/about/About"><a className='font-bold p-4'>About</a></Link>
    <Link href="/about/About"><a className='font-bold p-4'>contact</a></Link>
    </div>
    
  )
}


export const BurgerMenuBtn = (props) => {
  return (
    <div  className='relative p-2'>
    <Menu right customBurgerIcon={ <ResumeLogo /> } width={'auto'} className='left-0 top-12' >
        <Links />
    </Menu>

    </div>
  )
}
