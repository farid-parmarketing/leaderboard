const tabsData = [
  {
    name: "tab 1",
    link: "index.html",
    icons: "",
    img: "/assets/images/tabs/roobet.png",
  },
  {
    name: "tab 2",
    link: "raingg.html",
    icons: "",
    img: "/assets/images/tabs/raingg.png",
  },
  {
    name: "tab 3",
    link: "clashgg.html",
    icons: "",
    img: "/assets/images/tabs/clashgg.png",
  },
  {
    name: "tab 4",
    link: "empiredrop.html",
    icons: "",
    img: "/assets/images/tabs/empiredrop.png",
  },
  {
    name: "tab 5",
    link: "csgobig.html",
    icons: "",
    img: "/assets/images/tabs/csgobig.png",
  },
  {
    name: "tab 6",
    link: "casesgg.html",
    icons: "",
    img: "/assets/images/tabs/casesgg.png",
  },
];

const tabsGrid = document.querySelector(".tabs");
let tabsBox = "";

// Get current page filename from URL
const currentPage = window.location.pathname.split("/").pop() || "index.html";

tabsData.forEach((item) => {
  // Check if the current tab's link matches the current page
  const isActive = item.link === currentPage ? "active" : "";

  tabsBox += `
        <a href="${item.link}" class="tab ${isActive}">
            <img src="${item.img}" alt="tab-img" />
        </a>
      `;
});

// Insert tabs into the container
tabsGrid.innerHTML = tabsBox;

// Initialize Owl Carousel
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: false,
    margin: 8,
    nav: false,
    dots: false,
    responsive: {
      0: { items: 2 },
      768: { items: 3 },
      992: { items: 4 },
      1200: { items: 5 },
      1400: { items: 6 },
    },
  });
});
