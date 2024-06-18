/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!****************************************!*\
  !*** ./src/test_frontend/src/index.js ***!
  \****************************************/
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});

/**
 * Plug wallet integration
 */

// Initialises the application listeners and handlers
function main() {
  const button = document.querySelector('#Buy-cuddle');
  button.addEventListener("click", onButtonPress);
}

async function onButtonPress() {
  const hasAllowed = await window.ic.plug.requestConnect();

  if (hasAllowed) {
    console.log('Plug wallet is connected');
    // Replace this URL with the actual URL of your token swap page
    const tokenSwapUrl = "https://app.icpswap.com/swap?input=ryjl3-tyaaa-aaaaa-aaaba-cai&output=iuuy5-wiaaa-aaaam-acriq-cai"; 
    window.location.href = tokenSwapUrl;
  } else {
    console.log('Plug wallet connection was refused');
  }
}
// Calls the Main function when the document is ready
document.addEventListener("DOMContentLoaded", main);

/******/ })()
;
//# sourceMappingURL=index.js.map