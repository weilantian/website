exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            path
            type
         
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic("Error while running GraphQL query.", result.errors);
  }

  const pages = result.data.allMdx.nodes;


    pages.forEach((page) => {
        const templetePaths = [{
            type: "article",
            path: "./src/templates/post.js"
        }]

        actions.createPage({
            path: page.frontmatter.path,
            component: require.resolve(templetePaths.find(item => item.type === page.frontmatter.type).path),
            context: {
                pathSlug: page.frontmatter.path,
            },
        });


    });
};
