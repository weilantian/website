import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Button } from "@mantine/core";

const Page = ({ data: { mdx: post } }) => {
  const { title } = post.frontmatter;
  const { body } = post;
  return (
    <div>
      <h1>{title}</h1>
      <Button>Cool btn</Button>
      <MDXRenderer>{body}</MDXRenderer>
    </div>
  );
};

export default Page;

export const query = graphql`
  query ($pathSlug: String!) {
    mdx(frontmatter: { path: { eq: $pathSlug } }) {
      frontmatter {
        title
        path
      }
      body
    }
  }
`;
