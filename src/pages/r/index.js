import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Footer from "../../components/footer"
import Seo from "../../components/seo"

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Reflections">
      <Seo title="Reflections" />
      <div className="container-fluid">
        <div className="row justify-content-center g-3 align-items-center">
          {data.allMdx.nodes.map(node => (
            <div className="col-4 col-sm-3">
              <Link className="flyer-link" to={`/r/${node.slug}`}>
                <GatsbyImage image={getImage(node.frontmatter.hero_image)} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/content/r/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
        slug
        excerpt
      }
    }
  }
`

export default BlogPage
