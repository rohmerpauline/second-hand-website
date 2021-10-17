/** @type {import('next').NextConfig} */

module.exports = {
   reactStrictMode: true,
   async rewrites() {
      return !process.env.NODE_ENV === 'production'
         ? [
              {
                 source: '/api/:slug',
                 destination: 'http://127.0.0.1:3333/api/register',
              },
           ]
         : [];
   },
};
