import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import MarkdownWrapper from "../components/markdownwrapper"
// import { StaticImage } from "gatsby-plugin-image"

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="EPK" to="/mixtapes" label="Mixtapes">
      <Seo title="EPK" />
      <MarkdownWrapper>
        <h1>Press Kit</h1>
        <p>
          <br></br>
          Email: <a href="mailto: s@sli.st">s@sli.st</a>
          <br></br>
          Instagram: <a href="https://instagram.com/sli.st96">@sli.st96</a>
          <br></br>
          WhatsApp: <a href="https://wa.me/12123210632"> +1 212-321-0632</a>
        </p>
        <br />
        <p>
          <span className="font-bold text-primary">Biography:</span>
          <br />
          sli.st is 25 and from NYC, but despite all that he had never been to a
          techno rave until March 2021. 3 months later, he came to CDMX on a
          dare to find a supposedly nonexistent underground scene. Within his
          first weekend, he was completely addicted to the darker sound of CDMX
          and immediately cancelled all of his travel plans. By the end of
          August he was learning how to DJ from one of CDMX's nastiest
          industrial DJs. Within the following month, he was invited to DJ at
          The Real Under a couple of times, open for B Space at 49 Basan, and
          also DJ for a few hours at the New Year's after party at NIX.
        </p>
        <br />
        <p>
          <span className="font-bold text-primary">Genres:</span> <br></br>
          dark ambient, dark melodic house and techno, minimal, apocalyptic
          industrial techno, gabber, dnb and other genres but with a darker
          twist.
        </p>
        <p>
          sli.st is going through a darkwave and trancey phase. His sets tend to
          include bits of unnexpected genres and cultural shoutouts as a
          reminder that most people have multiple layers: dembow, synthwave,
          psytechno, rock, etc. etc.
        </p>
        <br></br>
        <p>
          <span className="font-bold text-primary">Mixtapes: </span>
          <br></br>
          <ul>
            <li>
              <Link to="/mixtapes">high quality download links</Link>
            </li>
            <li>
              <a href="soundcloud.com/slistslist">SoundCloud</a>
            </li>
          </ul>
        </p>
        <br></br>
        <p>
          <span className="font-bold text-primary">Past DJ sets: </span>
          <Link to="/reflections">Flyers and reflections</Link>
        </p>
        <br />
        <p>
          <span className="font-bold text-primary">Rider: </span>
          <br></br>
          <ul>
            <li>flyers may use my DJ name and/or logo, but not my face</li>
            <li>1 hour: $750 mxn, 2 hours: $1000; payment due after set</li>
            <li>
              4+ guestlist for local influencers to help promote the event
            </li>
          </ul>
        </p>
        <br></br>
        <p>
          <span className="font-bold text-primary">Text and Logos: </span>
          <br></br>
          <ul>
            <li>
              "sli.st" should be kept lowercase as it is a reference to the URL
              of this website
            </li>
            <li>
              if the font can be specified, please use Arial, or another
              sans-serif font
            </li>
          </ul>
        </p>
        <div className="not-prose grid grid-cols-4 pb-20">
          <a href="/epk/white-black.svg" download>
            <img
              className="img-fluid"
              src="/epk/white-black.svg"
              alt="white-black"
            />
          </a>
          <a href="/epk/gray-white.svg" download>
            <img
              className="img-fluid"
              src="/epk/gray-white.svg"
              alt="gray-white"
            />
          </a>
          <a href="/epk/gray-black.svg" download>
            <img
              className="img-fluid"
              src="/epk/gray-black.svg"
              alt="gray-black"
            />
          </a>
          <a href="/epk/black-white.svg" download>
            <img
              className="img-fluid"
              src="/epk/black-white.svg"
              alt="black-white"
            />
          </a>
        </div>
      </MarkdownWrapper>
    </Layout>
  )
}

export default BlogPage
