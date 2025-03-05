const tabsData = [
  {
    name: "tab 1",
    link: "index1.html",
    icons: "",
    img: "",
  },
  {
    name: "tab 2",
    link: "index2.html",
    icons: "",
    img: "",
  },
  {
    name: "tab 3",
    link: "index3.html",
    icons: "",
    img: "",
  },
];

const tabsGrid = document.getElementById("tabs");
let tabsBox = "";

const currentPage = window.location.pathname.split("/").pop();

tabsData.map((item) => {
  const isActive = item.link === currentPage ? "glass" : "";

  tabsBox += `
      <div class="tab ${isActive}">
            <h2>${item.name}</h2>
      </div>
    `;
});

tabsGrid.innerHTML = tabsBox;
