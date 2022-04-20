import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import { Button } from "@mantine/core";
import Chart from "../components/chart";
import Layout from "../components/layout";

const shortcodes = { Chart };

const Page = ({ data: { mdx: post } }) => {
  const { title } = post.frontmatter;
  const { body } = post;
  return (
    <Layout>
      <div className=" mt-12 container px-12 mx-auto grid grid-cols-12">
        <div className=" col-span-9">
          <MDXProvider components={shortcodes}>
            <h1>{title}</h1>
            <Button>Cool btn</Button>
            <article className=" prose prose-slate">
              <MDXRenderer>{body}</MDXRenderer>
            </article>
          </MDXProvider>
        </div>
        <div className=" col-span-3">
          <h2>Table of contents</h2>
          <ul>
            {post.tableOfContents.items.map((item) => (
              <li key={item.url}>
                <a className=" text-gray-500" href={item.url}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
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
      tableOfContents
    }
  }
`;
