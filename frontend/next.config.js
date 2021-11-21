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
            source: '/user/login',
            destination: 'http://127.0.0.1:3333/user/login',
         },
         {
            source: '/user/register',
            destination: 'http://127.0.0.1:3333/user/register',
         },
      ];
   },
};
