document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /**
   * Animation on scroll function and init
   */
  AOS.init({
    once: false,
  });

  /**
   * Preloader
   */
  const animate = document.querySelector(".animate-bottom");
  const preloader = document.querySelector("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  /**
   * Sticky Header
   */

  var skicky = document.querySelector(".sticky");
  var navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", scrolFunction);

  function scrolFunction() {
    if (window.scrollY > 100) {
      skicky.classList.add("actives");
    } else {
      skicky.classList.remove("actives");
    }
  }

  /**
   * Scroll Tracker
   */

  window.onscroll = function () {
    let winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  };

  /**
   * Dark and Light Themes
   */

  const menu = document.querySelector("#menu");
  const bg = document.querySelector("body");
  const home = document.querySelector("#home");
  var navbar = document.querySelector(".navbar");
  var skicky = document.querySelector(".sticky");
  var skills1 = document.querySelector(".skills");
  var skills2 = document.querySelector("skills-section");
  var skillscontainer = document.querySelector(".skills-container");
  var skillscontainerH3 = document.querySelector(".skills-container h3");
  var skills = document.querySelector(".skills-sm");
  var about = document.querySelector("#about");
  var abouth3 = document.querySelector("#about h3");
  var education = document.querySelector("#education");
  var educationh1 = document.querySelector("#education h1");
  var portfolio = document.querySelector("#portfolio");
  var portfolioh1 = document.querySelector("#portfolio h1");
  var servicesh1 = document.querySelector("#services h1");
  var load = document.querySelector("#portfolio .btn");
  var cta = document.querySelector("#cta");
  var contact = document.querySelector("#contact");
  var testimonials = document.querySelector("#testimonials");
  var Cards = document.querySelectorAll(".card");
  var projects = document.querySelectorAll("#projects h1");

  // var header =document.querySelector('h1');

  menu.onclick = function () {
    // header = document.getElementsByTagName(header);
    this.classList.toggle("bi-moon-fill");
    bg.classList.toggle("bg-dark");
    bg.classList.toggle("text-white");
    home.classList.toggle("text-white");
    skicky.classList.toggle("bg-dark");
    navbar.classList.toggle("text-white");
    skillscontainer.classList.toggle("bg-dark");
    skillscontainerH3.classList.toggle("text-white");
    skills.classList.toggle("bg-dark");
    skills1.classList.toggle("bg-dark");
    skills2.classList.toggle("bg-dark");
    about.classList.toggle("bg-dark");
    abouth3.classList.toggle("text-white");
    education.classList.toggle("bg-dark");
    portfolio.classList.toggle("bg-dark");
    educationh1.classList.toggle("text-white");
    portfolioh1.classList.toggle("text-white");
    servicesh1.classList.toggle("text-white");
    load.classList.toggle("text-white");
    cta.classList.toggle("bg-secondary");
    contact.classList.toggle("text-white");
    // testimonials.classList.toggle('text-white');
    // testimonialsCards.classList.toggle('text-white');
    Cards.classList.toggle("bg-secondary");
    projectsh1.classList.toggle("text-white");
  };

  /**
   * Emailjs -- send email to gmail
   */
  // function sendMesssage() {
  //   (function () {
  //     emailjs.init("-L8CRnYawO-XisnMj");
  //   })();
  //   var serviceID = "service_h67kaah";
  //   var templateID = "template_rom093r";
  //   var params = {
  //     sendername: document.querySelector("#name").value,
  //     senderemail: document.querySelector("#email").value,
  //     subject: document.querySelector("#subject").value,
  //     message: document.querySelector("#message").value,
  //   };

  //   emailjs.send(serviceID, templateID, params)
  //     .then(res => {
  //       alert('Thank you,' + params['sendername'] + '! Your message has been sent')
  //     })
  //     .catch(function (error) {
  //       console.error('Error sending message:', error);
  //       alert('Oops! Something went wrong. Please try again later.');
  //     });
  // }

  // function sendMessage() {
  //   event.preventDefault(); // Prevents the default form submission

  //   emailjs.init("-L8CRnYawO-XisnMj");

  //   var serviceID = "service_h67kaah";
  //   var templateID = "template_rom093r";
  //   var params = {
  //     sendername: document.querySelector("#name").value,
  //     senderemail: document.querySelector("#email").value,
  //     subject: document.querySelector("#subject").value,
  //     message: document.querySelector("#message").value,
  //   };

  //   emailjs
  //     .send(serviceID, templateID, params)
  //     .then(function (response) {
  //       alert(
  //         "Thank you, " + params["sendername"] + "! Your message has been sent."
  //       );
  //       // You can optionally reset the form fields here if needed
  //     })
  //     .catch(function (error) {
  //       console.error("Error sending message:", error);
  //       alert("Oops! Something went wrong. Please try again later.");
  //     });

  //   return false; // Prevents the form from being submitted
  // }




  function sendMessage() {
    event.preventDefault(); // Prevents the default form submission

    emailjs.init("-L8CRnYawO-XisnMj");

    var serviceID = "service_h67kaah";
    var templateID = "template_rom093r";
    var params = {
        sendername: document.querySelector("#name").value,
        senderemail: document.querySelector("#email").value,
        subject: document.querySelector("#subject").value,
        message: document.querySelector("#message").value,
    };

    emailjs.send(serviceID, templateID, params)
        .then(function (response) {
            // Display success alert
            document.getElementById("success-alert").classList.add("show");
            // Optional: Reset form fields
            document.querySelector("form").reset();
        })
        .catch(function (error) {
            console.error('Error sending message:', error);
            // Display error alert
            document.getElementById("error-alert").classList.add("show");
        });

    return false; // Prevents the form from being submitted
}

});
