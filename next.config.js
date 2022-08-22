/** @type {import('next').NextConfig} */
/**const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig**/

module.exports = () => {

  const rewrites = () =>{
    return [
      {
        source: "/posts",
        destination: "http://localhost:5000/api/posts",
      }
    ]
  }
  return {rewrites}
}

//getStaticPropsのJSONファイルのシリアライズのため
const { withSuperjson } = require('next-superjson')

module.exports = withSuperjson()({
  reactStrictMode: true,
})
