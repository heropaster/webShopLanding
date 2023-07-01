const searchBtn = document.querySelector(".btn__search");
const topInput = document.querySelector(".top__input");
$(searchBtn).on("click", function () {
  $(this).toggleClass("active");
  $(topInput).toggleClass("mobile__hidden");
  $(topInput).toggleClass("mobile__shown");
  topInput.style.opacity = 1;
  if ($(topInput).css("opacity") === "0") {
    console.log(0);
    $(topInput).animate("opacity", 1);
  } else {
    console.log(1);
    $(topInput).animate("opacity", 0);
  }
});
