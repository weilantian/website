import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const RecentArticles = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMdx(limit: 10, filter: { frontmatter: { type: { eq: "article" } } }) {
        nodes {
          id
          frontmatter {
            title
            summary
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `);
  return (
    <section className="container mt-28 px-12 mx-auto">
      <h3 className="text-xl">Recent Articles</h3>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {JSON.stringify(data.allMdx.nodes)}
      </div>
    </section>
  );
};

export default RecentArticles;
