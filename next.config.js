/** @type {import('next').NextConfig} */

module.exports = {
   reactStrictMode: true,
   env: {
      MYSQL_HOST: '127.0.0.1',
      MYSQL_PORT: '3306',
      MYSQL_DATABASE: 'secondhandwebapp',
      MYSQL_USER: 'root',
      MYSQL_PASSWORD: '',
   },
};
