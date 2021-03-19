$(function() {
  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    const newBurger = {
      burger_name: $("#burger-input").val().trim()
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        location.reload();
      }
    );
  });

  $(".change-devoured").on("click", function(event) {
    const id = $(this).data("id");

    const newDevouredState = {
      devoured: 1
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {
        location.reload();
      }
    );
  });
})