// script.js
// document.getElementById("bookingBtn").addEventListener("click", function () {
//   // Add booking functionality here (e.g., display booking form)
//   alert("Booking functionality will be implemented soon!");
// });

// document
//   .getElementById("contactForm")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();
//     // Add code to handle form submission (e.g., send email)
//     alert("Message sent! We'll get back to you soon.");
//   });

// /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// const links = document.querySelectorAll("div ul li a");
// const navLinks = {};
// const sections = document.querySelectorAll("section[id]");

// // Preprocess links for direct access
// links.forEach((link) => {
//   const sectionId = link.getAttribute("href");
//   navLinks[sectionId] = link;
// });

// console.log(navLinks);
// function findTopSection(sections) {
//   let minDistance = Number.MAX_VALUE;
//   let topSection = null;

//   sections.forEach((section) => {
//     const rect = section.getBoundingClientRect();
//     const distance = Math.abs(rect.top);

//     if (distance < minDistance) {
//       minDistance = distance;
//       topSection = section;
//     }
//   });

//   return topSection;
// }

// window.addEventListener("scroll", () => {
//   const top = findTopSection(sections);
//   links.forEach((link) => {
//     const sectionId = section.getAttribute("id");
//     if (section === top) {
//       console.log(navLinks);
//       navLinks[sectionId].classList.add("active-link");
//     } else {
//       navLinks[sectionId].classList.remove("active-link");
//     }
//   });
// });

let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener(
  "scroll",
  () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    console.log(`${scrollTop} and ${lastScrollTop}`);

    if (scrollTop > lastScrollTop) {
      // Scrolling down
      navbar.classList.add("hide");
    } else {
      // Scrolling up
      navbar.classList.remove("hide");
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
  },
  false
);

// function scrollActive() {
//   const scrollY = window.pageYOffset;

//   sections.forEach((current) => {
//     const sectionHeight = current.offsetHeight,
//       sectionTop = current.offsetTop - 58,
//       sectionId = current.getAttribute("id");

//     if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//       document
//         .querySelector(".navLink a[href*=" + sectionId + "]")
//         .classList.add("active-link");
//     } else {
//       document
//         .querySelector(".navLink a[href*=" + sectionId + "]")
//         .classList.remove("active-link");
//     }
//   });
// }
