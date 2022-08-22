
import  Tag  from '../../component/atoms/tag/Tag'
import  Header  from '../../component/molcules/header/Header'
import styles from "./Work.module.css"
import Link from "next/link"
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { getPostsPaths } from '../../lib/post';
import Footer from "../../component/molcules/footer/Footer"


//SSGトライ


// //SSGの全てのパス設定
export async function getStaticPaths () {
    const res = await axios.get("http://localhost:5000/api/posts")
    
    const allPostsData = res.data
    const allFileId = allPostsData.map((post)=>{return post.id})
     const paths = getPostsPaths(allFileId)
  
   return {
     paths,
     fallback:false,
   }
 }

// //SSGのprops設定
 export async function getStaticProps ({params}){
   const res = await axios.get(`http://localhost:5000/api/posts/${params.id}`)
   const postData = JSON.parse(JSON.stringify(res.data));
   return {
    props : {
       postData
     }
   }
 }

//SSGトライ　ここまで

 //const Work = ({postData}) => {
  const Work = ({postData}) => {
  


//   // axtiosを使ったdetafetchパターン
//  const router = useRouter();
//   const [post,setPost] = useState({})
//   const [skills,setSkills] = useState([])

//   useEffect(()=>{
//     console.log(router.query.id)
//     const fetchArticle = async ()=>{
//       const article = await axios.get(`/posts`)
//       const posts = article.data
//       const tarPost = posts.find((post)=>{
//        return post.id === router.query.id
//       })
//       setPost(tarPost)
//       setSkills(tarPost.skills)
//     }

//     fetchArticle()
//     console.log(post)
//     console.log(skills)
//   },[])



  return (
    <div>

        <Header/>
    <div className={styles['detail-container']}>
        <div className={styles['work-thumbnail']}>
          <img className={styles['work-thumbnail-img']} src={postData.thumbnail}></img>
        </div>

        <div className={styles['work-title']}>
          <h1>{postData.title}</h1>
        </div>
        <div className={styles.skills}>
        <ul className={styles['skill-items']}>
       
         
          {postData.skills.map((skill)=>{
              return(
                <li key={skill} className={styles['skill-item']}> <Tag tagText={skill}/></li>
              )
          })}
        </ul>
      </div>
        <div className={styles['workdetail-description']}>
          <p>{postData.content}</p>
        </div>
          
          <div className='subtitle'><h1>How it works</h1></div>
        <div className={styles['content-images']}>
          <img className={styles['content-img']} src={postData.workImg ? postData.workImg : "" }></img>

        </div>
        
       <h1>the most difficult part</h1>
        <div className={styles['workdetail-description']}>
        <p>{postData.difficulty}</p>
        </div>
        
  
        
        <Link  href="/">
          <a className={styles['back-link']} >
          Back
          </a>
        </Link>
    </div>
    <Footer className={styles.footer}/>

    </div>
  )
}

export default Work
