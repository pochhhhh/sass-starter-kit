import RecentWorks from '/js/recentworks.js';
import LoadingScreen from '/js/loadingscreen.js';
import Navbar from '/js/navbar.js';

var loadingScreen = new LoadingScreen();
var navbar = new Navbar();


if(window.location.pathname === '/' || window.location.pathname === '/index.html'){

  var recentWorks = new RecentWorks();
  document.querySelector('footer').style.display = 'none';

}


//^^ Add above if block to footer module, footer.js
