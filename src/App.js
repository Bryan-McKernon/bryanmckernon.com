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
       url = "https://urban-dictionary-api.s3-us-west-1.amazonaws.com/index.html"
       title="Urban Dictionary API"
       imageType="project-image-website"
       image={Urban_Dictionary_API_Img}
       description={
         <div>
           <ol><b>Type: </b>Web Application</ol>
           <ol><b>Built: </b>8/19 - 8/19</ol>
           <ol><b>Team: </b>Solo</ol>
           <ol><b>Languages: </b>JavaScript ES6, CSS3</ol>
           <ol><b>Technologies: </b>React, GIT, Visual Studio Code, Chrome Developer Tools</ol>
           <ol><b>Cloud: </b>AWS S3</ol>
           <ol><b>Description: </b>
                Urban Dictionary API is a Web Application I developed which pulls from
                Urban Dictionary's RESTful API. The API allows me to access one GET request
                for the parameter <i>term</i>. In return I receive a JSON response with 13 
                key value pairs. Of the 13 pairs I decided to use 6 to create my application.
                The <i>term</i>, <i>example</i>, <i>likes</i>, <i>dislikes</i>, <i>author</i>,
                and <i>date</i> are the JSON key value pairs I decided to incorporate. Prior to
                development I created a quick mock-up of what the application would like upon
                completion and realized I would need a loading animation as well as an error
                message in the event that the term the user is searching for cannot be found.
                Using React I was able to make each card a single component and pass the values 
                I received from the JSON response through props to the component. I used state 
                for determining whether a user has searched for a term, setting the cards, 
                determining whether the cards have been inflated, and determining whether a term
                could not be found. In all the project took me a little over a week to complete
                and was quite the learning experience.
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
           <ol><b>Type: </b>Web Applicaion</ol>
           <ol><b>Built: </b>2/18 - 6/18</ol>
           <ol><b>Team: </b>Two</ol>
           <ol><b>Languages: </b>HTML5, CSS3, JavaScript, PHP, SQL</ol>
           <ol><b>Technologies: </b>jQuery, BootStrap, AJAX, PHP Mailer, LAMP Stack, MySQL Workbench, XAMPP, Apache Web Server, Chrome Developer Tools, FileZilla</ol>
           <ol><b>Cloud: </b>AWS EC2, AWS RDS, AWS Route 53</ol>
           <ol><b>Description: </b>
                 mystudycards.com is one of the projects I am most proud of. I came up with the concept while I was in university. 
                 In summary, the application was designed to assist students in studying for upcoming quizzes and exams. The application
                 would allow a student to search for the university they attend and the course they are enrolled in by specifying the 
                 name of the course as well as the name of the professor teaching the course. The student would then be able to view
                 study material related to the course in the form of flashcards. I worked with one other individual on this project and 
                 together we designed and developed the application. I architected and developed all of the back-end, which is written 
                 in PHP pulling from a MySQL database and I developed the search engine which was written with JavaScript using AJAX to 
                 pull the PHP scripts I wrote.
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
          <ol><b>Type: </b>Website</ol>
          <ol><b>Built: </b>7/19 - 8/19</ol>
          <ol><b>Team: </b>Solo</ol>
          <ol><b>Languages: </b>HTML5, CSS3, JavaScript, PHP</ol>
          <ol><b>Technologies: </b>GIT, Apache Web Server, XAMPP, Chrome Developer Tools, Google Analytics, FileZilla</ol>
          <ol><b>Cloud: </b>AWS EC2, AWS Route 53</ol>
          <ol><b>Description: </b>
            evictionresource.com is a website I developed for a client of mine. I decided to not use a CSS framework in an
            effort to improve my CSS3 skills. Thus in doing so, evictionresource.com was developed entirely with HTML5, CSS3, 
            JavaScript, and PHP with no frameworks. I was able to make this site responsive using @media queries within CSS3. 
            Due to the requirement of having a contact form at the bottom of the site I decided to use PHP as my server-side 
            scripting language to send an email via SMTP to my client’s email. My client also wanted me to incorporate Google
            Analytics so that he could monitor the traffic on his site. I performed all AWS operations including transferring 
            my client’s domain into AWS Route 53, installing Apache on AWS EC2, and routing traffic from the domain to the EC2.
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
            <ol><b>Type: </b>Website</ol>
            <ol><b>Built: </b>8/19 - 9/19</ol>
            <ol><b>Team: </b>Solo</ol>
            <ol><b>Languages: </b>JavaScript ES6, CSS3</ol>
            <ol><b>Technologies: </b>React, GIT, Visual Studio Code, Chrome Developer Tools</ol>
            <ol><b>Cloud: </b>AWS S3, AWS Route 53</ol>
            <ol><b>Description: </b>
                The projects you are viewing including this one are all a React component. The data such as the image above, the 
                type, and this description are all passed to the component through props. The welcome page above and the contact 
                page below are also components along with the footer and the navbar. The navbar functionality was developed from
                 scratch by using JavaScript ES6, React state, React useEffect hook, and CSS3 @media queries. There is no CSS 
                framework associated with this website. I chose to host this site on an AWS S3 bucket and traffic is routed through
                AWS Route 53 where my domain is registered.
            </ol>
          </div>
      }/>
       
       <Project
       url = "http://registeredprocessserver.com/"
       title="registeredprocessserver.com"
       imageType="project-image-website"
       image={RegisteredProcessServer_Img}
       description={
        <div>
            <ol><b>Type: </b>Website</ol>
            <ol><b>Built: </b>4/17 - 6/17</ol>
            <ol><b>Team: </b>Three</ol>
            <ol><b>Languages: </b>HTML, CSS, JavaScript, PHP</ol>
            <ol><b>Technologies: </b>Bootstrap, Atom Text Editor, Chrome Developer Tools</ol>
            <ol><b>Cloud: </b>FatCow Server</ol>
            <ol><b>Description: </b>
                registeredprocessserver.com is a site I developed on a team with two other individuals. Originally, 
                the site was assigned to us as the main project for our web development course in university. But, 
                I decided why not kill two birds with one stone and find someone who actually needs a site and build
                it for them. Thus, not only did we manage to complete the project for our course, but we ended up 
                getting paid to do it! This site is used frequently allowing my client’s customers to learn more about
                his business and get in contact with him. The site was made responsive using Bootstrap and sends an 
                email via SMTP to my client.
            </ol>
        </div>
      }/>
       
       <Project
       url = "http://donaldrjackson.com/"
       title="donaldrjackson.com"
       imageType="project-image-website"
       image={DonaldRJackson_Img}
       description={
          <div>
            <ol><b>Type: </b>Website</ol>
            <ol><b>Built: </b>6/17 - 6/17</ol>
            <ol><b>Team: </b>Solo</ol>
            <ol><b>Languages: </b>HTML, CSS, JavaScript</ol>
            <ol><b>Technologies: </b>Bootstrap, Atom Text Editor, Chrome Developer Tools</ol>
            <ol><b>Cloud: </b>FatCow Server</ol>
            <ol><b>Description: </b>
                donaldrjackson.com was a simple site my client asked me to build for his friend Donald R. Jackson.
                The site consists of a summary of the individual along with his picture and contact information. 
                I added a small JavaScript animation which occurs when someone clicks the “Click for Bio” button. 
                I was able to make this site responsive using Bootstrap.
            </ol>
          </div>
      }/>

       <Project
       url = "https://play.google.com/store/apps/details?id=com.digitalprogramindustries.Fortune_Cookie_Mobile_Application&hl=en"       
       title="Fortune Cookie Fremont"
       imageType="project-image-android"
       image={GooglePlayBadge}
       description={
          <div>
            <ol><b>Type: </b>Android Application</ol>
            <ol><b>Built: </b>1/17 - 4/17</ol>
            <ol><b>Team: </b>Three</ol>
            <ol><b>Languages: </b>Java, XML</ol>
            <ol><b>Technologies: </b>Android Studio</ol>
            <ol><b>Cloud: </b>Google Play Store</ol>
            <ol><b>Description: </b>
                Fortune Cookie Fremont is the most complex Android Application I have developed. I worked with two other people; a designer
                and another developer. Together we built an order ahead application for a local Chinese restaurant called Fortune Cookie.
                We had to interface with store owner, understand her menu, and discuss about how she wanted to receive orders. Ultimately,
                we decided the most efficient solution would be to send orders via SMTP from the mobile application to the store owner’s 
                email address. Once we finished developing and testing the application we uploaded it to the Google Play Store where customers 
                could download the application. We were ultimately successful and customers used the application to order food ahead either 
                for pick-up or delivery.
            </ol>
          </div>
      }/>

      <Project
       url = "https://play.google.com/store/apps/details?id=com.bpmcker.bpmcker.bus170flashcards&hl=en"
       title="BUS170 Flashcards"
       imageType="project-image-android"
       image={GooglePlayBadge}
       description={
            <div>
              <ol><b>Type: </b>Android Application</ol>
              <ol><b>Built: </b>4/17 - 4/17</ol>
              <ol><b>Team: </b>Solo</ol>
              <ol><b>Languages: </b>Java, XML</ol>
              <ol><b>Technologies: </b>Android Studio</ol>
              <ol><b>Cloud: </b>Google Play Store</ol>
              <ol><b>Description: </b>
                  BUS170 Flashcards was a simple android application I built while in my finance course in university. We had a quiz
                   coming up where we had to memorize a number of terms and I recognized that one of the most efficient ways to study
                   for the quiz would be by using flashcards. So I decided to make an android app that lists every term we had to
                   memorize and would show the definition if you clicked on the term. I received a fairly good response from my
                   classmates about the application and even noticed some of them using the app prior to walking into class to take 
                   the quiz. It definitely felt pretty great to be able to use technology to help others out.

              </ol>            
            </div>
      }/>

     <Project
       url = "https://play.google.com/store/apps/details?id=com.digitalprogramindustries.thecolorgame&hl=en"
       title="The Color Game"
       imageType="project-image-android"
       image={GooglePlayBadge}
       description={
            <div>
              <ol><b>Type: </b>Android Application</ol>
              <ol><b>Built: </b>11/16 - 11/16</ol>
              <ol><b>Team: </b>Solo</ol>
              <ol><b>Languages: </b>Java, XML</ol>
              <ol><b>Technologies: </b>Android Studio</ol>
              <ol><b>Cloud: </b>Google Play Store</ol>
              <ol><b>Description: </b>
                  The Color Game was the first mobile application I developed. I came up with the concept for the application
                  prior to knowing much about programming so I ended up writing the idea down and did not end up developing 
                  it until a while later. Initially, I learned a bit of C# using Visual Studio prior to any other language or 
                  IDE, so I decided to use what I already knew and built my app in C#. Then, as I became more comfortable with
                  programming I was finally able to translate my C# code in Visual Studio into Java in Android Studio, thus
                  creating my first android application.
              </ol>
            </div>
      }/>
       
     <Project
       url ="https://www.sccgov.org/sites/scc/Documents/home.html"
       title="Business Analyst Intern"
       imageType="project-image-internship"
       image={SCC_Seal}
       description={
          <div>
              <ol><b>Type: </b>Internship</ol>
              <ol><b>Date: </b>8/17 - 1/18</ol>              
              <ol><b>Description: </b>
                  I had the opportunity to work at Santa Clara County as a Business Analyst Intern during my senior year at university. 
                  My primary objective was creating a data glossary for Santa Clara County’s Criminal Justice Information System. To do 
                  so I was required to interview employees such as software developers and system architects to gain a better understanding 
                  of the system I was documenting. I was given several resources along the way, including a pdf document outlining some of
                  the features of the system as well as an ER diagram which displayed all of the tables along with their relationships to 
                  one another.
              </ol>
          </div>
      }/>

      <Contact ProfilePic={ProfilePic}/>
      <Footer/>
    </div>
  );
}
export default App;