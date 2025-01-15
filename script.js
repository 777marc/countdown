// Set the date we're counting down to
const countDownDate = new Date("Feb 1, 2025 00:00:00").getTime();

// Update the countdown every second
const countdownTimer = setInterval(function () {
  // Get today's date and time
  const now = new Date().getTime();

  // Calculate the distance between now and the count down date
  const distance = countDownDate - now;

  // Calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  // Display the result in the element with id="countdown"
  document.getElementById("countdown").innerHTML = `
   <div>${days} days, ${hours} hours, ${minutes} minutes</div>
 `;

  // If the countdown is over, clear the interval and display a message
  if (distance < 0) {
    clearInterval(countdownTimer);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);
