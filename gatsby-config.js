module.exports = {
    siteMetadata: {
        title: `lantian-website`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "articles",
                path: `${__dirname}/content/articles`,
            },
        },

        `gatsby-plugin-sharp`,
        'gatsby-plugin-image',
        'gatsby-transformer-sharp',
        'gatsby-plugin-postcss',
        `gatsby-plugin-mantine`,
        `gatsby-plugin-react-helmet`,
        `gatsby-remark-images`,
        `gatsby-plugin-netlify-cms`,
        `gatsby-plugin-netlify`,
        {
            resolve: 'gatsby-plugin-mdx',
            options: {
                extensions: [`.mdx`, `.md`],
                gatsbyRemarkPlugins: [`gatsby-remark-images`]
            }
        }
    ],
};
