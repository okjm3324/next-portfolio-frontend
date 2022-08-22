import axios from "axios"
 //全てのpostsのオブジェクト配列（id:title)をparamsとして返す
 //getStaticPathsで使用する
 export function getPostsPaths (posts) {
 
  const pathList = posts.map((post) => {
    return  {
      params:{
        id: post,
      }
    }
  })

  return pathList
   
 }

 //指定のidのpostオブジェクトを返す
 export function getPostData (posts,id) {
   const tarPost = posts.find((post)=>post.id === id)
   return {
     tarPost
   }
}

export const fetchData = async ()=>{
  try{
    const response = await axios.get("/posts")
    
    return response.data
  }catch(err){
    console.log(err)
  }
}
