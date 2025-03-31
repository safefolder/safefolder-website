import * as React from "react";
import {SEO} from '../../components/seo';
import "bootstrap/dist/css/bootstrap.min.css";
import core_css from "../../styles/core.css";
import home_css from "../../styles/home.css";
import TopBar from "./top_bar";
import Intro from "./intro";
import ParadigmShift from "./paradigm_shift";
import Spots from "./spots";
import TechnologyPreview from "./technology_preview";
import Plans from "./plans";
import Roadmap from "./roadmap";
import Team from "./team";
import Faq from './faq';
import Footer from './footer';

const Home = () => {
  return (
    <>
  <div class="container sf-layout">
    <TopBar />
    <Intro />
    <ParadigmShift />
    <Spots />
    <TechnologyPreview />
    <Plans />
    <Roadmap />
    <Team />
    <Faq />    
  </div>
  <div class="fuid-container" style={{"border-top": "solid #8D0404 6px"}}>
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
