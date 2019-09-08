import React, {useState, useEffect} from 'react';
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

const [navbarHeight, setnavbarHeight] = useState(50);
const [navbarExpandButtonClicked, setnavbarExpandButtonClicked] = useState(false);

useEffect(() => {
     document.getElementById("navbar-bar-id").style.height = `${navbarHeight}px`;   

      if (navbarHeight === 200) {
          document.getElementById("navbar-button-home").style.display = "block";
          document.getElementById("navbar-button-projects").style.display = "block";
          document.getElementById("navbar-button-contact").style.display = "block";
      } else if (window.innerWidth <= 620) {
          document.getElementById("navbar-button-home").style.display = "none";
          document.getElementById("navbar-button-projects").style.display = "none";
          document.getElementById("navbar-button-contact").style.display = "none";
      }
      
      window.addEventListener("resize", () => {
        if (window.innerWidth >= 621) {
            setnavbarHeight(50);
            document.getElementById("navbar-button-home").style.display = "inline-block";
            document.getElementById("navbar-button-projects").style.display = "inline-block";
            document.getElementById("navbar-button-contact").style.display = "inline-block";
        } else {
          setnavbarHeight(50);
          setnavbarExpandButtonClicked(false);
          document.getElementById("navbar-button-home").style.display = "none";
          document.getElementById("navbar-button-projects").style.display = "none";
          document.getElementById("navbar-button-contact").style.display = "none";
        }
      });   
})
       
const HomeClickEventExecute = () => {
  window.scroll({left:0, top:0, behavior:"smooth"});
  setnavbarHeight(50);
  setnavbarExpandButtonClicked(false);
}
  
const ProjectsClickEventExecute = () => {
  window.scroll({left:0, top:window.innerHeight-50, behavior:"smooth"});
  setnavbarHeight(50);
  setnavbarExpandButtonClicked(false);
}

const ContactClickEventExecute = () => {        
  window.scroll({left:0, top:document.body.scrollHeight-window.innerHeight-50, behavior:"smooth"});
  setnavbarHeight(50);
  setnavbarExpandButtonClicked(false);
}

const navbarExpandExecute = () => { 
  let i = navbarHeight;
   const timer = setInterval(() => {    
     if (!navbarExpandButtonClicked) {
      i++;
      setnavbarHeight(i);      
      if (i===200) {
        clearInterval(timer);
        setnavbarExpandButtonClicked(true);        
      }
     } else {
      i--;
      setnavbarHeight(i);
      if (i===50) {
        clearInterval(timer);
        setnavbarExpandButtonClicked(false);
      }
     }
   }, 1);
}
  
  
  return (
    <div className="App">
      <Navbar 
        navbarMenuButton={navbarMenuButtonImg}
        navbarExpand={navbarExpandExecute}
        HomeClickEvent={HomeClickEventExecute}
        ProjectsClickEvent={ProjectsClickEventExecute}
        ContactClickEvent={ContactClickEventExecute}      
      />
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
         <div>
           <ol><b>Type: </b>Web Application</ol>
           <ol><b>Built: </b>6/17 - 8/17</ol>
           <ol><b>Team: </b>Two</ol>
           <ol><b>Description: </b>
           Urban Dictionary API is a Web Application I built which pulls from
           Urban Dictionary's RESTful API.
           </ol>
         </div>
       }/>

       <Project
       url = "http://evictionresource.com/"
       title="evictionresource.com"
       imageType="project-image-website"
       image={EvictionResource_Img}
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
       url = "http://bryanmckernon.com/"
       title="bryanmckernon.com"
       imageType="project-image-website"
       image={BryanMcKernon_Img}
       description={
          <div>
            
          </div>
      }/>
       
       <Project
       url = "http://registeredprocessserver.com/"
       title="registeredprocessserver.com"
       imageType="project-image-website"
       image={RegisteredProcessServer_Img}
       description={
        <div>

        </div>
      }/>
       
       <Project
       url = "http://donaldrjackson.com/"
       title="donaldrjackson.com"
       imageType="project-image-website"
       image={DonaldRJackson_Img}
       description={
          <div>
            
          </div>
      }/>

       <Project
       url = "https://play.google.com/store/apps/details?id=com.digitalprogramindustries.Fortune_Cookie_Mobile_Application&hl=en"       
       title="Fortune Cookie Fremont"
       imageType="project-image-android"
       image={GooglePlayBadge}
       description={
             <div>
            
            </div>
      }/>

      <Project
       url = "https://play.google.com/store/apps/details?id=com.bpmcker.bpmcker.bus170flashcards&hl=en"
       title="BUS170 Flashcards"
       imageType="project-image-android"
       image={GooglePlayBadge}
       description={
            <div>
            
            </div>
      }/>

     <Project
       url = "https://play.google.com/store/apps/details?id=com.digitalprogramindustries.thecolorgame&hl=en"
       title="The Color Game"
       imageType="project-image-android"
       image={GooglePlayBadge}
       description={
            <div>
            
            </div>
      }/>
       
     <Project
       title="Business Analyst Intern"
       imageType="project-image-internship"
       image={SCC_Seal}
       description={
          <div>
            
          </div>
      }/>

      <Contact ProfilePic={ProfilePic}/>
      <Footer/>
    </div>
  );
}
export default App;