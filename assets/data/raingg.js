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

fetch("http://127.0.0.1:5500/assets/json/raingg.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((winnersData) => {
    const winnersGrid = document.getElementById("raingg-winner-grid");
    const winnersTable = document.getElementById("raingg-winners-table");

    let winnersGridBox = "";
    let winnersTableBox = "";

    winnersData.slice(0, 3).forEach((item, index) => {
      winnersGridBox += `
            <div class="winner-card theme-bg order-md-${
              item.order
            }" data-aos="fade-up" data-aos-duration="1500">
              <div class="rank rank${index + 1}">
                <img src=${item.icon} />
              </div>

              <div class="winner-img">
                <img src=${item.img} alt="" />
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

    winnersData.slice(3, winnersData.length).forEach((item, index) => {
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
                }</p>
              </div>
              <div class="wt-prize">
                <p><span class="text-muted">Prize: </span><span class="color1-text">Rs</span> ${
                  item.prize
                }</p>
              </div>
            </div>
        `;
    });

    winnersTable.innerHTML = winnersTableBox;

    // 🛑 Ensure animation runs **after** the DOM is updated
    setTimeout(() => {
      const element = document.querySelector(".order-md-2");
      if (element) {
        element.style.transform = "translateY(-50px)";
      }
    }, 1000);
  })
  .catch((error) => console.error("Error fetching JSON:", error));
