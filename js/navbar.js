class Navbar{

  constructor(){

    this.toggler = document.querySelector('.navbar-toggler');
    this.events();

  }

  events(){

    var toggle = false;

    this.toggler.addEventListener('click', function(){

      if(!toggle){

      //document.querySelector('.navbar-toggle-background-overlay').style.opacity = "1";
      //document.querySelector('#body').style.overflow = "hidden";
      toggle = true;

    } else {

      //document.querySelector('.navbar-toggle-background-overlay').style.opacity = "0";
      //document.querySelector('#body').style.overflow = "scroll";
      toggle = false;

    }

    });

  }

  //Methods




}

export default Navbar;
