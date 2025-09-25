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
      $(this).children(".elementControls").animate({ height: "20px" }, 250);
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
    console.log($("#inputTask").val());
    $("article").append(
      `
      
      
      <div class="elementCard">
          <div class="elementContent">` +
        $("#inputTask").val() +
        `</div>
          <div class="elementControls">
            <button class="elementDelete">delete</button>
            <button class="elementUp">up</button>
            <button class="elementDown">down</button>
          </div>
        </div>
      
      
      `
    );
    $("#inputTask").val("");

    $(".elementCard").hover(
      function () {
        $(this).children(".elementControls").stop(true, true);
        $(this).children(".elementControls").fadeIn(0);
        $(this).children(".elementControls").animate({ height: "20px" }, 250);
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
