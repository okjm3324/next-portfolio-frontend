/** @type {import('next').NextConfig} */
/**const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig**/



module.exports = () => {

  const rewrites = () =>{
    if (process.env.NODE_ENV === 'production'){
      return [
        {
          source: "/posts",
          destination: `${process.env.API_BASE_URL}/api/posts`
        }
      ]

    }else{
      console.log("開発環境です")
      return [
        {
          source: "/posts",
          destination: "http://localhost:5000/api/posts",
        }
      ]
    }
    
  }
  return {rewrites}
}

//getStaticPropsのJSONファイルのシリアライズのため
const { withSuperjson } = require('next-superjson')

module.exports = withSuperjson()({
  reactStrictMode: true,
})
