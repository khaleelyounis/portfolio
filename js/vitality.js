// Load WOW.js on non-touch devices
var isPhoneDevice = "ontouchstart" in document.documentElement;
$(document).ready(function () {
  if (isPhoneDevice) {
    //mobile
  } else {
    //desktop
    // Initialize WOW.js
    wow = new WOW({
      offset: 50
    })
    wow.init();
  }
});

(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 69)
        }, 500, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  //Close responsive menu when user scrolls away from navbar
  $(window).scroll(function () {
    if ($('.navbar-collapse').hasClass('show')) {
      $('.navbar-collapse').collapse('hide');
    }
  })


  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 70
  });

  // Collapse the navbar when page is scrolled
  $(window).scroll(function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  });

  // Activates floating label headings for the contact form
  $("body").on("input propertychange", ".floating-label-form-group", function (e) {
    $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
  }).on("focus", ".floating-label-form-group", function () {
    $(this).addClass("floating-label-form-group-with-focus");
  }).on("blur", ".floating-label-form-group", function () {
    $(this).removeClass("floating-label-form-group-with-focus");
  });

  //Modal information object
  var portfolioInfo = {
    liveFaceOff: {
      title: 'Live Face Off',
      image: 'img/creative/portfolio/grid/livefaceoff.png',
      description: `<p>Live Face Off allows friends and family to connect with one another via webcam and chat to enjoy some time together. The application features two modes of gameplay, with more to come in the future. The mission behind Live Face Off is to give just about anyone the ability to easily login and rekindle old bonds or make new ones. We wanted there to be more than one way of logging in, that way even your grandparents can join in on the fun. Our focus is to take this application to the next level by continuously creating new content for users to try out, and also give more incentives by implementing achievements and an online matchmaking system.</p><p>My contribution to Live Face Off was developing the backend using Node.js and constructing the database using MongoDB. I also helped out with routing some of the React components, and by creating the About page.</p>`,
      links: ["https://livefaceoff.com", "https://github.com/stallenvp"]
    },
    hearthstoneBattle: {
      title: 'Hearthstone Battle',
      image: 'img/creative/portfolio/grid/hearthstone.png',
      description: `<p>Hearthstone Battle is based on one of Blizzard’s top grossing games, Hearthstone. It is a single or multiplayer experience that challenges the user(s) to correctly match 9 pairs of cards with limited chances. You are given the choice of choosing your deck based on every class available in Hearthstone: Mage, Paladin, etc. In single-player mode if you lose all of your health points, you lose the match and can restart; however, in multiplayer mode, you will be playing against each other with aims of taking down the opponent's life points.</p><p> I am the sole developer on this application, and in future patches will be including a backend allowing for an even more immersive experience.</p>`,
      links: ["https://github.com/stallenvp", "https://github.com/stallenvp"]
    },
    beetsAndEats: {
      title: 'Beets & Eats',
      image: 'img/creative/portfolio/grid/beetsandeats.png',
      description: `<p>Beets & Eats is an on the go event planner that combines restaurants, breweries, and local events for an easy night out. To use: simply input your location or use the geolocation button, choose an event you wish to go to, and then use the map to select a place to grab some food and drinks at.</p><p>My role during this 48-hour hackathon was to gather all the information used to populate the restaurants and breweries from yelp and format it in a way that could be used throughout the entire application. I also helped create the landing page, and put together a few pieces for the google map.`,
      links: ["https://github.com/stallenvp", "https://github.com/stallenvp"]
    }
  }

  function presentModalInformation() {
    var projectInfo = $(this).closest('.portfolio-div').attr('data-title');
    var projectTitle = portfolioInfo[projectInfo].title;
    var projectDescription = portfolioInfo[projectInfo].description;
    var projectImage = portfolioInfo[projectInfo].image;
    var liveLink = portfolioInfo[projectInfo].links[0];
    var gitHubLink = portfolioInfo[projectInfo].links[1];
    $("#portfolioModal").find('.modal-title').text(projectTitle);
    $("#portfolioModal").find('.modal-body .description').html(projectDescription);
    $("#portfolioModal").find('.modal-body img').attr('src', projectImage);
    $("#portfolioModal").find('.modal-body .live').attr('href', liveLink);
    $("#portfolioModal").find('.modal-body .github').attr('href', gitHubLink);
    $('#portfolioModal').modal('show');
  }
  //portfolio Modal Click Handler
  $('.portfolio-wrapper').on('click', presentModalInformation);

  // Vide - Video Background Settings
  $('header.video').vide({
    mp4: "mp4/camera.mp4",
    poster: "img/agency/backgrounds/bg-mobile-fallback.jpg"
  }, {
      posterType: 'jpg'
    });

})(jQuery); // End of use strict
