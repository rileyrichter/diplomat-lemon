// global vars
const trendingItems = document.querySelectorAll(".resources-trending-item-link");
const resourceButtonWrapper = document.querySelector(".resource-hero-button-wrapper");
const resourceButtons = resourceButtonWrapper.querySelectorAll(".green-btn-resource");
const trendingImage = document.querySelector(".resources-trending-image");
let trendCount = 1;
paths = [];

// run thesse functions on page load
window.addEventListener("load", (event) => {
  // clear local storage
  localStorage.removeItem("journey");
  // code for trending numbers
  trendingItems.forEach((item) => {
    item.addEventListener("mouseover", trendingHover);
    item.querySelector(".resources-trending-number").innerText = trendCount;
    item.querySelector(".resources-trending-number").style.opacity = 1;
    trendCount++;
  });
  trendingImage.src = trendingItems[0].querySelector(".trending-image").src;
  trendingImage.style.opacity = 1;
  // add event listener to the resource buttons
  resourceButtons.forEach((button) => {
    button.addEventListener("click", addToPath);
  });
  // add event listener to the lets go button
  document.querySelector("#letsgo").addEventListener("click", letsGo);
});

// use data attributes to add the resource to the paths object
// toggle the selected class on the button
function addToPath() {
  const obj = new Object();
  obj.name = this.dataset.name;
  obj.location = this.dataset.location;
  paths = paths.concat(obj);
  this.classList.add("selected");
}

// when a user click lets go set paths to local storage
// and redirect to the first resource in the object
// redirect to the first resource in the object
function letsGo() {
  if (paths.length === 0) {
    showNotification("You need to select at least one resource to continue");
  } else {
    localStorage.setItem("journey", JSON.stringify(paths));
    window.location = paths[0].location;
  }
}

// when a user hovers over a trending item
// change the image to the one in the data attribute
function trendingHover() {
  trendingImage.src = this.querySelector(".trending-image").src;
}

// show a notification if the user tries to continue without selecting a resource
function showNotification(message) {
  const notificationWindow = document.querySelector(".notification");
  notificationWindow.querySelector(".notification-text").innerText = message;
  notificationWindow.style.opacity = 0;
  notificationWindow.style.transition = "opacity 0.5s";
  notificationWindow.style.display = "block";
  setTimeout(() => {
    notificationWindow.style.opacity = 1;
  }, 500);
  setTimeout(() => {
    notificationWindow.style.opacity = 0;
    setTimeout(() => {
      notificationWindow.style.display = "none";
    }, 500);
  }, 5000);
}
