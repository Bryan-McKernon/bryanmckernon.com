import React from 'react';
import Navbar from './navbar/navbar';
import Homepage from './homepage/homepage';
import Project from './project/project';
import Contact from './contact/contact';
import Footer from './footer/footer';
import Urban_Dictionary_API_Img from "./images/urban_dictionary_api.JPG";
import Mystudycards_Img from "./images/mystudycards.png";
import EvictionResource_Img from "./images/eviction_resource.JPG";
import RegisteredProcessServer_Img from "./images/registeredprocessserver_website.png";
import DonaldRJackson_Img from "./images/donaldrjackson_websites.png";
import GooglePlayBadge from "./images/GooglePlayBadge.png";
import SCC_Seal from "./images/SCC_Seal.jpg";
import BryanMcKernon_Img from "./images/bryanmckernon_img.JPG";
import ProfilePic from "./images/ProfilePic.jpg";
import navbarMenuButtonImg from "./images/NavbarMenuButton.png";

function App() { 
  return (
    <div className="App">
      <Navbar navbarMenuButton={navbarMenuButtonImg}/>
      <Homepage/>

      <Project
       url="https://urban-dictionary-api-app.s3-us-west-1.amazonaws.com/index.html"
       title="Urban Dictionary API"
       imageType="project-image-website"
       image={Urban_Dictionary_API_Img}
       description={
         <div>
           <ol><b>Type: </b>Web Application</ol>
           <ol><b>Built: </b>8/19 - 8/19</ol>
           <ol><b>Team: </b>Solo</ol>
           <ol><b>Description: </b>
           Urban Dictionary API is a Web Application I built which pulls from
           Urban Dictionary's RESTful API.
           </ol>

         </div>
       }/>

      <Project
       url="http://mystudycards.com/"
       title="mystudycards.com"
       imageType="project-image-website"
       image={Mystudycards_Img}
       description={
           <li>this is my first point</li>
       }/>

       <Project
       url = "http://evictionresource.com/"
       title="evictionresource.com"
       imageType="project-image-website"
       image={EvictionResource_Img}
       description={
           <li>this is my first point</li>
       }/>

       <Project
       url = "http://bryanmckernon.com/"
       title="bryanmckernon.com"
       imageType="project-image-website"
       image={BryanMcKernon_Img}
       description={
           <li>this is my first point</li>
       }/>
       
       <Project
       url = "http://registeredprocessserver.com/"
       title="registeredprocessserver.com"
       imageType="project-image-website"
       image={RegisteredProcessServer_Img}
       description={
           <li>this is my first point</li>
       }/>
       
       <Project
       url = "http://donaldrjackson.com/"
       title="donaldrjackson.com"
       imageType="project-image-website"
       image={DonaldRJackson_Img}
       description={
           <li>this is my first point</li>
       }/>

       <Project
       url = "https://play.google.com/store/apps/details?id=com.digitalprogramindustries.Fortune_Cookie_Mobile_Application&hl=en"       
       title="Fortune Cookie Fremont"
       imageType="project-image-android"
       image={GooglePlayBadge}
       description={
           <li>this is my first point</li>
       }/>

      <Project
       url = "https://play.google.com/store/apps/details?id=com.bpmcker.bpmcker.bus170flashcards&hl=en"
       title="BUS170 Flashcards"
       imageType="project-image-android"
       image={GooglePlayBadge}
       description={
           <li>this is my first point</li>
       }/>

     <Project
       url = "https://play.google.com/store/apps/details?id=com.digitalprogramindustries.thecolorgame&hl=en"
       title="The Color Game"
       imageType="project-image-android"
       image={GooglePlayBadge}
       description={
           <li>this is my first point</li>
       }/>
       
     <Project
       title="Business Analyst Intern"
       imageType="project-image-internship"
       image={SCC_Seal}
       description={
           <li>this is my first point</li>
       }/>

      <Contact ProfilePic={ProfilePic}/>
      <Footer/>
    </div>
  );
}

export default App;
