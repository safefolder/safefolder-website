const path = require('path')

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'dev'}`
})

const isProd = process.env.NODE_ENV === 'production'

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Safefolder - Secure Your Data Your Way`,
    siteUrl: `https://safefolder.app`,
    description: 'Welcome to a new data platform that allows to secure your data your way. It\'s your data and you control id.',
    author: "Jorge Alegre Vilches",
    twitterUsername: "jalegre39",
    image: "/sf_banner.png"
  },
  plugins: [
    'gatsby-plugin-robots-txt',
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image", 
    "gatsby-plugin-sitemap", 
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-highlight-code`
          },
        ],
      },
    },
    "gatsby-plugin-sharp", 
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Safefolder`,
        short_name: `Safefolder`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: 'src/images/icon.png',
      },
    },
    "gatsby-transformer-sharp", 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }, 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "posts",
        "path": "./src/blog/"
      },
      __key: "posts"
    },
    {
    resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
        {
          resolve: "gatsby-remark-embed-youtube",
          options: {
            width: 800,
            height: 400
          }
        }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        mdxOptions: {
          remarkPlugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 1035,
                sizeByPixelDensity: true,
              },
            },
          ],
        }
      },
    },
    'gatsby-plugin-netlify'
  ]
};