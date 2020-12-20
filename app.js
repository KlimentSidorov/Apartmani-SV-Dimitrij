$(document).ready(function () {
  $('body').scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('.go-top').fadeIn(200);
    } else {
      $('.go-top').fadeOut(200);
    }
  });

  // Animate the scroll to top
  $('.go-top').click(function (event) {
    event.preventDefault();

    $('html, body').animate({ scrollTop: 0 }, 300);
  });
});

$(function () {
  const apikey = '3265874a2c77ae4a04bb96236a642d2f';

  const main = document.getElementById('main');

  const url = (Location) =>
    `https://api.openweathermap.org/data/2.5/weather?q=${Location}&appid=${apikey}`;

  async function getWeatherByLocation(Location) {
    const resp = await fetch(url(Location), { origin: 'cors' });
    const respData = await resp.json();

    console.log(respData);

    addWeatherToPage(respData);
  }

  getWeatherByLocation('Ohrid');

  function addWeatherToPage(data) {
    const temp = KtoC(data.main.temp);

    const weather = document.createElement('div');
    weather.classList.add('weather');

    weather.innerHTML = `
      
            <h3> Ohrid</h3>
          <h2><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"  /> ${temp}°C <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /></h2>
          <small>${data.weather[0].main}</small>
          
      `;

    main.appendChild(weather);
  }

  function KtoC(K) {
    return Math.floor(K - 273.15);
  }
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

const toggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

toggle.addEventListener('click', function () {
  if (siteNav.classList.contains('site-nav--open')) {
    siteNav.classList.remove('site-nav--open');
    toggle.classList.remove('open');

    siteNav.classList.add('site-nav--closed');
  } else {
    siteNav.classList.remove('site-nav--closed');
    toggle.classList.add('open');

    siteNav.classList.add('site-nav--open');
  }
});

$(document).on('click', '[data-toggle="lightbox"]', function (event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});

$(document).on('show.bs.modal', '.modal', function () {
  $('.footer').css({
    'z-index': '1',
  });
});

$(document).on('click', '.footerBtn1', function () {
  $('.footer').css({
    'z-index': '10000',
  });
});

$(document).on('click', '.footerBtn12', function () {
  $('.footer').css({
    'z-index': '10000',
  });
});

$(document).on('click', '.marketOldTown', function () {
  $('.footer').css({
    'z-index': '10000',
  });
});

$(document).on('click', '.navbar-nav1', function () {
  $('.menu-toggle').css({
    'z-index': '1000',
  });
  $('.img-responsive').css({
    'z-index': '999',
  });
});

const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });

tl.to('.text', { y: '0%', duration: 1, stagger: 0.25 });
tl.to('.slider', { y: '-100%', duration: 1.5, delay: 0.5 });
tl.to('.intro', { y: '-100%', duration: 1 }, '-=1');
