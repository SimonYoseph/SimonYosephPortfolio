import React, { useEffect } from 'react';
import '../styles/Portfolio.css';


const Portfolio = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    // If a user hasn't opted in for reduced motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute("data-animated", true);

        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        // For each item in the array, clone it
        // add aria-hidden to it
        // add it into the `.scroller-inner`
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);
  return (
    <div className="page">
      <h1 className="portfolio-header">Portfolio</h1>
    <main>
      <ul>
        <li>
          
          <article>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
            </svg>
            
            <h3>Develop</h3>
            <p>
              The ability to create, develope, and inspire is what satifies me to want to continue and work on impactful projects that can help others to do the
              same. Projects I have worked on in the past all started with a simple vision but grew to solve a problem, which is why I can continue to develope - because there 
              is always a problem desiring to be fixed, but its about how/ when it's fixed that can be life changing. 
            </p>
          </article>
        </li>
        <li>
          <article>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5" />
            </svg>

            <h3>Preview</h3>
            <p>
              All my work is displayed on <a href="https://github.com/SimonYoseph" id="GitHubLink" target="_blank" rel="noopener noreferrer">GitHub</a>. The various projects include Travel Trove AI where individuals can search for flights based on budget and dates. This website also implements a currency converter and language translation tool. <br />
              Check out <a href="https://my-fit-webapp.vercel.app" id="myFitLink" target="_blank" rel="noopener noreferrer">MyFit</a> where individuals can track their fitness journey.  Also within my internship project I was able to research, analyze and map 311 and 911 calls in Baltimore called <a href="https://baltimore-crime-predicting.streamlit.app" id="crime-link" target="_blank" rel="noopener noreferrer">Crime</a> and 
              <a href="https://311mappeddata.streamlit.app" id="grime-link" target="_blank" rel="noopener noreferrer"> Grime</a>.
            </p>
          </article>
        </li>
        <li>
          <article>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>

            <h3>Audience</h3>
            <p>
              I'm an experienced Full Stack developer, Data Scientist, and IT Support touching all spects of development, testing , and support. My intended audience are for indviduals and/ or teams who aspire and desire more for themselves, company, or overall lifestlye, in hopes that one day you achieve that goal, while gaining a 
              valuable asset along the way, me.
            </p>
          </article>
        </li>
        <li>
          <article>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
            </svg>

            <h3>Value</h3>
            <p>
              My goal is not monetary gain but to build upon my current skills showcased here on this portfolio and learn new skills along the way. My vision is to grow constantly by creating a network, 
              gaining the trust of indivduals through my work, and define the best version of who I want to be, now and in the near future.
            </p>
          </article>
        </li>
      </ul>
      <h1 className="Travel-Trove effect-3">
  <a href="https://github.com/SimonYoseph/travel-trove-ai" target="_blank" rel="noopener noreferrer">
    Travel Trove AI</a></h1>


          <div className="scroller" data-speed="fast">
            <ul className="tag-list scroller__inner">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Node.js</li>
              <li>MySQL</li>
              <li>Express</li>
              <li>Next.js</li>
              <li>MongoDB</li>
              <li>React</li>
              <li>GitHub</li>
              <li>Vercel</li>
              <li>MAC/ Windows OS</li>
              <li>Trello</li>
              <li>PostgreSQL</li>
            </ul>
          </div>

<div className="scroller" data-direction="right" data-speed="slow">
  
  <div className="scroller__inner">
    <img src="Currency converter.png" alt="" id="currency-tool"/>
    <img src="translation tool.png" alt="" id="translation-tool"/>
    <img src="flight search.png" alt="" id="flight-tool"/>
    <img src="flight search 2.png" alt="" id="flight-tool2"/>
  </div>
</div>



<h1 className="MyFit effect-3">
  <a href="https://my-fit-webapp.vercel.app" target="_blank" rel="noopener noreferrer">
    MyFit</a></h1>

<div className="scroller" data-speed="fast">
  <ul className="tag-list scroller__inner">
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
    <li>Node.js</li>
    <li>MySQL</li>
    <li>Express</li>
    <li>Next.js</li>
    <li>MongoDB</li>
    <li>React</li>
    <li>GitHub</li>
    <li>Vercel</li>
    <li>MAC/ Windows OS</li>
    <li>JIRA</li>
    <li>PostgreSQL</li>
    <li>Tailwind</li>
  </ul>
</div>

<div className="scroller" data-direction="right" data-speed="slow">

  <div className="scroller__inner">
    <img src="homepage.png" alt="" id="homepage"/>
    <img src="workout.png" alt="" id="workout"/>
    <img src="track progress.png" alt="" id="track-progress"/>
    <img src="about us.png" alt="" id="about-us"/>
    <img src="caloric intake.png" alt="" id="caloric-intake"/>
    <img src="body metrics.png" alt="" id="body-metrics"/>
    <img src="about us.png" alt="" id="about-us"/>
  </div>
</div>

  
<h1 className="BaltimoreDataCorps">
          <a 
            href="https://baltimore-crime-predicting.streamlit.app" 
            id="crime-link" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Crime
          </a> 
          and 
          <a 
            href="https://311mappeddata.streamlit.app" 
            id="grime-link" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Grime
          </a>
        </h1>

        <div className="scroller" data-speed="fast">
          <ul className="tag-list scroller__inner">
            <li>Python</li>
            <li>Pandas Import</li>
            <li>SQL</li>
            <li>Streamlit</li>
          </ul>
        </div>

        <div className="scroller" data-direction="left" data-speed="fast">
          <div className="scroller__inner">
            <img src="crime.png" alt="Crime" id="crime" />
            <img src="grime.png" alt="Grime" id="grime" />
          </div>
        </div>
  </main>
  </div>
);
};

export default Portfolio;