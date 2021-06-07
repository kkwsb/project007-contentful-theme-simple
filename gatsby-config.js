// TO DO:  Figure out how to use Preview API access token in develop and Delivery API access token in build.
const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } = process.env

if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_ACCESS_TOKEN) {
  throw new Error(
    "Contentful spaceId and the access token need to be provided."
  )
}

module.exports = {
    siteMetadata: {
        title: 'Quick Start',
        menuLinks:[
            {
                name:'Home',
                link:'/',
            },
            {
                name:'Blog',
                link:'/blog/',
            },
            {
                name:'Contact',
                link:'/contact/',
            },
        ],
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages`,
            },
        },
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: CONTENTFUL_SPACE_ID,
                accessToken: CONTENTFUL_ACCESS_TOKEN,
                downloadLocal: false,
                forceFullSync: true,
            },
        },
		`gatsby-transformer-remark`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-postcss`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-image`,
    ]
};