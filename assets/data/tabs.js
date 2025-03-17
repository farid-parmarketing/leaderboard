const tabsData = [
  {
    name: "roobet",
    link: "index.html",
    icons: "",
    img: "https://farid-parmarketing.github.io/leaderboard/assets/images/tabs/roobet.png",
  },
  {
    name: "raingg",
    link: "raingg.html",
    icons: "",
    img: "https://farid-parmarketing.github.io/leaderboard/assets/images/tabs/raingg.png",
  },
  {
    name: "clashgg",
    link: "clashgg.html",
    icons: "",
    img: "https://farid-parmarketing.github.io/leaderboard/assets/images/tabs/clashgg.png",
  },
  {
    name: "empiredrop",
    link: "empiredrop.html",
    icons: "",
    img: "https://farid-parmarketing.github.io/leaderboard/assets/images/tabs/empiredrop.png",
  },
  {
    name: "csgobig",
    link: "csgobig.html",
    icons: "",
    img: "https://farid-parmarketing.github.io/leaderboard/assets/images/tabs/csgobig.png",
  },
  {
    name: "casesgg",
    link: "casesgg.html",
    icons: "",
    img: "https://farid-parmarketing.github.io/leaderboard/assets/images/tabs/casesgg.png",
  },
];

const tabsGrid = document.querySelector(".tabs");
let tabsBox = "";

// Get current page filename from URL
const currentPage = window.location.pathname.split("/").pop() || "index.html";

tabsData.forEach((item, index) => {
  // Check if the current tab's link matches the current page
  const isActive = item.link === currentPage ? "active" : "";

  tabsBox += `
        <a href="${item.link}" class="tab ${item.name} ${isActive}" data-index="${index}">
            <img src="${item.img}" alt="tab-img" />
        </a>
      `;
});

// Insert tabs into the container
tabsGrid.innerHTML = tabsBox;

// Initialize Owl Carousel
$(document).ready(function () {
  const owl = $(".owl-carousel");

  owl.owlCarousel({
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

  // Find the active tab and center it in the carousel
  setTimeout(() => {
    const activeTab = $(".tab.active").parent().index();
    if (activeTab !== -1) {
      owl.trigger("to.owl.carousel", [activeTab, 300, true]); // Scroll to active tab
    }
  }, 500);
});
