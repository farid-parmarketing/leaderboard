const tabsData = [
  { name: "tab 1", link: "index.html", icons: "", img: "" },
  { name: "tab 2", link: "index2.html", icons: "", img: "" },
  { name: "tab 3", link: "index3.html", icons: "", img: "" },
  { name: "tab 4", link: "index4.html", icons: "", img: "" },
  { name: "tab 5", link: "index5.html", icons: "", img: "" },
  { name: "tab 6", link: "index6.html", icons: "", img: "" },
];

const tabsGrid = document.getElementById("tabs");
let tabsBox = "";

const currentPage = window.location.pathname.split("/").pop();

tabsData.forEach((item) => {
  const isActive = item.link === currentPage ? "active" : "";

  tabsBox += `
      <div class="tab ${isActive}">
          <h2>${item.name}</h2>
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
      1000: { items: 3 },
    },
  });
});
