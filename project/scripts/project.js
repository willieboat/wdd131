document.getElementById('bookingForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const vehicle = document.getElementById('vehicle').value;
  const start = document.getElementById('start').value;
  const end = document.getElementById('end').value;

  const confirmation = `
      Thank you, ${name}!<br>
      Your ${vehicle} is booked from ${start} to ${end}.
    `;

  document.getElementById('confirmation').innerHTML = confirmation;
  this.reset();
});
