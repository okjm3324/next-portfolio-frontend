import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import WorkCard from '../component/molcules/work/WorkCard'
import HomeLayout  from '../component/templates/HomeLayout'
import axios from "axios"
import { fetchData } from '../lib/post'
import MediaQuery from "react-responsive"


//SSG

export async function getStaticProps () {
  const response = await axios.get("http://localhost:5000/api/posts")
  const allPostsData=  response.data
  
  return {props:{allPostsData}}
}



export default function Home({allPostsData}) {



  


  return (
    <div >
      <Head>
        <title>okjm portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
     
      <HomeLayout>

      {allPostsData.map((post)=>{
        return(
          <WorkCard key={post.id} post={post} />
        )

      })}
      
      </HomeLayout>
     
      


     
    </div>
  )
}
  