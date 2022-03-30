$(document).ready(function () {
  $(".banner__menu-burger").click(function (event) {
    $(".banner__menu-burger, .banner__nav, .banner__content").toggleClass(
      "active"
    );
  });
});
