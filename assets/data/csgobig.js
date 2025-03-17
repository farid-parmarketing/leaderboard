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
