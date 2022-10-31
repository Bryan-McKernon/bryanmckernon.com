import React, { useState, useEffect } from "react";
import Navbar from "./navbar/navbar";
import Homepage from "./homepage/homepage";
import Project from "./project/project";
import Contact from "./contact/contact";
import Footer from "./footer/footer";
import MantraBio_Img from "./images/mantra_logo.png";
import BayAreaLawyers_Img from "./images/bayarealawyers-img.png";
import Urban_Dictionary_API_Img from "./images/urban_dictionary_api.JPG";
import Mystudycards_Img from "./images/mystudycards.png";
import EvictionResource_Img from "./images/eviction_resource.JPG";
import RegisteredProcessServer_Img from "./images/registeredprocessserver_website.png";
import DonaldRJackson_Img from "./images/donaldrjackson_websites.png";
import GooglePlayBadge from "./images/GooglePlayBadge.png";
import SCC_Seal from "./images/SCC_Seal.jpg";
import BryanMcKernon_Img from "./images/bryanmckernon_img.JPG";
import ProfilePic from "./images/ProfilePic.jpg";
import LinkedInLogo from "./images/linkedinlogo.png";
import GitLogo from "./images/gitlogo.png";
import navbarMenuButtonImg from "./images/NavbarMenuButton.png";

function App() {
  const [navbarHeight, setnavbarHeight] = useState(50);
  const [navbarExpandButtonClicked, setnavbarExpandButtonClicked] =
    useState(false);

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
        document.getElementById("navbar-button-home").style.display =
          "inline-block";
        document.getElementById("navbar-button-projects").style.display =
          "inline-block";
        document.getElementById("navbar-button-contact").style.display =
          "inline-block";
      } else {
        setnavbarHeight(50);
        setnavbarExpandButtonClicked(false);
        document.getElementById("navbar-button-home").style.display = "none";
        document.getElementById("navbar-button-projects").style.display =
          "none";
        document.getElementById("navbar-button-contact").style.display = "none";
      }
    });
  });

  const HomeClickEventExecute = () => {
    window.scroll({ left: 0, top: 0, behavior: "smooth" });
    setnavbarHeight(50);
    setnavbarExpandButtonClicked(false);
  };

  const ProjectsClickEventExecute = () => {
    window.scroll({
      left: 0,
      top: window.innerHeight - 50,
      behavior: "smooth",
    });
    setnavbarHeight(50);
    setnavbarExpandButtonClicked(false);
  };

  const ContactClickEventExecute = () => {
    window.scroll({
      left: 0,
      top: document.body.scrollHeight - window.innerHeight - 50,
      behavior: "smooth",
    });
    setnavbarHeight(50);
    setnavbarExpandButtonClicked(false);
  };

  const navbarExpandExecute = () => {
    let i = navbarHeight;
    const timer = setInterval(() => {
      if (!navbarExpandButtonClicked) {
        i++;
        setnavbarHeight(i);
        if (i === 200) {
          clearInterval(timer);
          setnavbarExpandButtonClicked(true);
        }
      } else {
        i--;
        setnavbarHeight(i);
        if (i === 50) {
          clearInterval(timer);
          setnavbarExpandButtonClicked(false);
        }
      }
    }, 1);
  };

  return (
    <div className="App">
      <Navbar
        navbarMenuButton={navbarMenuButtonImg}
        navbarExpand={navbarExpandExecute}
        HomeClickEvent={HomeClickEventExecute}
        ProjectsClickEvent={ProjectsClickEventExecute}
        ContactClickEvent={ContactClickEventExecute}
      />

      <Homepage />

      <Project
        url="https://mantrabio.com/"
        title="Mantra Bio"
        imageType="project-image-logo"
        image={MantraBio_Img}
        description={
          <div>
            <ol>
              <b>Type: </b>Web Application
            </ol>
            <ol>
              <b>Built: </b>2/20 - 11/20
            </ol>
            <ol>
              <b>Team: </b>Solo
            </ol>
            <ol>
              <b>Languages: </b>JavaScript ES6, SCSS
            </ol>
            <ol>
              <b>Technologies: </b>React, GIT, Visual Studio Code, Chrome
              Developer Tools
            </ol>
            <ol>
              <b>Cloud: </b>AWS: Elastic Beanstalk
            </ol>
          </div>
        }
      />

      <Project
        url={null}
        title="bayarealawyers.com"
        imageType="project-image-website"
        image={BayAreaLawyers_Img}
        description={
          <div>
            <ol>
              <b>Type: </b>Web Application
            </ol>
            <ol>
              <b>Built: </b>2/20 - 11/20
            </ol>
            <ol>
              <b>Team: </b>Solo
            </ol>
            <ol>
              <b>Languages: </b>JavaScript ES6, SCSS
            </ol>
            <ol>
              <b>Technologies: </b>React, GIT, Visual Studio Code, Chrome
              Developer Tools
            </ol>
            <ol>
              <b>Cloud: </b>AWS: Elastic Beanstalk
            </ol>
          </div>
        }
      />

      <Project
        url="https://urban-dictionary-api.s3-us-west-1.amazonaws.com/index.html"
        title="Urban Dictionary API"
        imageType="project-image-website"
        image={Urban_Dictionary_API_Img}
        description={
          <div>
            <ol>
              <b>Type: </b>Web Application
            </ol>
            <ol>
              <b>Built: </b>8/19 - 8/19
            </ol>
            <ol>
              <b>Team: </b>Solo
            </ol>
            <ol>
              <b>Languages: </b>JavaScript ES6, CSS3
            </ol>
            <ol>
              <b>Technologies: </b>React, GIT, Visual Studio Code, Chrome
              Developer Tools
            </ol>
            <ol>
              <b>Cloud: </b>AWS S3
            </ol>
          </div>
        }
      />

      <Project
        url={null}
        title="mystudycards.com"
        imageType="project-image-website"
        image={Mystudycards_Img}
        description={
          <div>
            <ol>
              <b>Type: </b>Web Applicaion
            </ol>
            <ol>
              <b>Built: </b>2/18 - 6/18
            </ol>
            <ol>
              <b>Team: </b>Two
            </ol>
            <ol>
              <b>Languages: </b>HTML5, CSS3, JavaScript, PHP, SQL
            </ol>
            <ol>
              <b>Technologies: </b>jQuery, BootStrap, AJAX, PHP Mailer, LAMP
              Stack, MySQL Workbench, XAMPP, Apache Web Server, Chrome Developer
              Tools, FileZilla
            </ol>
            <ol>
              <b>Cloud: </b>AWS EC2, AWS RDS, AWS Route 53
            </ol>
          </div>
        }
      />

      <Project
        url="http://evictionresource.com/"
        title="evictionresource.com"
        imageType="project-image-website"
        image={EvictionResource_Img}
        description={
          <div>
            <ol>
              <b>Type: </b>Website
            </ol>
            <ol>
              <b>Built: </b>7/19 - 8/19
            </ol>
            <ol>
              <b>Team: </b>Solo
            </ol>
            <ol>
              <b>Languages: </b>HTML5, CSS3, JavaScript, PHP
            </ol>
            <ol>
              <b>Technologies: </b>GIT, Apache Web Server, XAMPP, Chrome
              Developer Tools, Google Analytics, FileZilla
            </ol>
            <ol>
              <b>Cloud: </b>AWS EC2, AWS Route 53
            </ol>
          </div>
        }
      />

      <Project
        url="http://bryanmckernon.com/"
        title="bryanmckernon.com"
        imageType="project-image-website"
        image={BryanMcKernon_Img}
        description={
          <div>
            <ol>
              <b>Type: </b>Website
            </ol>
            <ol>
              <b>Built: </b>8/19 - 9/19
            </ol>
            <ol>
              <b>Team: </b>Solo
            </ol>
            <ol>
              <b>Languages: </b>JavaScript ES6, CSS3
            </ol>
            <ol>
              <b>Technologies: </b>React, GIT, Visual Studio Code, Chrome
              Developer Tools
            </ol>
            <ol>
              <b>Cloud: </b>AWS S3, AWS Route 53
            </ol>
          </div>
        }
      />

      <Project
        url="http://registeredprocessserver.com/"
        title="registeredprocessserver.com"
        imageType="project-image-website"
        image={RegisteredProcessServer_Img}
        description={
          <div>
            <ol>
              <b>Type: </b>Website
            </ol>
            <ol>
              <b>Built: </b>4/17 - 6/17
            </ol>
            <ol>
              <b>Team: </b>Three
            </ol>
            <ol>
              <b>Languages: </b>HTML, CSS, JavaScript, PHP
            </ol>
            <ol>
              <b>Technologies: </b>Bootstrap, Atom Text Editor, Chrome Developer
              Tools
            </ol>
            <ol>
              <b>Cloud: </b>FatCow Server
            </ol>
          </div>
        }
      />

      <Project
        url={null}
        title="donaldrjackson.com"
        imageType="project-image-website"
        image={DonaldRJackson_Img}
        description={
          <div>
            <ol>
              <b>Type: </b>Website
            </ol>
            <ol>
              <b>Built: </b>6/17 - 6/17
            </ol>
            <ol>
              <b>Team: </b>Solo
            </ol>
            <ol>
              <b>Languages: </b>HTML, CSS, JavaScript
            </ol>
            <ol>
              <b>Technologies: </b>Bootstrap, Atom Text Editor, Chrome Developer
              Tools
            </ol>
            <ol>
              <b>Cloud: </b>FatCow Server
            </ol>
          </div>
        }
      />

      <Project
        url={null}
        title="Fortune Cookie Fremont"
        imageType="project-image-android"
        image={GooglePlayBadge}
        description={
          <div>
            <ol>
              <b>Type: </b>Android Application
            </ol>
            <ol>
              <b>Built: </b>1/17 - 4/17
            </ol>
            <ol>
              <b>Team: </b>Three
            </ol>
            <ol>
              <b>Languages: </b>Java, XML
            </ol>
            <ol>
              <b>Technologies: </b>Android Studio
            </ol>
            <ol>
              <b>Cloud: </b>Google Play Store
            </ol>
          </div>
        }
      />

      <Project
        url={null}
        title="BUS170 Flashcards"
        imageType="project-image-android"
        image={GooglePlayBadge}
        description={
          <div>
            <ol>
              <b>Type: </b>Android Application
            </ol>
            <ol>
              <b>Built: </b>4/17 - 4/17
            </ol>
            <ol>
              <b>Team: </b>Solo
            </ol>
            <ol>
              <b>Languages: </b>Java, XML
            </ol>
            <ol>
              <b>Technologies: </b>Android Studio
            </ol>
            <ol>
              <b>Cloud: </b>Google Play Store
            </ol>
          </div>
        }
      />

      <Project
        url={null}
        title="The Color Game"
        imageType="project-image-android"
        image={GooglePlayBadge}
        description={
          <div>
            <ol>
              <b>Type: </b>Android Application
            </ol>
            <ol>
              <b>Built: </b>11/16 - 11/16
            </ol>
            <ol>
              <b>Team: </b>Solo
            </ol>
            <ol>
              <b>Languages: </b>Java, XML
            </ol>
            <ol>
              <b>Technologies: </b>Android Studio
            </ol>
            <ol>
              <b>Cloud: </b>Google Play Store
            </ol>
          </div>
        }
      />

      <Project
        url="https://www.sccgov.org/sites/scc/Documents/home.html"
        title="Business Analyst Intern"
        imageType="project-image-internship"
        image={SCC_Seal}
        description={
          <div>
            <ol>
              <b>Type: </b>Internship
            </ol>
            <ol>
              <b>Date: </b>8/17 - 1/18
            </ol>
          </div>
        }
      />

      <Contact
        ProfilePic={ProfilePic}
        LinkedInLogo={LinkedInLogo}
        GitLogo={GitLogo}
      />
      <Footer />
    </div>
  );
}
export default App;
