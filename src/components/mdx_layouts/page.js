import * as React from "react";
import PropTypes from 'prop-types';
import { Link } from "gatsby";
import { graphql } from 'gatsby';
import { Helmet } from "react-helmet";
import { MDXProvider } from "@mdx-js/react";

import core_css from "../../styles/core.css";
import {TopBarPages} from "../top_bar_pages";
import {SEO} from "../seo";
import Hero from '../header/hero';
import {Footer} from '../footer';
import SafefolderShare from '../share';

const shortcodes = { Link } // Provide common components here

function LayoutPage({ data, children }) {
    console.log(data.mdx);
    const featuredImgFluid = data.mdx.frontmatter.featuredImage.childImageSharp;
    const hashtag = data.mdx.frontmatter.share.hashtag;
    console.log("hashtag: " + hashtag);
    const hashtags = [hashtag];
    return (
        <>
            <link rel='stylesheet' href='https://highlightjs.org/static/demo/styles/railscasts.css'/>
            <Helmet>
            <title>{data.mdx.frontmatter.title}</title>
            </Helmet>
            <SEO title={data.mdx.frontmatter.title} description={data.mdx.frontmatter.description} />
            <div class="container sf-layout">
                <TopBarPages />
                <Hero 
                    image={featuredImgFluid}
                    title={data.mdx.frontmatter.title}
                    color={data.mdx.frontmatter.titleColor}
                />
                <div className="container-fluid sf-section" style={{"background": "#f5f5f5", "padding": "20px"}}>
                    <MDXProvider components={shortcodes}>
                        {children}
                    </MDXProvider>
                </div>
            </div>
            <div className="fuid-container" style={{"border-top": "solid #8D0404 6px"}}>
                <SafefolderShare
                    shareUrl={data.mdx.frontmatter.share.url}
                    shareTitle={data.mdx.frontmatter.share.title}
                    summary={data.mdx.frontmatter.share.summary}
                    source={data.mdx.frontmatter.share.source}
                    hashtag={hashtag}
                    hashtags={hashtags}
                    subject={data.mdx.frontmatter.share.subject}
                    body={data.mdx.frontmatter.share.body}
                />
                <Footer />
            </div>
        </>
    )
}

LayoutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default LayoutPage

export const pageQuery = graphql`
  query LayoutPage($id: String!) {
    mdx(id: {eq: $id}) {
      id
      frontmatter {
        path
        title
        titleColor
        description
        author
        collection
        tags
        contentType
        share {
            url
            title
            summary
            source
            hashtag
            hashtags
            subject
            body
        }
        featuredImage {
          childImageSharp {
            gatsbyImageData(
                width: 800
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`

export function Head() {
  return (
    <>
    <link rel="stylesheet" href={{core_css}} />
    <script src="https://kit.fontawesome.com/f1ee3d8424.js" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>    
    <script 
        id="cookieyes" 
        type="text/javascript" 
        src="https://cdn-cookieyes.com/client_data/012de3c7963964c350405db4/script.js"></script>
    </>
  )
}
