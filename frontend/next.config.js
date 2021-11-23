/** @type {import('next').NextConfig} */

/* module.exports = {
   reactStrictMode: true,
   env: {
      MYSQL_HOST: '127.0.0.1',
      MYSQL_PORT: '3306',
      MYSQL_DATABASE: 'secondhandwebapp',
      MYSQL_USER: 'root',
      MYSQL_PASSWORD: '',
   },
}; */

module.exports = {
   reactStrictMode: true,
   async rewrites() {
      return [
         {
            source: '/user/:slug',
            destination: 'http://127.0.0.1:3333/user/:slug',
         },
         {
            source: '/ads/:slug',
            destination: 'http://127.0.0.1:3333/ads/:slug',
         },
      ];
   },
};
