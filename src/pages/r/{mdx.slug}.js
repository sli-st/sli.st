import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import MarkdownWrapper from "../../components/markdownwrapper"

const BlogPost = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image)
  return (
    <div>
      <Layout to="/r" label="+ Reflections">
        <Seo title={data.mdx.frontmatter.title} />
        <MarkdownWrapper>
          <h1>{data.mdx.frontmatter.title}</h1>
          <p className="">{data.mdx.timeToRead} min read</p>
          <GatsbyImage image={image} />
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </MarkdownWrapper>
      </Layout>
    </div>
  )
}

export const query = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
      timeToRead
    }
  }
`

export default BlogPost
