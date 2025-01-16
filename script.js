// Set the date we're counting down to
const countDownDate = new Date("Feb 1, 2025 00:00:00").getTime();

// Update the countdown every second
const countdownTimer = setInterval(function () {
  // Get today's date and time
  const now = new Date().getTime();

  // Calculate the distance between now and the start date
  const sinceStart = now - new Date("Dec 31, 2024 23:59:00").getTime();

  // Calculate the distance between now and the count down date
  const distance = countDownDate - now;

  // Calculations for days, hours, minutes and seconds since start
  const daysSinceStart = Math.floor(sinceStart / (1000 * 60 * 60 * 24));
  const hoursSinceStart = Math.floor(
    (sinceStart % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutesinceStart = Math.floor(
    (sinceStart % (1000 * 60 * 60)) / (1000 * 60)
  );

  // Calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  // Display the result in the element with id="countdown"
  document.getElementById("start").innerHTML = `
  <div>${daysSinceStart} days, ${hoursSinceStart} hours, ${minutesinceStart} minutes</div>
`;

  // Display the result in the element with id="countdown"
  document.getElementById("countdown").innerHTML = `
   <div>${days} days, ${hours} hours, ${minutes} minutes</div>
 `;

  // If the countdown is over, clear the interval and display a message
  if (distance < 0) {
    clearInterval(countdownTimer);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 30000);
