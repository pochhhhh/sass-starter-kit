class RecentWorks{

//1. State

constructor(){

  this.previousButton = document.querySelector('.previous');
  this.nextButton = document.querySelector('.next');
  this.projectName = document.querySelector('#project-name');
  this.project1 = document.querySelector('#project-1');
  this.project2 = document.querySelector('#project-2');
  this.project3 = document.querySelector('#project-3');
  this.project4 = document.querySelector('#project-4');
  this.project5 = document.querySelector('#project-5');
  this.dot1 = document.querySelector('#dot-1');
  this.dot2 = document.querySelector('#dot-2');
  this.dot3 = document.querySelector('#dot-3');
  this.dot4 = document.querySelector('#dot-4');
  this.dot5 = document.querySelector('#dot-5');
  this.currentlyShowing = 0;
  this.currentStyle = window.getComputedStyle(this.project1);
  this.projects = [
  {
    name: 'Megalife',
    image: './img/featured-work-1.jpeg'

  },
  {
    name: 'Sapphire Resort',
    image: './img/featured-work-2.jpeg'

  },
  {
    name: 'Jameson Solicitors',
    image: './img/featured-work-3.jpeg'

  },
  {
    name: 'Bench Clothing',
    image: './img/featured-work-4.jpeg'

  },
  {
    name: 'Coca Cola',
    image: './img/featured-work-5.jpeg'

  }];

  this.events();

  /*

  Get current CSS properties of element with getComputedStyle.
  getComputedStyle returns an object of up-to-date styles. 'style.xyz' is mainly used to refer to inline CSS style

  */


}

//2. Events

events(){

  this.previousButton.addEventListener('click', this.showPrevious.bind(this));
  this.nextButton.addEventListener('click', this.showNext.bind(this));

}

//3. Methods

changeImage(){

  switch (this.currentlyShowing) {

    case 0:

      //change image here by setting the opacity to 1 for project2 and 0 for the rest
      this.project1.style.opacity = "1";
      this.project2.style.opacity = "0";
      this.project3.style.opacity = "0";
      this.project4.style.opacity = "0";
      this.project5.style.opacity = "0";
      this.projectName.innerHTML = this.projects[0].name;
      this.dot1.classList.add("active");
      this.dot2.classList.remove("active");


      break;

    case 1:

      //change image here by setting the opacity to 1 for the newly viewed project and 0 for the previous projects
      this.project1.style.opacity = "0";
      this.project2.style.opacity = "1";
      this.project3.style.opacity = "0";
      this.project4.style.opacity = "0";
      this.project5.style.opacity = "0";
      this.projectName.innerHTML = this.projects[1].name;
      this.dot2.classList.add("active");
      this.dot1.classList.remove("active");
      this.dot3.classList.remove("active");
      break;

    case 2:

      this.project1.style.opacity = "0";
      this.project2.style.opacity = "0";
      this.project3.style.opacity = "1";
      this.project4.style.opacity = "0";
      this.project5.style.opacity = "0";
      this.projectName.innerHTML = this.projects[2].name;
      this.dot3.classList.add("active");
      this.dot2.classList.remove("active");
      this.dot4.classList.remove("active");
      break;

    case 3:

      this.project1.style.opacity = "0";
      this.project2.style.opacity = "0";
      this.project3.style.opacity = "0";
      this.project4.style.opacity = "1";
      this.project5.style.opacity = "0";
      this.projectName.innerHTML = this.projects[3].name;
      this.dot4.classList.add("active");
      this.dot3.classList.remove("active");
      this.dot5.classList.remove("active");
      break;

    case 4:

      this.project1.style.opacity = "0";
      this.project2.style.opacity = "0";
      this.project3.style.opacity = "0";
      this.project4.style.opacity = "0";
      this.project5.style.opacity = "1";
      this.projectName.innerHTML = this.projects[4].name;
      this.dot5.classList.add("active");
      this.dot4.classList.remove("active");

      break;

    default:

  }


}

showPrevious(){

  if(this.currentlyShowing === 0){



  } else {

    this.currentlyShowing--;

    this.changeImage();

  }

}

showNext(){

  if(this.currentlyShowing >= this.projects.length - 1){


  } else {

    this.currentlyShowing++;
    this.changeImage();

  }


}


}

export default RecentWorks;
