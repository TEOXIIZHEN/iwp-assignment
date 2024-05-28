document.addEventListener('DOMContentLoaded', function () {
    const wrapper = document.querySelector('.wrapper');
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');
    const adminLink = document.querySelector('.admin-link');
    const btnPopup = document.querySelector('.login-but');
    const iconClose = document.querySelector('.icon-close');


    registerLink.addEventListener('click', function(event) {
        event.preventDefault(); 
        wrapper.classList.add('active');
    });

    loginLink.addEventListener('click', function(event) {
        event.preventDefault(); 
        wrapper.classList.remove('active');
    });

    

    wrapper.classList.add('active-popup');
    

    iconClose.addEventListener('click', function(event) {
        event.preventDefault(); 
        wrapper.classList.remove('active-popup');
    });


});

document.getElementById("openSidebar").addEventListener("click", function() {
    document.getElementById("header1").classList.add("active");
});

document.getElementById("close").addEventListener("click", function() {
    document.getElementById("header1").classList.remove("active");
});

// Toggle the slide-bar when clicking the shopping cart icon
document.getElementById("openShoppingCart").addEventListener("click", function() {
    document.getElementById("header1").classList.toggle("active");

    
});

document.addEventListener("click", function(event) {
    const header = document.getElementById("header1");
    const openSidebar = document.getElementById("openSidebar");
    const openShoppingCart = document.getElementById("openShoppingCart");

    if (!header.contains(event.target) && !openSidebar.contains(event.target) && !openShoppingCart.contains(event.target)) {
        header.classList.remove("active");
    }
});

var cardDrop = document.getElementById('card-dropdown');
var activeDropdown;
cardDrop.addEventListener('click',function(){
  var node;
  for (var i = 0; i < this.childNodes.length-1; i++)
    node = this.childNodes[i];
    if (node.className === 'dropdown-select') {
      node.classList.add('visible');
       activeDropdown = node; 
    };
})

window.onclick = function(e) {
  console.log(e.target.tagName)
  console.log('dropdown');
  console.log(activeDropdown)
  if (e.target.tagName === 'LI' && activeDropdown){
    if (e.target.innerHTML === 'Master Card') {
      document.getElementById('credit-card-image').src = 'https://dl.dropboxusercontent.com/s/2vbqk5lcpi7hjoc/MasterCard_Logo.svg.png';
          activeDropdown.classList.remove('visible');
      activeDropdown = null;
      e.target.innerHTML = document.getElementById('current-card').innerHTML;
      document.getElementById('current-card').innerHTML = 'Master Card';
    }
    else if (e.target.innerHTML === 'American Express') {
         document.getElementById('credit-card-image').src = 'https://dl.dropboxusercontent.com/s/f5hyn6u05ktql8d/amex-icon-6902.png';
          activeDropdown.classList.remove('visible');
      activeDropdown = null;
      e.target.innerHTML = document.getElementById('current-card').innerHTML;
      document.getElementById('current-card').innerHTML = 'American Express';      
    }
    else if (e.target.innerHTML === 'Visa') {
         document.getElementById('credit-card-image').src = 'https://dl.dropboxusercontent.com/s/ubamyu6mzov5c80/visa_logo%20%281%29.png';
          activeDropdown.classList.remove('visible');
      activeDropdown = null;
      e.target.innerHTML = document.getElementById('current-card').innerHTML;
      document.getElementById('current-card').innerHTML = 'Visa';
    }
  }
  else if (e.target.className !== 'dropdown-btn' && activeDropdown) {
    activeDropdown.classList.remove('visible');
    activeDropdown = null;
  }
}

