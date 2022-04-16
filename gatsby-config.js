module.exports = {
  siteMetadata: {
    title: `lantian-website`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/src/posts`,
      },
    },

    `gatsby-plugin-mdx`,
    `gatsby-plugin-mantine`,
  ],
};
