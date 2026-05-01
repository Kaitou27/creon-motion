/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://creonmotion.com',
  generateRobotsTxt: true,
  exclude: ['/thanks/*', '/api/*', '/feedback'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/thanks', '/api', '/feedback'],
      },
    ],
  },
};

