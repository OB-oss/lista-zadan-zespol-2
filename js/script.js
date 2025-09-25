// particlesJS.load('particles-js', 'assets/particles.json', function() {
//   console.log('callback - particles.js config loaded');
// });

function add() {
  alert("a");
}

$(document).ready(function () {
  $(".elementCard").hover(
    function () {
      $(this).children(".elementControls").stop(true, true);
      $(this).children(".elementControls").fadeIn(0);
      $(this).children(".elementControls").animate({ height: "50px" }, 250);
    },
    function () {
      $(this).children(".elementControls").stop(true, true);
      $(this).children(".elementControls").animate({ height: "0px" }, 250);
      $(this).children(".elementControls").fadeOut(0);
    }
  );
  $(".elementDelete").click(function () {
    $(this).parent().parent().fadeOut(1000);
    // $(this).fadeOut(0)
  });

  $("#inputButton").click(function () {
    if ($("#inputTask").val() != "") {
      console.log($("#inputTask").val());
      $("article").append(
        `
        
        
        <div class="elementCard">
            <div class="elementContent">` +
          $("#inputTask").val() +
          `</div>
            <div class="elementControls">
              <button class="elementDelete"><img src="img/bin.png" alt="bin"></button>
              <div></div>
              <button class="elementUp"><img src="img/up_arrow.png" alt="up"></button>
              <button class="elementDown"><img src="img/down_arrow.png" alt="down"></button>
            </div>
          </div>
        
        
        `
      );
      $("#inputTask").val("");
    }

    $(".elementCard").hover(
      function () {
        $(this).children(".elementControls").stop(true, true);
        $(this).children(".elementControls").fadeIn(0);
        $(this).children(".elementControls").animate({ height: "50px" }, 250);
      },
      function () {
        $(this).children(".elementControls").stop(true, true);
        $(this).children(".elementControls").animate({ height: "0px" }, 250);
        $(this).children(".elementControls").fadeOut(0);
      }
    );

    $(".elementDelete").click(function () {
      $(this).parent().parent().fadeOut(1000);
      // $(this).fadeOut(0)
    });
    $(".elementUp").unbind("click");
    $(".elementDown").unbind("click");
    $(".elementUp").click(function () {
      let current = $(this).parent().parent();
      console.log(current);
      let prev = current.prev("div"); // paragraf powyżej

      if (prev.length) {
        // jeśli istnieje paragraf powyżej
        current.insertBefore(prev);
      }
    });
    $(".elementDown").click(function () {
      let current = $(this).parent().parent();
      console.log(current);
      let prev = current.next("div"); // paragraf powyżej

      if (prev.length) {
        // jeśli istnieje paragraf powyżej
        current.insertAfter(prev);
      }
    });
  });

  $(".elementUp").click(function () {
    let current = $(this).parent().parent();
    console.log(current);
    let prev = current.prev("div"); // paragraf powyżej

    if (prev.length) {
      // jeśli istnieje paragraf powyżej
      current.insertBefore(prev);
    }
  });
  $(".elementDown").click(function () {
    let current = $(this).parent().parent();
    console.log(current);
    let prev = current.next("div"); // paragraf powyżej

    if (prev.length) {
      // jeśli istnieje paragraf powyżej
      current.insertAfter(prev);
    }
  });
});
