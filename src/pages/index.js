import * as React from "react";
import {SEO} from '../components/seo';
import "bootstrap/dist/css/bootstrap.min.css";
import core_css from "../styles/core.css";
import home_css from "../styles/home.css";
import {TopBar} from "../components/home/top_bar";
import {Intro} from "../components/home/intro";
import {ParadigmShift} from "../components/home/paradigm_shift";
import {Spots} from "../components/home/spots";
import {Footer} from '../components/footer';
import SafefolderShare from '../components/share';

const Home = () => {
  return (
    <>
  <div class="container sf-layout">
    <TopBar />
    <Intro />
    <ParadigmShift />
    <Spots />
  </div>
  <div class="fuid-container" style={{"border-top": "solid #8D0404 6px"}}>
    <SafefolderShare
      shareUrl="https://safefolder.app"
      shareTitle="Safefolder - Secure Your Data Your Way"
     />
    <Footer />
  </div>
  </>
  )

}

export default Home;

export function Head() {
  return (
    <>
      <SEO>
        <link rel="stylesheet" href={{core_css}} />
        <link rel="stylesheet" href={{home_css}} />
        <script src="https://kit.fontawesome.com/f1ee3d8424.js" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>    
        <script 
            id="cookieyes" 
            type="text/javascript" 
            src="https://cdn-cookieyes.com/client_data/012de3c7963964c350405db4/script.js"></script>
      </SEO>
    </>
  )
}
