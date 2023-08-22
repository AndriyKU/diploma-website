// адаптивное меню для телефона
$("#hide-menu").click(openCloseMenu);

// событие resize, примененное к объекту window, которое срабатывает,
// только если размер окна браузера изменяется

window.addEventListener("resize", function() {
  let widthWindow = window.outerWidth;
  let displayMenu = $("aside").css("display");
  let menu = $("#hide-menu");
  if (widthWindow < 768) {
    $("aside").css({
      "height": "auto",
      "width": "65%",
      "position": "fixed",
      "top": "0",
      "left": "0",
      "bottom": "0",
      "z-index": "1",
      "overflow-y": "scroll"
    });
    if (displayMenu == "block") {
      $(".container").append(menu);
      $("#hide-menu").css({
        "position": "-webkit-sticky",
        "position": "sticky",
        "top": "20px",
        "right": "0",
        "color": "#7a7f83",
        "background-color": "#e5e9ec",
        "z-index": "1",
        "border-radius": "5px",
        "margin-left": "66%"
      });
     }
  } else if (widthWindow >= 768) {
    $("aside").css({
      "height": "100%",
      "width": "20%",
      "position": "static",
      "z-index": "0",
      "overflow": "hidden"
    });
    if (displayMenu == "block") {
      $("#global-block header").prepend(menu);
    }
    $("#hide-menu").css({
      "position": "static",
      "z-index": "0",
      "margin-left": "1%"
    });
  }
});

function openCloseMenu() {
  let widthWindow = window.outerWidth;
  // Увеличенное меню, которое открывается и закрывается для телефона
  if (widthWindow < 768) {
    let menu = $("#hide-menu");
    let displayMenu = $("aside").css("display");
    $("aside").css({
      "height": "auto",
      "width": "65%",
      "position": "fixed",
      "top": "0",
      "left": "0",
      "bottom": "0",
      "z-index": "1",
      "overflow-y": "scroll"
    });
    $("aside").animate({"width": "toggle"}, 1000);
    if (displayMenu == "none") {
        $("#hide-menu").animate({"margin-left": "66%"}, 1000);
        setTimeout(function() {
          $("#hide-menu").css({
            "position": "-webkit-sticky",
            "position": "sticky",
            "top": "20px",
            "right": "0",
            "color": "#7a7f83",
            "background-color": "#e5e9ec",
            "z-index": "1",
            "border-radius": "5px",
          });
          $(".container").append(menu);
        }, 1000);
      } else if (displayMenu == "block") {
        $("#hide-menu").animate({"margin-left": "1%"}, 1000);
        $("#hide-menu").css({
          "position": "static",
          "z-index": "0"
        });
        $("#global-block header").prepend(menu);
      }
    } else if (widthWindow >= 768) {
    // Меню, которое открывается и закрывается для планшетов и компьютеров
    $("aside").animate({"width": "toggle"}, 1000);
    // let positionMenu = $("aside").css("left");
    // let positionMain = $("#global-block").css("left");
    // console.log(positionMenu);
    // if (positionMenu == "-20%" && positionMain == "-20%") {
    //   $("aside").animate({
    //     "left": "0"
    //   }, 1000);
    //   $("#global-block").animate({
    //     "left": "0"
    //   }, 1000);
    // } else {
    //   $("aside").animate({
    //     "left": "-20%"
    //   }, 1000);
    //   $("#global-block").animate({
    //     "left": "-20%"
    //   }, 1000);
    // }

  }
}


// $("aside").css({
//   "position": "relative",
//   "left": "-20%"
// });
// $("#global-block").css({
//   "position": "relative",
//   "left": "-20%",
//   "right": "0"
// });
