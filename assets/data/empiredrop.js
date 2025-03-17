function updateTimer() {
  const now = new Date(); // Get current date and time

  const day = String(now.getDate()).padStart(2, "0"); // Get current day (1-31) & add leading 0
  const hours = String(now.getHours()).padStart(2, "0"); // Get current hour (00-23)
  const minutes = String(now.getMinutes()).padStart(2, "0"); // Get current minutes (00-59)
  const seconds = String(now.getSeconds()).padStart(2, "0"); // Get current seconds (00-59)

  // Select timer boxes and update values dynamically
  document.querySelector(".timer-box:nth-child(1) h2").textContent = day;
  document.querySelector(".timer-box:nth-child(2) h2").textContent = hours;
  document.querySelector(".timer-box:nth-child(3) h2").textContent = minutes;
  document.querySelector(".timer-box:nth-child(4) h2").textContent = seconds;
}

// Update timer every second
setInterval(updateTimer, 1000);

// Run immediately when page loads
updateTimer();

const winnersData = [
  {
    id: 1,
    rank: 1,
    name: "John Doe",
    img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    wagered: 2649,
    prize: 500,
    order: 2,
    icon: "https://farid-parmarketing.github.io/leaderboard/assets/images/icons/winner1.png",
  },
  {
    id: 2,
    rank: 2,
    name: "Alice Smith",
    img: "https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    wagered: 2380,
    prize: 450,
    order: 1,
    icon: "https://farid-parmarketing.github.io/leaderboard/assets/images/icons/winner2.png",
  },
  {
    id: 3,
    rank: 3,
    name: "Michael Johnson",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    wagered: 2150,
    prize: 400,
    order: 3,
    icon: "https://farid-parmarketing.github.io/leaderboard/assets/images/icons/winner3.png",
  },
  {
    id: 4,
    rank: 4,
    name: "Emily Davis",
    img: "",
    wagered: 1980,
    prize: 350,
  },
  {
    id: 5,
    rank: 5,
    name: "Robert Brown",
    img: "",
    wagered: 1845,
    prize: 300,
  },
  {
    id: 6,
    rank: 6,
    name: "Sophia Wilson",
    img: "",
    wagered: 1720,
    prize: 275,
  },
  {
    id: 7,
    rank: 7,
    name: "James Anderson",
    img: "",
    wagered: 1600,
    prize: 250,
  },
  {
    id: 8,
    rank: 8,
    name: "Olivia Martinez",
    img: "",
    wagered: 1495,
    prize: 225,
  },
  {
    id: 9,
    rank: 9,
    name: "William Thomas",
    img: "",
    wagered: 1380,
    prize: 200,
  },
  {
    id: 10,
    rank: 10,
    name: "Isabella Taylor",
    img: "",
    wagered: 1275,
    prize: 175,
  },
];

const winnersGrid = document.getElementById("empiredrop-winner-grid");
const winnersTable = document.getElementById("empiredrop-winners-table");

let winnersGridBox = "";
let winnersTableBox = "";

winnersData.slice(0, 3).map((item, index) => {
  winnersGridBox += `
        <div class="winner-card theme-bg order-md-${
          item.order
        }" data-aos="fade-up" data-aos-duration="1500">
        <div class="rank rank${index + 1}">
          <img src=${item.icon} />
        </div>

        <div class="winner-img">
          <img
            src=${item.img}
            alt=""
          />
        </div>
        <p class="winner-name">${item.name}</p>

        <div class="mt-3">
          <p class="text-uppercase text-muted">wagered</p>
          <p class="winner-wagered">Rs ${item.wagered}</p>
        </div>

        <div class="prize-box">
          <p class="winner-wagered">Rs ${item.prize}</p>
        </div>
      </div>
    `;
});
winnersGrid.innerHTML = winnersGridBox;

winnersData.slice(3, winnersData.length).map((item, index) => {
  winnersTableBox += `
        <div class="winners-table-body ${
          index === 6 ? "" : "mb-3"
        } theme-bg" data-aos="fade-up" data-aos-duration="1500">
          <div class="wt-rank">
            <p><span class="color1-text">#</span> ${item.rank}</p>
          </div>
          <div class="wt-name">
            <p>${item.name}</p>
          </div>
          <div class="wt-wagered">
            <p><span class="text-muted">WAGERED: </span><span class="color1-text">Rs</span> ${
              item.wagered
            }
            </p>
          </div>
          <div class="wt-prize">
            <p><span class="text-muted">Prize: </span><span class="color1-text">Rs</span> ${
              item.prize
            }
            </p>
          </div>
        </div>
    `;
});
winnersTable.innerHTML = winnersTableBox;

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.querySelector(".order-md-2").style.transform = "translateY(-50px)";
  }, 1000);
});
