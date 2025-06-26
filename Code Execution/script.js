let ticket = document.querySelector(".ticket-cont");
let colors = ["lightpink", "lightgreen", "lightblue", "black"];

handleColor(ticket)




function handleColor(ticket) {
  let ticketColorBand = ticket.querySelector(".ticket-color");

  ticketColorBand.addEventListener("click", function () {
    // Write code to select the next color from the colors array here--
 
let currentColor = colors.find(color => ticketColorBand.classList.contains(color));

  // Determine the next color
  let currentIndex = colors.indexOf(currentColor);
  let nextIndex = (currentIndex + 1) % colors.length;
  let nextColor = colors[nextIndex];

  // Remove the current color class and add the next color class
  ticketColorBand.classList.remove(currentColor);
  ticketColorBand.classList.add(nextColor);
});

}
