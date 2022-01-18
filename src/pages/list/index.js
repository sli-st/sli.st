import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="List" to="/about/list" label="About">
      <Seo title="List" />
      <nav className="text-primary flex flex-col text-xl text-right md:px-40 lg:px-96 pt-10">
        {[
          "alexnde.r",
          "axchacon",
          "b_wxng",
          "dhiramprzz",
          "elissavinh",
          "_felix.vazquez_",
          "fajardoooooo",
          "ferparentee",
          "_____hcanyun",
          "_ironboard_",
          "kikapu.tattoo",
          "nobinari_mx",
          "nos_autem",
          "simontechyes",
          "so__fi_o",
          "vemosvemos_it",
          "v.o.t.e.x.p.e.d.r.o",
        ].map(userName => (
          <a
            href={"https://www.instagram.com/" + userName}
            className=" border-primary border-l mb-3"
          >
            {userName}
          </a>
        ))}
      </nav>
    </Layout>
  )
}

export default BlogPage
