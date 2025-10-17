const timeElement = document.querySelector('[data-testid="test-user-time"]');

function updateTime() {
  const now = new Date();
  const formatted = now.toLocaleTimeString(); // shows time like 2:45:22 PM
  timeElement.textContent = `Current Time: ${formatted}`;
}

updateTime();
setInterval(updateTime, 1000);