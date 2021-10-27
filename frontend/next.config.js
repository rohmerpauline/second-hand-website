/** @type {import('next').NextConfig} */

module.exports = {
   reactStrictMode: true,
   async rewrites() {
      return [
         {
            source: '/api/login',
            destination: 'http://127.0.0.1:3333/api/login',
         },
         {
            source: '/api/register',
            destination: 'http://127.0.0.1:3333/api/register',
         },
      ];
   },
};
