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
          source: `${process.env.API_BASE_URL}/api/posts`,
          destination: "http://localhost:5000/api/posts",
        }
      ]

    }else{
      return [
        {
          source: "/posts",
          destination: "http://localhost:5000/api/posts",
        }
      ]
    }
    
  }
  //return {rewrites}
}

//getStaticPropsのJSONファイルのシリアライズのため
const { withSuperjson } = require('next-superjson')

module.exports = withSuperjson()({
  reactStrictMode: true,
})
