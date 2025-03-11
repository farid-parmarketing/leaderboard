const tabsData = [
  {
    name: "tab 1",
    link: "index.html",
    icons: "",
    img: "/assets/images/tabs/roobet.png",
  },
  {
    name: "tab 2",
    link: "index2.html",
    icons: "",
    img: "/assets/images/tabs/raingg.png",
  },
  {
    name: "tab 3",
    link: "index3.html",
    icons: "",
    img: "/assets/images/tabs/clashgg.png",
  },
  {
    name: "tab 4",
    link: "index4.html",
    icons: "",
    img: "/assets/images/tabs/empiredrop.png",
  },
  {
    name: "tab 5",
    link: "index5.html",
    icons: "",
    img: "/assets/images/tabs/csgobig.png",
  },
  {
    name: "tab 6",
    link: "index6.html",
    icons: "",
    img: "/assets/images/tabs/casesgg.png",
  },
];

const tabsGrid = document.getElementById("tabs");
let tabsBox = "";

const currentPage = window.location.pathname.split("/").pop();

tabsData.forEach((item) => {
  const isActive = item.link === currentPage ? "active" : "";

  tabsBox += `
      <div class="tab ${isActive}">
          <img src=${item.img} alt="tab-img" />
      </div>
    `;
});

tabsGrid.innerHTML = tabsBox;

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
