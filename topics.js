// global vars
const journeyBanner = document.querySelector(".journey-banner");
const d = localStorage.getItem("journey");
const data = JSON.parse(d);
const cancelButton = document.querySelector(".journey-cancel");

// run thesse functions on page load
window.addEventListener("load", (event) => {
  // add a button click event listener to the cancel button
  cancelButton.addEventListener("click", cancelJourney);
  // if there is journey data in local storage
  if (localStorage.getItem("journey") !== null) {
    // if there is only one item left in the journey
    if (data.length === 1) {
      // show the resource banner and change the text
      // remove the journey from local storage
      journeyBanner.querySelector(".journey-banner-name").innerText = data[0].name;
      journeyBanner.querySelector(".journey-banner-next").innerText = "back to resources";
      journeyBanner.querySelector(".green-btn-resource").href = "/resources";
      journeyBanner.style.display = "block";
      journeyBanner.style.transition = "opacity 0.5s ease-in-out";
      journeyBanner.style.opacity = 1;
      localStorage.removeItem("journey");
    } else {
      // show the resource banner and change the text
      // remove the first item in the journey array
      // set the new array to local storage
      journeyBanner.querySelector(".journey-banner-name").innerText = data[0].name;
      journeyBanner.querySelector(".journey-banner-next").innerText = data[1].name;
      journeyBanner.querySelector(".green-btn-resource").href = data[1].location;
      journeyBanner.style.display = "block";
      journeyBanner.style.transition = "opacity 0.5s ease-in-out";
      journeyBanner.style.opacity = 1;
      data.shift(1, 1);
      localStorage.setItem("journey", JSON.stringify(data));
    }
  } else {
    // if there is no journey data in local storage
    // hide the banner
    journeyBanner.style.display = "none";
  }
});

// when a user clicks the cancel button
// remove the journey from local storage
// hide the banner
function cancelJourney() {
  localStorage.removeItem("journey");
  journeyBanner.style.display = "none";
}
