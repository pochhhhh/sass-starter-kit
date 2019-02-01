/*

Check time elapsed
After 3s passes, change DOM element styles
change DOM elements

DOM element style changes:

body element - set overflow to hidden while load then after, set overflow to visible
nav element - set visibility to hidden while load then after, set visibility to visible
loading-screen class - set visibility to visible while load then after, set visibility to hidden


*/


class LoadingScreen{

  //1. State

  constructor(){

    this.page = document.getElementById('body');
    this.loadingScreen = document.querySelector('.loading-screen');
    this.navbar = document.querySelector('.navbar');
    this.showcase = document.querySelector('.showcase');
    this.events();
    this.start();

  }

  //2. Events

  events(){

    this.navbar.addEventListener('click', this.start.bind(this));
    document.querySelector('.loading-screen').style.transition = "0s";
    document.querySelector('.loading-screen').style.background = "black";

  }

  //3. Methods

  start(){

    var change = this; //Make the data of 'this' passable to other methods

    function scrollUp(callback){

        setTimeout(function(){

          window.scrollTo(0, 0);

        }, 100);

        callback();

    }


    function load(){

    setTimeout(function(){

      /******************************************************************************

      The context of 'this' does not autmatically get passed from start() to
      the callback. Find a way to pass 'this' to the callback as an argument.

      *******************************************************************************/

      change.page.style.overflow = "scroll";
      change.loadingScreen.style.opacity = "0";
      change.navbar.style.visibility = "visible";

      if(window.location.pathname === "/" || window.location.pathname === "/index.html" || window.location.pathname === "/team.html"
      || window.location.pathname === "/vision.html" || window.location.pathname === "/vision.html"
      || window.location.pathname === "/contact.html"){

        change.showcase.style.opacity = "1";

      }

      if(window.location.pathname === "/works.html"){

        change.loadingScreen.style.opacity = "0.3";
        document.querySelector('.company-title').textContent = "";
        document.querySelector('.loading-screen').style.background = "none";
        document.querySelector('.loading-screen').style.zIndex = "0";
        document.querySelector('.loading-screen svg').style.position = "fixed";
        document.querySelector('#portfolio-list .container').style.visibility = "visible";




      }


    }, 3500);


    }

    scrollUp(load);


  }



}

export default LoadingScreen;
