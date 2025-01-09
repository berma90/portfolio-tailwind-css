//Navbar
window.onscroll= function(){
    const header=document.querySelector('header');
    const fixedNav=header.offsetTop;
    const toTop= document.querySelector('#to-top');

    if (window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else{
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
}

//Hamburger
const ham = document.querySelector('#ham');
const navMenu=document.querySelector('#nav-menu');

ham.addEventListener('click',function(){
    ham.classList.toggle('ham-active');
    navMenu.classList.toggle('hidden');
});


//klik luar hamburger
window.addEventListener('click',function (e){
    if(e.target != ham && e.target != navMenu) {
        ham.classList.remove('ham-active');
        navMenu.classList.add('hidden');
    }
})



// Darkmode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
  if (darkToggle.checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    html.classList.remove('dark');
    localStorage.theme = 'light';
  }
});

// pindahkan posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}

// slider

    const quotes = document.querySelectorAll('#quoteSlider li');
    let currentIndex = 0;

    function showQuote(index) {
        quotes.forEach((quote, i) => {
            quote.classList.toggle('hidden', i !== index);
        });
    }

    function nextQuote() {
        currentIndex = (currentIndex + 1) % quotes.length;
        showQuote(currentIndex);
    }

    function prevQuote() {
        currentIndex = (currentIndex - 1 + quotes.length) % quotes.length;
        showQuote(currentIndex);
    }

    document.getElementById('next').addEventListener('click', nextQuote);
    document.getElementById('prev').addEventListener('click', prevQuote);

    // Automatically change quotes every 5 seconds
    setInterval(nextQuote, 5000);

    // Show the first quote initially
    showQuote(currentIndex);
