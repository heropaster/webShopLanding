const searchBtn = document.querySelector(".btn__search");
const searchPopupBg = document.querySelector(".searchBg.mobile");
const searchPopup = document.querySelector(".searchPopup");
const search = document.querySelector(".search");
$(searchBtn).on("click", function () {
  $(searchPopupBg).toggleClass("active");
  $(searchPopup).toggleClass("active");
});
document.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target === searchPopupBg || e.target === search) {
    searchPopupBg.classList.remove("active");
    searchPopup.classList.remove("active");
  }
});
