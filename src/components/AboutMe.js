import React, { useEffect } from 'react';
import { gsap, Power4, Power2 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/AboutMe.css';

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  useEffect(() => {

    const iphone = document.querySelector(".iphone");
    const widgets = document.querySelectorAll(".widgets");

    gsap.set(iphone, { x: -450, rotation: 90 });
    gsap.set(widgets, { opacity: 0, scale: 0 });

    function iPhoneAnimation() {
      const tl = gsap.timeline({ defaults: { duration: 1 } });
      tl.to(iphone, { x: 0 })
        .to(iphone, { rotation: 0, scale: 0.9 })
        .to(iphone, { duration: 3, scale: 1 });
      return tl;
    }

    function widgetAnimation() {
      const tl = gsap.timeline();
      tl.to(widgets, { duration: 0, opacity: 1 });
      return tl;
      
    }

    const animations = [
      {
        selector: "#app-store",
        duration: 3,
        scale: 1.4,
        x: 520,
        y: 100,
        ease: Power4.easeOut
      },
      {
        selector: "#screen-time",
        duration: 3,
        scale: 0.9,
        x: -500,
        y: -300,
        ease: Power2.easeOut
      },
      {
        selector: "#weather",
        duration: 3,
        scale: 1.1,
        x: -400,
        y: 350,
        ease: Power4.easeOut
      },
      {
        selector: "#stocks",
        duration: 3,
        scale: 0.9,
        x: 530,
        y: -170,
        ease: Power4.easeOut
      },
      {
        selector: "#fitness",
        duration: 3,
        scale: 1.1,
        x: -350,
        y: -100,
        ease: Power2.easeOut
      },
      {
        selector: "#find-my",
        duration: 3,
        scale: 1.1,
        x: 400,
        y: -360,
        ease: Power4.easeOut
      },
      {
        selector: "#calendar",
        duration: 3,
        scale: 0.9,
        x: -630,
        y: 0,
        ease: Power2.easeOut
      },
    
      {
        selector: "#wallet",
        duration: 3,
        scale: 1,
        x: -280,
        y: 100,
        ease: Power4.easeOut
      },
      {
        selector: "#apple-tv",
        duration: 3,
        scale: 1,
        x: 500,
        y: 350,
        ease: Power4.easeOut
      },
      {
        selector: "#sleep",
        duration: 3,
        scale: 0.9,
        x: 270,
        y: -50,
        ease: Power2.easeOut
      },
      {
        selector: "#music",
        duration: 3,
        scale: 0.3,
        x: 300,
        y: 120,
        ease: Power2.easeOut
      },
      {
        selector: "#crumbl",
        duration: 3,
        scale: 0.3,
        x: -285,
        y: 120,
        ease: Power4.easeOut
      },
      {
        selector: "#born",
        duration: 3,
        scale: 0.3,
        x: -285,
        y: 120,
        ease: Power4.easeOut
      }

    ];
    const startTime = 2;
    const masterTimeline = gsap.timeline();
    masterTimeline.add(iPhoneAnimation()).add(widgetAnimation(), startTime);

    animations.forEach((animation, index) => {
      const { selector, duration, scale, x, y, ease } = animation;
      const element = document.querySelector(selector);
      masterTimeline.add(
        gsap.to(element, { duration, scale, x, y, ease }),
        startTime + (index % 3) / 2
      );
    });

    ScrollTrigger.create({
      animation: masterTimeline,
      trigger: ".animation",
      scrub: 1,
      pin: true
      // markers: true
    });
  }, []); // Empty dependency array ensures this effect runs once after the initial render

  return (
    
    <div className="page">
       <h1 className="about-header">About Me</h1>
      <div className="simon-picture">
        <img src="simon-pic.jpeg" alt="Profile" />
      </div>
      <div class="name-header"><h2>Simon Yoseph</h2>
          <h1 className ="under-name1">Full Stack </h1>
          <h1 className ="under-name1"> and </h1> 
          <h1 className ="under-name"> Web Developer</h1>
        </div>
      
 
      <h4></h4>
      <section className='animation'>
        <img className="iphone" src="https://assets.codepen.io/8292695/iphone-14.svg" alt="" />
        <div><h3 className ="welcome"> Welcome to my World </h3> </div>
        <img id='app-store' className='widgets' src="https://assets.codepen.io/8292695/appstore-widget.svg" alt="" />
        <img id='screen-time' className='widgets' src="https://assets.codepen.io/8292695/screen-time-widget.svg" alt="" />
        <img id='weather' className='widgets' src="https://assets.codepen.io/8292695/weather-widget.svg" alt="" />
        <img id='stocks' className='widgets' src="https://assets.codepen.io/8292695/stocks-widget.svg" alt="" />
        <img id='calendar' className='widgets' src="https://assets.codepen.io/8292695/calendar-widget.svg" alt="" />
        <img id='fitness' className='widgets' src="https://assets.codepen.io/8292695/fitness-widget.svg" alt="" />
        <img id='find-my' className='widgets' src="https://assets.codepen.io/8292695/find-my-widget.svg" alt="" />
        <img id='sleep' className='widgets' src="https://assets.codepen.io/8292695/sleep-widget.svg" alt="" />
        <img id='apple-tv' className='widgets' src="https://assets.codepen.io/8292695/apple-tv.svg" alt="" />
        <img id='music' className='widgets'  src="music.png" alt="Profile" />
        <img id='crumbl' className='widgets'  src="crumbl.png" alt="Profile" />
        <div id='socials' className='widgets'>
        </div>
        
      </section>
            <div className="label">

              <h3>I was born in Virginia and raised in Maryland and went to highschool in DC. The DMV is my home. My parents are ethiopian and have instilled the culture within me. I can speak Amharic, not well, but I understand it well. 
                Hobbies of mine are recording and editing videos whether it is gym related or BTS. I also like to work on my car since it is a 2000 BMW E46.</h3>
       </div>
          </div>
    
  );
  
};

export default AboutMe;