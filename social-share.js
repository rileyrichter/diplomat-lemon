const tweetButton = document.querySelector("#tweetShare");
const linkedInButton = document.querySelector("#liShare");
const facebookButton = document.querySelector("#fbShare");
const currentURL = window.location.href;
const title = document.querySelector("title").innerText;
const tweetURL = `https://twitter.com/intent/tweet?url=${currentURL}&text=${title}`;
const liURL = `https://www.linkedin.com/shareArticle?mini=true&url=${currentURL}&title=${title}`;
const fbURL = `https://www.facebook.com/sharer/sharer.php?u=${currentURL}`;

window.addEventListener("load", (event) => {
  tweetButton.addEventListener("click", () => {
    openShareWindow(tweetURL);
  });
  linkedInButton.addEventListener("click", () => {
    openShareWindow(liURL);
  });
  facebookButton.addEventListener("click", () => {
    openShareWindow(fbURL);
  });
});

// create a function to open the social media share window
function openShareWindow(url) {
  window.open(url, "Share", "width=600,height=400");
}
