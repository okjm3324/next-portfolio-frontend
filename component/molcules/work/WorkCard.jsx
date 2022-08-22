
import axios from 'axios'
import Link from 'next/link'
import { useEffect } from 'react'
import { CardGitLogo, GitLogo } from '../../atoms/Icons/Icons'
import styles from "./WorkCard.module.css"





const WorkCard = (props) => {
  const {post} = props


  return (
    
      <div className={styles['work-card']}>
      
        
        <div className={styles['thumbnail']}>
          <Link href={{pathname:`/work/${post.id}`}}>
           <img className={styles['thumbnail-img']} src={post.thumbnail}></img>
          </Link>
        </div>

        <div className={styles['work-description']}>
        <Link href={{pathname:`/work/${post.id}`}}>
          <div className={styles['work-title']}>
            <h1>{post.title}</h1>
          </div>
          </Link>
        <div className={styles.skillBox}>
          <div>
          {post.skills.map((skill,index)=>{
            return (index !== post.skills.length - 1 ? (<span key={skill}>{skill} / </span>):(<span key={skill}>{skill}</span>))})
          }
          
          </div>
          <Link href={post.gitpath} >
              <div className={styles['card-logo']}>
                  <CardGitLogo />
              </div>
          </Link>
        </div>
          
         <div className={styles['desc-text']}>
         <p>{post.summary}</p>
         
         </div>
         
        </div>
      
     
      
      
      </div>
 


  )
}

export default WorkCard
