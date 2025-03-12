const tabsData = [
  {
    name: "tab 1",
    link: "index.html",
    icons: "",
    img: "/assets/roobet/images/tabs/roobet.png",
    active: false,
  },
  {
    name: "tab 2",
    link: "raingg.html",
    icons: "",
    img: "/assets/roobet/images/tabs/raingg.png",
    active: true,
  },
  {
    name: "tab 3",
    link: "index3.html",
    icons: "",
    img: "/assets/roobet/images/tabs/clashgg.png",
    active: false,
  },
  {
    name: "tab 4",
    link: "index4.html",
    icons: "",
    img: "/assets/roobet/images/tabs/empiredrop.png",
    active: false,
  },
  {
    name: "tab 5",
    link: "index5.html",
    icons: "",
    img: "/assets/roobet/images/tabs/csgobig.png",
    active: false,
  },
  {
    name: "tab 6",
    link: "index6.html",
    icons: "",
    img: "/assets/roobet/images/tabs/casesgg.png",
    active: false,
  },
];

const tabsGrid = document.getElementById("tabs");
let tabsBox = "";

tabsData.forEach((item) => {
  tabsBox += `
      <a href=${item.link} class="tab ${item.active === true ? "active" : ""}">
          <img src=${item.img} alt="tab-img" />
      </a>
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
