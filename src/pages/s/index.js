import * as React from "react"
import Layout from "../../components/layout"

import Seo from "../../components/seo"
import SNavLink from "../../components/snavlink"


const Me = () => (
  <Layout pageTitle="S">
    <Seo title="S" />
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-8 col-md-3 d-flex flex-column">
          <div className="text-center neon-button my-5">SLi.ST</div>
        </div>
        
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-8 col-md-5 d-flex flex-column">
          
          <nav className="d-flex flex-column pb-5 my-5">
            <SNavLink to="/s/playlists/">playlists</SNavLink>
            <SNavLink to="/visualmedia" className="text-center text-decoration-none pt-3 lead mb-5 border border-primary border-bottom-0 text-dark">visual media WIP</SNavLink>
            <SNavLink to="/s/" className="text-center text-decoration-none pt-3 lead mb-5 border border-primary border-bottom-0 text-dark">recorded WIP</SNavLink>
            <SNavLink to="/s/release-notes/">release notes</SNavLink>
            <a href="https://instagram.com/slistslist" className="text-center text-decoration-none pt-3 text-light lead mb-5 border border-primary border-bottom-0">@slistslist</a>
            <SNavLink to="/s/" className="text-center text-decoration-none pt-3 lead mb-5 border border-primary border-bottom-0 text-dark">special thanks WIP</SNavLink>
          </nav>
        </div>
        
      </div>
    </div>
  </Layout>
)

export default Me